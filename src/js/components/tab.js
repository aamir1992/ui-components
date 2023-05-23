// accordion tabs - Tab One JS

(function () {
  "use strict";

  const keyboardSupport = function (container, hasTabs) {
    const tablist = container.querySelectorAll('[role="tablist"]')[0];
    let tabs;
    let panels;

    const generateArrays = function () {
      panels = container.querySelectorAll('[role="tabpanel"]');
      tabs = container.querySelectorAll('[role="tab"]');
    };

    generateArrays();

    // For easy reference
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
      enter: 13,
      space: 32,
    };

    // Add or subtract depending on key pressed
    const direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1,
    };

    // Deactivate all tabs and tab panels
    const deactivateTabs = function () {
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute("tabindex", "-1");
        tabs[t].setAttribute("aria-selected", "false");
      }
    };

    // Activates any given tab panel
    const activateTab = function (tab, setFocus) {
      setFocus = setFocus || true;
      // Deactivate all other tabs
      deactivateTabs();

      // Remove tabindex attribute
      tab.removeAttribute("tabindex");

      // Set the tab as selected
      tab.setAttribute("aria-selected", "true");

      // Set focus when required
      if (setFocus) {
        tab.focus();
      }
    };

    const triggerTabClick = function (e) {
      const clickedId = e.target.getAttribute("id");
      if (clickedId) {
        const clickedTab = container.querySelector(
          '[aria-controls="' + clickedId + '"]'
        );
        clickedTab.click();
        document.getElementById(clickedId).scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const accordionClickEventListener = function (event) {
      triggerTabClick(event);
    };

    // When a tab is clicked, activateTab is fired to activate it
    const clickEventListener = function (event) {
      const tab = event.target;
      activateTab(tab, false);
    };

    // Make a guess
    const focusFirstTab = function () {
      const target = hasTabs ? tabs : panels;
      target[0].focus();
    };

    // Make a guess
    const focusLastTab = function () {
      const target = hasTabs ? tabs : panels;
      target[target.length - 1].focus();
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    const switchTabOnArrowPress = function (event) {
      const pressed = event.keyCode;

      if (direction[pressed]) {
        const target = event.target;
        const targetElems = hasTabs ? tabs : panels;
        if (target.index !== undefined) {
          if (targetElems[target.index + direction[pressed]]) {
            targetElems[target.index + direction[pressed]].focus();
          } else if (pressed === keys.left || pressed === keys.up) {
            focusLastTab();
          } else if (pressed === keys.right || pressed == keys.down) {
            focusFirstTab();
          }
        }
      }
    };

    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    const determineOrientation = function (event) {
      const key = event.keyCode;
      const vertical = tablist
        ? tablist.getAttribute("aria-orientation") === "vertical"
        : null;
      let proceed = false;

      if (vertical || !hasTabs) {
        if (key === keys.up || key === keys.down) {
          event.preventDefault();
          proceed = true;
        }
      } else {
        if (key === keys.left || key === keys.right) {
          proceed = true;
        }
      }

      if (proceed) {
        switchTabOnArrowPress(event);
      }
    };

    // Handle keydown on tabs
    const keydownEventListener = function (event) {
      const key = event.keyCode;
      switch (key) {
        case keys.end:
          event.preventDefault();
          // Activate last tab
          focusLastTab();
          break;
        case keys.home:
          event.preventDefault();
          // Activate first tab
          focusFirstTab();
          break;

        // Up and down are in keydown
        // because we need to prevent page scroll >:)
        case keys.up:
        case keys.down:
          determineOrientation(event);
          break;
      }
    };

    // Handle keyup on tabs
    const keyupEventListener = function (event) {
      const key = event.keyCode;
      switch (key) {
        case keys.left:
        case keys.right:
          determineOrientation(event);
          break;
        case keys.enter:
        case keys.space:
          if (hasTabs) {
            activateTab(event.target);
          } else {
            triggerTabClick(event);
          }
          break;
      }
    };

    const addListeners = function (index) {
      const target = hasTabs ? tabs[index] : panels[index];
      tabs[index].addEventListener("click", clickEventListener);
      if (target) {
        if (!hasTabs) {
          target.addEventListener("click", accordionClickEventListener);
        }
        target.addEventListener("keydown", keydownEventListener);
        target.addEventListener("keyup", keyupEventListener);
        // Build an array with all tabs (<button>s) in it
        target.index = index;
      }
    };

    // Bind listeners
    for (let i = 0; i < tabs.length; ++i) {
      addListeners(i);
    }

    // Accordion mode
    if (!hasTabs) {
      for (const panel of panels) {
        panel.onclick = function (e) {
          triggerTabClick(e);
        };
      }
    }
  };

  const toggleClass = function (otherElems, thisELem, className = "is-active") {
    for (const otherElem of otherElems) {
      otherElem.classList.remove(className);
    }
    thisELem.classList.add(className);
  };

  const toggleVerticalTabs = function (tabContainer, tabs, items, item) {
    item.onclick = function (e) {
      const currId = item.getAttribute("id");
      const tab = tabContainer.querySelector(
        '.ootb-tabcordion--tabs [aria-controls="' + currId + '"]'
      );
      toggleClass(tabs, tab);
      toggleClass(items, item);
    };
  };

  const toggleTabs = function (tabContainer) {
    const tabs = tabContainer.querySelectorAll(".ootb-tabcordion--tabs .tab");
    const items = tabContainer.querySelectorAll(".ootb-tabcordion--entry");
    for (const tab of tabs) {
      tab.onclick = function () {
        const target = tab.getAttribute("aria-controls");
        const content = document.getElementById(target);
        toggleClass(tabs, tab);
        toggleClass(items, content);
      };
    }
    for (const item of items) {
      toggleVerticalTabs(tabContainer, tabs, items, item);
    }
  };

  const hasTabs = function (container) {
    return container.classList.contains("has-tabs");
  };

  const modeSwitcher = function (tabContainer, containerWidth) {
    const tabs = tabContainer.querySelectorAll(".tab");
    const container = tabs[0].closest(".ootb-tabcordion");
    let totalW = 0;
    for (const tab of tabs) {
      totalW += tab.offsetWidth;
    }
    if (totalW >= containerWidth) {
      container.classList.remove("has-tabs");
    } else {
      container.classList.add("has-tabs");
    }
    keyboardSupport(tabContainer, hasTabs(container));
  };

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      modeSwitcher(entry.target, entry.contentRect.width);
    }
  });

  const tabContainers = document.querySelectorAll(".ootb-tabcordion");
  for (const tabContainer of tabContainers) {
    const tabList = tabContainer.querySelector(".ootb-tabcordion--tabs");
    resizeObserver.observe(tabList);
    toggleTabs(tabContainer);
    keyboardSupport(tabContainer, hasTabs(tabContainer));
  }
})();

