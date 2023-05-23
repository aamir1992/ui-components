
/* Accordion 1 */
let acc = document.querySelectorAll(".accordion--1 .accordion__item");

acc.forEach((element) => {
  element.addEventListener("click", () => {
    let panel = element.querySelector(".accordion__item--content");
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      element.classList.remove("open");
    } else {
      acc.forEach((element) => {
        element.classList.remove("open");
        element.querySelector(".accordion__item--content").style.maxHeight =
          null;
      });
      panel.style.maxHeight = panel.scrollHeight + "px";
      element.classList.toggle("open");
    }
  });
});
/*  */

/* Accordion type two Start */
(function () {
  const headings = document.querySelectorAll(".accordion__heading");
  const triggers = [];
  const accordionContents = document.querySelectorAll(".accordion__copy");
  const copyOpenClass = "accordion__copy--open";
  const borderClass = "border-none";

  headings.forEach((h, i) => {
    let btn = h.querySelector("button");
    triggers.push(btn);
    let target = h.nextElementSibling;
    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeItem(target, btn);
      } else {
        openItem(target, btn);
      }
    };
  });
  function closeAllExpandedItems() {
    const expandedTriggers = triggers.filter(
      (t) => t.getAttribute("aria-expanded") === "true"
    );
    const expandedCopy = Array.from(accordionContents).filter((c) =>
      c.classList.value.includes(copyOpenClass)
    );
    expandedTriggers.forEach((trigger) => {
      trigger.setAttribute("aria-expanded", false);
      trigger.classList.remove(borderClass);
    });
    expandedCopy.forEach((copy) => {
      copy.classList.remove(copyOpenClass);
      copy.style.maxHeight = 0;
      copy.style.padding = "0 1.5rem 0 1.5rem";
    });
  }
  function closeItem(target, btn) {
    closeAllExpandedItems();
    btn.setAttribute("aria-expanded", false);
    btn.classList.remove(borderClass);
    target.classList.remove(copyOpenClass);
    target.style.maxHeight = 0;
    target.style.padding = "0 1.5rem 0 1.5rem";
  }
  function openItem(target, btn) {
    closeAllExpandedItems();
    btn.setAttribute("aria-expanded", true);
    target.classList.add(copyOpenClass);
    btn.classList.add(borderClass);
    target.style.maxHeight = target.scrollHeight + "px";
    target.style.padding = "1rem 1.5rem 2rem 1.5rem";
  }
  setTimeout(() => {
    if(triggers.length > 0) {
      triggers[0].click()
    }
  }, 750);
})();

/* Accordion type three Start */
(function () {
  var list = document.getElementById("accordionUL");
  const accordionContentsList = document.querySelectorAll(".accordionList");

  function AccordionExpand() {
    if(this.classList.contains('active')) {
      this.classList.remove("active");
      var childNodesSelfRemove = this.querySelector(".section-content");
      childNodesSelfRemove.classList.remove("visible");
      return;
    }

    accordionContentsList.forEach((list) => {
      list.classList.remove("active");

      var childNodesRemove = list.querySelector(".section-content");
      childNodesRemove.classList.remove("visible");
    });
    this.classList.add("active");
    setTimeout(() => {
      var childNodesAdd = this.querySelector(".section-content");
      childNodesAdd.classList.add("visible");
    }, 500);
  }

  if(list) {
    for (let i = 0; i <= list.childElementCount - 1; i++) {
      list.children[i].addEventListener("click", AccordionExpand);
    }
  }

})();