// Tab-Three JS

("use strict");

/**
 * @function Tabs()
 *
 * Simple tabbed content UI component
 *
 * @param args {object} Settings for controlling the functionality of the component
 * @returns bindEventListeners {function} Event listeners for the component
 */

function Tabs(args) {
  // Scope-safe constructors
  if (!(this instanceof Tabs)) {
    return new Tabs();
  }

  /**
   * Default component settings
   *
   * @param container {string} Classname for container of the entire component
   * @param trigger {string} Element that toggles content
   * @param content {string} Classname for the content
   */
  var defaults = {
    container: "[data-tab-component]",
    trigger: '[role="tab"]',
    content: '[role="tabpanel"]',
  };

  // If there are no settings overrides
  var settings = typeof args !== "undefined" ? args : defaults;

  /**
   * @function toggle()
   *
   * Handles the displaying/hiding of content
   *
   * @returns null
   */
  var toggle = function () {
    var parent = this.closest(settings.container),
      target = this.getAttribute("aria-controls"),
      content = document.getElementById(target),
      toggles = parent.querySelectorAll(settings.trigger),
      all_content = parent.querySelectorAll(settings.content);

    // Update visibility
    for (var i = 0, len = toggles.length; i < len; i++) {
      toggles[i].setAttribute("aria-selected", "false");
      all_content[i].setAttribute("aria-hidden", "true");
    }

    this.setAttribute("aria-selected", "true");
    content.setAttribute("aria-hidden", "false");
  };

  /**
   * @function bindEventListeners()
   *
   * Attach event listeners
   *
   * @returns null
   */
  var bindEventListeners = function () {
    var trigger = document.querySelectorAll(settings.trigger);

    // Use event delgation to add event handlers

    for (var i = 0, len = trigger.length; i < len; i++) {
      trigger[i].addEventListener("click", function (event) {
        toggle.call(this);
      });

      trigger[i].addEventListener("keydown", function (event) {
        if (event.which == 13) {
          toggle.call(this);
        }
      });
    }
  };

  return bindEventListeners();
}

// Create an instance of component
window.onload = function () {
  var tabs = new Tabs();
};
