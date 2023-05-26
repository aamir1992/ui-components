import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, f as renderComponent, m as maybeRenderHead } from './chunk.498f38b6.js';
import 'html-escaper';
/* empty css                */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$Y = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width">\n  <meta name="robot" content="noindex, nofollow">\n  <link rel="icon" type="image/svg+xml" href="/favicon.png">\n  <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> -->\n  <meta name="theme-color" content="#B2142D">\n  <meta name="generator"', '>\n  <!-- <link rel="manifest" href="/manifest.json" /> -->\n  <title>Rage UI Components</title>\n  <meta name="description" content="">\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">\n  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">\n  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">\n    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@100;200;300;400;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" crossorigin="anonymous">\n  <script defer src="https://code.jquery.com/jquery-3.6.1.min.js"><\/script>\n  \n  <script defer type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"><\/script>\n  <!-- swiper js -->\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">\n  <script defer src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"><\/script>\n  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"><\/script>\n', "</head>\n\n<body>\n  ", "\n  \n</body>\n\n</html>"])), addAttribute(Astro2.generator, "content"), renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "C:/rage/learning projects/ui-bs/src/layouts/Layout.astro");

const FooterImg = "/assets/images/footer.png";

const cardImg = "/assets/images/cards.png";

const accordionImg = "/assets/images/accordion.png";

const contentImg = "/assets/images/content-type.png";

const sliderImg = "/assets/images/slider.png";

const tabImg = "/assets/images/tab.png";

const bannerImg = "/assets/images/banner.png";

const logo$1 = "/assets/images/maskable.png";

const $$Astro$X = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "cards" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="index_container">
    <div class="index_container__wrapper">
      <img class="indexLogo"${addAttribute(logo$1, "src")} alt="Logo">
      <h2 class="index_container__title">UI Components</h2>
    </div>

    <div class="index_card">
      <div class="index_card--box">
        <a href="/cards">
          <img${addAttribute(cardImg, "src")} alt="cardImg">
          <div class="viewBtn">View</div>
          <p>Card Components</p>
        </a>
      </div>
      <div class="index_card--box">
        <a href="/accordion">
          <img${addAttribute(accordionImg, "src")} alt="accordionImg">
          <div class="viewBtn">View</div>
          <p>Accordion Components</p>
        </a>
      </div>
      <div class="index_card--box">
        <a href="/slider">
          <img${addAttribute(sliderImg, "src")} alt="sliderImg">
          <div class="viewBtn">View</div>
          <p>Slider Components</p>
        </a>
      </div>
      <div class="index_card--box">
        <a href="/banner/herobanner">
          <img${addAttribute(bannerImg, "src")} alt="bannerImg">
          <div class="viewBtn">View</div>
          <p>Banner Components</p>
        </a>
      </div>
      <div class="index_card--box">
        <a href="/content-type">
          <img${addAttribute(contentImg, "src")} alt="contentImg">
          <div class="viewBtn">View</div>
          <p>Content Type Components</p></a>
      </div>
      <div class="index_card--box">
        <a href="/tab">
          <img${addAttribute(tabImg, "src")} alt="tabImg">
          <div class="viewBtn">View</div>
          <p>Tab Components</p>
        </a>
      </div>
      <div class="index_card--box">
        <a href="/footer">
          <img${addAttribute(FooterImg, "src")} alt="FooterImg">
          <div class="viewBtn">View</div>
          <p>Footer Components</p>
        </a>
      </div>
      <a href="/homePageOne" class="index_card--box" target="_blank">
        <div class="viewBtn">View</div>
        <h1>Home Page One</h1>
      </a>
      <a href="/homePageTwo" class="index_card--box" target="_blank">
        <div class="viewBtn">View</div>
        <h1>Home Page Two</h1>
      </a>
    </div>
  </div>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/index.astro");

const $$file$f = "C:/rage/learning projects/ui-bs/src/pages/index.astro";
const $$url$f = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$f,
  url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$W = createAstro();
const $$HeaderTypeThree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$HeaderTypeThree;
  return renderTemplate`<!-- <Layout title="header">
  <HeaderTypeThree />
  <main> --><!-- <Banner/> --><!-- </Layout> -->`;
}, "C:/rage/learning projects/ui-bs/src/pages/header-type-three.astro");

const $$file$e = "C:/rage/learning projects/ui-bs/src/pages/header-type-three.astro";
const $$url$e = "/header-type-three";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HeaderTypeThree,
  file: $$file$e,
  url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$V = createAstro();
const $$HeaderTypeTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$HeaderTypeTwo;
  return renderTemplate`<!-- <Layout title="header">
  <HeaderTypetwo />
  <main>
    <Banner />
  </main>
</Layout> -->`;
}, "C:/rage/learning projects/ui-bs/src/pages/header-type-two.astro");

const $$file$d = "C:/rage/learning projects/ui-bs/src/pages/header-type-two.astro";
const $$url$d = "/header-type-two";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HeaderTypeTwo,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const purpleBg$1 = "/assets/images/purple-bg.jpg";

const cardImg2 = "/assets/images/card2.jpg";

const bannerimg1 = "/assets/images/hero-banner-2.jpg";

const $$Astro$U = createAstro();
const $$Content1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$Content1;
  return renderTemplate`<!-- 2 Column section with background -->${maybeRenderHead($$result)}<section class="section--mar section--pad bgimg"${addAttribute(`background-image: url(${purpleBg$1});`, "style")}>
    <div class="container">
        <div class="col col2">
            <div class="col__content">
                <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
                <p class="txt-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                    asperiores adipisci error quos?
                </p>
                <div class="btn__wrap">
                    <a href="" class="button primary hoverable">Explore Now</a>
                    <a href="" class="button primary hoverable">Contact Us</a>
                </div>
            </div>
            <div class="col__img">
                <img${addAttribute(cardImg2, "src")} alt="">
            </div>
        </div>
    </div>
</section>
<!--  -->
<!-- 2 Column section with background -->
<section class="section--mar section--pad bgimg"${addAttribute(`background-image: url(${purpleBg$1});`, "style")}>
    <div class="container">
        <div class="col col2">
            <div class="col__img">
                <div class="curveanim">
                    <img${addAttribute(bannerimg1, "src")} alt="">
                </div>
                </div>
            <div class="col__content">
                <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
                <p class="txt-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                    asperiores adipisci error quos?
                </p>
                <div class="btn__wrap">
                    <a href="" class="button primary hoverable">Explore Now</a>
                    <a href="" class="button primary hoverable">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/content-types/Content--1.astro");

const dashboardimg = "/assets/images/projectdashboard.png";

const $$Astro$T = createAstro();
const $$Content2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$Content2;
  return renderTemplate`<!-- 2 Column -->${maybeRenderHead($$result)}<section class="section--mar">
    <div class="container">
        <div class="col col2">
            <div class="col__img">
                <img${addAttribute(dashboardimg, "src")} alt="">
            </div>
            <div class="col__content">
                <h5 class="section__highlight">Lorem ipsum</h5>
                <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                    asperiores adipisci error quos?
                </p>
                <ul class="list">
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    <li>Optio doloremque quos voluptatem nisi cupiditate laudantium quidem!</li>
                    <li>Ea illum recusandae, autem accusamus eius eum sunt.</li>
                    <li>Expedita temporibus ipsa similique qui asperiores aut saepe!</li>
                    <li>Praesentium nam harum quis fugiat consequatur in perferendis.</li>
                    <li>Nemo fugit vitae nostrum iusto voluptatibus repellat harum.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!--  -->
<!-- 2 Column reverse -->
<section class="section--mar">
    <div class="container">
        <div class="col col2 col2__reverse">
            <div class="col__content">
                <h5 class="section__highlight">Lorem ipsum</h5>
                <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                    asperiores adipisci error quos?
                </p>
                <div class="accordion accordion--1">
                    <div class="accordion__item">
                        <h3 class="accordion__item--title">
                            Lorem ipsum dolor sit, amet ?
                        </h3>
                        <p class="accordion__item--content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                            exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                        </p>
                    </div>
                    <div class="accordion__item">
                        <h3 class="accordion__item--title">
                            Lorem ipsum dolor sit, amet ?
                        </h3>
                        <p class="accordion__item--content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                            exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                        </p>
                    </div>
                    <div class="accordion__item">
                        <h3 class="accordion__item--title">
                            Lorem ipsum dolor sit, amet ?
                        </h3>
                        <p class="accordion__item--content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                            exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                        </p>
                    </div>
                </div>
            </div>
            <div class="col__img">
                <img${addAttribute(dashboardimg, "src")} alt="">
            </div>
        </div>
    </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/content-types/Content--2.astro");

const $$Astro$S = createAstro();
const $$Content3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Content3;
  return renderTemplate`<!-- Single Column reverse -->${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
  <div class="container">
    <div class="col">
      <div class="col__content">
        <h5 class="section__highlight">Lorem ipsum</h5>
        <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid
          natus odit commodi, fugit maxime! Blanditiis, debitis porro natus
          similique exercitationem iste alias at accusantium. Blanditiis tempore
          labore et, sint explicabo voluptas sequi laboriosam ipsa illum
          perspiciatis, dicta ex minus aspernatur maiores quidem provident enim
          minima eaque! Provident, expedita error.
        </p>
        <ul class="list">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>
            Optio doloremque quos voluptatem nisi cupiditate laudantium quidem!
          </li>
          <li>Ea illum recusandae, autem accusamus eius eum sunt.</li>
          <li>Expedita temporibus ipsa similique qui asperiores aut saepe!</li>
          <li>Praesentium nam harum quis fugiat consequatur in perferendis.</li>
          <li>Nemo fugit vitae nostrum iusto voluptatibus repellat harum.</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          commodi alias. Eaque recusandae sapiente animi vel natus quae quaerat
          excepturi perspiciatis ex cum consectetur, eum facere iusto, ipsum
          voluptatibus sed officiis iure consequatur voluptate nostrum
          voluptatem mollitia quos. Odit sed ut dolorem sunt vero excepturi
          accusamus ducimus, ab earum rerum unde vitae nesciunt assumenda sint,
          minima cupiditate dolorum natus debitis ea voluptatem qui? Aut soluta
          ab impedit ex voluptates est, et necessitatibus officia rerum, dolores
          autem ducimus expedita animi eos aliquid? Suscipit explicabo ullam
          obcaecati sapiente, aut quaerat doloribus a corrupti debitis facere
          rem magnam, totam pariatur. Alias, dignissimos a.
        </p>
        <div class="accordion accordion--1">
          <div class="accordion__item">
            <h3 class="accordion__item--title">
              Lorem ipsum dolor sit, amet ?
            </h3>
            <p class="accordion__item--content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              exercitationem fugit nisi voluptatibus praesentium enim obcaecati
            </p>
          </div>
          <div class="accordion__item">
            <h3 class="accordion__item--title">
              Lorem ipsum dolor sit, amet ?
            </h3>
            <p class="accordion__item--content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              exercitationem fugit nisi voluptatibus praesentium enim obcaecati
            </p>
          </div>
          <div class="accordion__item">
            <h3 class="accordion__item--title">
              Lorem ipsum dolor sit, amet ?
            </h3>
            <p class="accordion__item--content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              exercitationem fugit nisi voluptatibus praesentium enim obcaecati
            </p>
          </div>
        </div>
      </div>
      <div class="col__content text-center">
        <img${addAttribute(dashboardimg, "src")} alt="">
      </div>
    </div>
  </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/content-types/Content--3.astro");

const purpleBg = "/assets/images/bgimg-1.jpg";

const $$Astro$R = createAstro();
const $$Content4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$Content4;
  return renderTemplate`<!-- Newsletter 2 Column -->${maybeRenderHead($$result)}<section class="section--mar section--pad bg-dark">
    <div class="container">
        <div class="newsletter newsletter--col2">
            <div class="text-left">
                <h2>Join our community by using our services and grow your business.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam!</p>
            </div>
            <div class="text-right">
                <a href="" class="button primary hoverable">Explore Now</a>
            </div>
        </div>
    </div>
</section>
<!--  -->
<!-- Newsletter 1 column -->
<section class="section--mar section--pad bg-dark">
    <div class="container">
        <div class="newsletter">
            <div class="text-center">
                <h2>Join our community by using our services and grow your business.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam!</p>
                <a href="" class="button primary hoverable">Explore Now</a>
            </div>
        </div>
    </div>
</section>
<!--  -->
<!-- Single Column section with background -->
<section class="section--mar section--pad bgimg"${addAttribute(`background-image: url(${purpleBg});`, "style")}>
    <div class="container">
        <div class="col">
            <div class="col__content text-center">
                <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
                <p class="txt-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                    asperiores adipisci error quos?
                </p>
                <a href="" class="button primary hoverable">Explore Now</a>
            </div>
        </div>
    </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/content-types/Content--4.astro");

const $$Astro$Q = createAstro();
const $$Content5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Content5;
  return renderTemplate``;
}, "C:/rage/learning projects/ui-bs/src/components/content-types/Content--5.astro");

const arrowLeft = "data:image/png;base64,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";

const $$Astro$P = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$BackButton;
  return renderTemplate`${maybeRenderHead($$result)}<section class="backButton">
    <div class="container">
        <div class="row">
            <div class="col-12 text-left">
                <a href="/" title="Back to home page">
                    <img class="back-button"${addAttribute(arrowLeft, "src")} alt="Back">
                    <span>Back</span>
                </a>
            </div>
        </div>
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/BackButton/BackButton.astro");

const $$Astro$O = createAstro();
const $$ContentType = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$ContentType;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Text & Img - UI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Content1", $$Content1, {})}
    ${renderComponent($$result2, "Content2", $$Content2, {})}
    ${renderComponent($$result2, "Content3", $$Content3, {})}
    ${renderComponent($$result2, "Content4", $$Content4, {})}
    ${renderComponent($$result2, "Content5", $$Content5, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/content-type.astro");

const $$file$c = "C:/rage/learning projects/ui-bs/src/pages/content-type.astro";
const $$url$c = "/content-type";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContentType,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const cardImg1 = "/assets/images/card1.jpg";

const cardImg3 = "/assets/images/card3.jpg";

const pimg1 = "/assets/images/productimg1.png";

const pimg2 = "/assets/images/productimg2.png";

const pimg3 = "/assets/images/productimg3.png";

const memberimg1 = "/assets/images/cardmember1.png";

const memberimg2 = "/assets/images/cardmember2.png";

const memberimg3 = "/assets/images/cardmember3.png";

const blogcard1 = "/assets/images/blog-1.jpg";

const blogcard2 = "/assets/images/blog-2.jpg";

const blogcard3 = "/assets/images/blog-3.jpg";

const data$1 = [
    {
        id: 1,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg1,
        productimg: pimg1,
        userimg: memberimg1,
        blogimg: blogcard1,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
        category: "Pizza",
    },
    {
        id: 2,
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg2,
        productimg: pimg2,
        userimg: memberimg2,
        blogimg: blogcard2,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
        category: "Burger",
    },
    {
        id: 3,
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg3,
        productimg: pimg3,
        userimg: memberimg3,
        blogimg: blogcard3,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
        category: "Chicken",
    },
    {
        id: 4,
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg1,
        productimg: pimg1,
        userimg: memberimg1,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
    },
    {
        id: 5,
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg2,
        productimg: pimg2,
        userimg: memberimg2,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
    },
    {
        id: 6,
        title:"Lorem, ipsum dolor sit amet consectetur adipisicing",
        subtitle: "Lorem ipsum",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde?",
        img: cardImg3,
        productimg: pimg3,
        userimg: memberimg3,
        userdesignation: "Lorem ipsum dolar",
        userorganization: "Lorem ipsun dolar",
    },
];

const data = [
	{
		id: 1,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "UI Design",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "images/image-one.jpg"
	},
	{
		id: 2,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "UX Design",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 3,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "Front-End Design",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 4,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "Backend Developer",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 5,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "DevOps",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 6,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "Magento",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 7,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "Wordpress",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 8,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "Drupal",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 9,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "CMS",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		id: 10,
		"content-medium": "Lorem ipsum dolor sit amet",
		"content-small": "ContentFull",
		"content-large": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		"content-extra": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	}
];

const $$Astro$N = createAstro();
const $$SliderTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$SliderTwo;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiperTwo">
  <div class="swiper mySwiperTwo">
    <div class="swiper-wrapper mySwiperTwo__wrapper">
      ${data.slice(0, 5).map((slide) => renderTemplate`<div class="swiper-slide mySwiperTwo__slide">
            <div class="slide__flex">
              <div class="slide__flex--title">${slide["content-small"]}</div>
              <div class="slide__flex--desc">${slide["content-extra"]}</div>
              <button class="btn slide__flex--discover">Discover</button>
            </div>
          </div>`)}
    </div>
    <div class="button-section">
      <div class="swiper-button-next button-section--next"></div>
      <div class="swiper-button-prev button-section--prev"></div>
      <div class="swiper-pagination button-section--pagination"></div>
    </div>
  </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderTwo.astro");

const $$Astro$M = createAstro();
const $$Footerfive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Footerfive;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footerfive">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="footer">
                    <div class="col-lg-6 col-12">
                        <div class="footer__firstcol">
                            <h3>Heading</h3>
                            <p class="content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="footer__seccol">
                            <h3>Category1</h3>
                            <ul>
                                <li><a href="javascript:void(0)">Link1</a></li>
                                <li><a href="javascript:void(0)">Link2</a></li>
                                <li><a href="javascript:void(0)">Link3</a></li>
                                <li><a href="javascript:void(0)">Link4</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="footer__thirdcol">
                            <h3>Category2</h3>
                            <ul>
                                <li><a href="javascript:void(0)">Link1</a></li>
                                <li><a href="javascript:void(0)">Link2</a></li>
                                <li><a href="javascript:void(0)">Link3</a></li>
                                <li><a href="javascript:void(0)">Link4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <p class="footer__copyright">
                    © rage communication.. 2023 All rights reserved.
                </p>
            </div>
            <div class="col-lg-6 col-12">
                <div class="footer__fourthcol">
                    <ul class="socialmedia">
                        <li>
                            <a href="javascript:void(0);"><img src="../../img/facebook.png" title="" alt=""></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="../../img/facebook.png" title="" alt=""></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="../../img/facebook.png" title="" alt=""></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="../../img/facebook.png" title="" alt=""></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footerfive.astro");

const $$Astro$L = createAstro();
const $$SliderSeven = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$SliderSeven;
  return renderTemplate`${maybeRenderHead($$result)}<div class="">
  <div class="swiper-container mySwiperSeven">
    <div class="swiper-wrapper mySwiperSeven__wrapper">
      <div class="swiper-slide mySwiperSeven__wrapper--slide-1">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-2">
        <h3 class="mb-22">UX Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-3">
        <h3 class="mb-22">Front-End Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-4">
        <h3 class="mb-22">Devops</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-5">
        <h3 class="mb-22">Wordpress</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-6">
        <h3 class="mb-22">Drupal</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-7">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-8">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
      <div class="swiper-slide mySwiperSeven__wrapper--slide-9">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperSeven__wrapper--button-section">
          <button class="mySwiperSeven__wrapper--button">Discover</button>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="buttonFour">
      <div class="swiper-button-prev buttonFour--prev"></div>
      <div class="swiper-button-next buttonFour--next"></div>
    </div>
  </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderSeven.astro");

const searchIconWhite = "/assets/images/search-icon-white.svg";

const searchIconBlack = "/assets/images/search-icon-black.svg";

const megaMenuLogo = "/assets/images/image-one.jpg";

const $$Astro$K = createAstro();
const $$SearchBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$SearchBlock;
  return renderTemplate`${maybeRenderHead($$result)}<div class="search-block">
    <form class="search-form">
       <span><img${addAttribute(arrowLeft, "src")} class="search-cancel" alt="Arrow"></span>
       <input type="search" name="search" class="search-input" placeholder="Search here...">
    </form>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Header/SearchBlock.astro");

const $$Astro$J = createAstro();
const $$HeaderTypeOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$HeaderTypeOne;
  return renderTemplate`<!--===========================================
	Header 
===============================================-->${maybeRenderHead($$result)}<header class="headerTypeOne header">
  <nav>
    <div class="container">
      <div class="wrapper">
        <div class="logo"><a href="#"><img${addAttribute(logo$1, "src")} alt="Logo"></a></div>
        <div class="filler"></div>
        <ul class="nav-links">
          <li class="has-submenu"><a href="#" title="Our Company">Our Company</a></li>
          <li class="has-submenu">
            <a href="#" class="desktop-item">Our Trends &nbsp;<i class="fa fa-angle-down"></i></a>
            <div class="mega-box">
              <div class="content">
                <div class="mega-menu-flex-row">
                  <img${addAttribute(megaMenuLogo, "src")} alt="Menu Image">
                </div>
                <div class="mega-menu-flex-row">
                  <div class="megaMenuTitle">Design Services</div>
                  <ul class="mega-links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Vectors</a></li>
                    <li><a href="#">Business cards</a></li>
                    <li><a href="#">Custom logo</a></li>
                  </ul>
                </div>
                <div class="mega-menu-flex-row">
                  <div class="megaMenuTitle">Email Services</div>
                  <ul class="mega-links">
                    <li><a href="#">Personal Email</a></li>
                    <li><a href="#">Business Email</a></li>
                    <li><a href="#">Mobile Email</a></li>
                    <li><a href="#">Web Marketing</a></li>
                  </ul>
                </div>
                <div class="mega-menu-flex-row">
                  <div class="megaMenuTitle">Security services</div>
                  <ul class="mega-links">
                    <li><a href="#">Site Seal</a></li>
                    <li><a href="#">VPS Hosting</a></li>
                    <li><a href="#">Privacy Seal</a></li>
                    <li><a href="#">Website design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="has-submenu">
            <a href="#" class="desktop-item">Our Technology &nbsp;<i class="fa fa-angle-down"></i></a>
            <ul class="drop-menu">
              <li>
                <a href="#" title="Artificial intelligence">Artificial intelligence</a>
              </li>
              <li class="has-subchildmenu">
                <a href="#" class="desktop-item" title="Internet of things">Internet of things &nbsp;<i class="fa fa-angle-down"></i></a>
                <ul class="drop-submenu">
                    <li>
                      <a href="#" title="Robotics">Robotics</a>
                    </li>
                    <li><a href="#" title="Quantum computing">Quantum computing</a></li>
                    <li>
                      <a href="#" title="Automation">Automation</a>
                    </li>
                </ul>
              </li>
              <li>
                <a href="#" title="Augmented reality">Augmented reality</a>
              </li>
            </ul>
          </li>
          <li><a href="#" title="Contact Us">Contact Us</a></li>
        </ul>
        <div class="outsideMenu">
          <div class="outsideMenu__padding">
            <span>
                <img${addAttribute(searchIconWhite, "src")} class="search-toggle icon-white" alt="Search" title="Search">
                <img${addAttribute(searchIconBlack, "src")} class="search-toggle icon-black" alt="Search" title="Search">
              </span>
          </div>
          <!-- <div class="outsideMenu__padding search">
            <img class="search-icon" src={searchIconWhite} alt="Search" title="Search" />
          </div> -->
          <div class="outsideMenu__padding">
            <a class="button primary outlined border-1" href="#" title="Message">Message</a>
          </div>
        </div>
        <label for="menu-btn" class="btn menu-btn" id="menuBtn">
          <span></span>
        </label>
      </div>
    </div>
  </nav>
  <!-- <Search/> -->
  ${renderComponent($$result, "SearchBlock", $$SearchBlock, {})}
</header>

<div class="backdrop"></div>


<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/Header/HeaderTypeOne.astro");

const scrollTop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+cEEQsRFwbvXpYAAAKqSURBVEjHtdfPa1xlFMbxz1xlDMmgCZhJmmk6FUNMQgsxSJlSCbQiFttiICvBbgpdaMEi2EXwXxDBH6N20U13XVRwUyLZ2EAhVQkBMZYSiiFOiLGQsYwlTpS6mNw2Te69SWb0WV3OOe93znt43/OeSUlSWqucnDZNWLWipKSsGr8kFevpMigvo2zZPVWkPaNdq4p5MxZ3A8wb1mnOrAX3N/madRvQY8mk+Z0AW7yq17QplYRiZBQMuW3Cn8nAnFG/G7die7U5rsNVC/Eh/T5QSKjr1v0dNqYvzt2nqLBjWKiDPjMQ5cgZc3DXOCgYs3ezscW7dWQX6pDzWmqfT6ybTqj6pm7goufscwsCkNdr3IO6gQ+M65V/BBw2vaODEq8V04ZDYJdOUw3hYEqnrhpw0FzirdiZKuYMEkjLm20YB7Py0oFWmaTLs64XnfHsNjELMloDOeUtHWWzXnZJ0YeyiVH3leUCOcvb4I750pL3HfGJPYmRy3KcdjQx6LhbvrYfr7vtK/sSYo86HWhKaOgpp3zqR+f8gmvO6VP0fGx8VVOQ8Hspoz72vfN+XbdMeEfe516IXxRYlY7xvOkj17332Ovxrbe1uxjdsKStctJIpPMtJV9EHpWXfOdGZJZvOBkoaY/c7n6Xjbkb4fvBWQu6IjxZJbIuaI5M/8mE+j71sPE9UrMLsoGyiu6IJVV/JwD/8s8WW7eKcqBqPqbEu9WAedUAM3pkGsZl9Jipta9FSw28J6EKliyGHXvSkLaGcG2GTBI+Un9o1++nunEpI35zkzBDJnQ0sO2CDhO1z/A0rSkZsfbw1u5GB7zmStQV6Fd0oI7sihunm43n/a47TlmLGyUja3fYKy77eaPpce01armRce5/Hzhr+k9H4lBRQ/vTsvUN7aHq+FvxL4U6tTiymrDSAAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAJAxRu8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDQtMTdUMTE6MTc6MTUrMDA6MDBbiiYVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA0LTE3VDExOjE3OjE1KzAwOjAwKteeqQAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wNC0xN1QxMToxNzoyMyswMDowMJCdja8AAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAABd0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24ANzLswKITAAAAF3RFWHRleGlmOlBpeGVsWURpbWVuc2lvbgA3MjFWe5YAAAAASUVORK5CYII=";

const $$Astro$I = createAstro();
const $$ScrollTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$ScrollTop;
  return renderTemplate`${maybeRenderHead($$result)}<div class="scrollTop">
    <a href="#" title="Scroll to Top"><img${addAttribute(scrollTop, "src")} alt="Top"></a>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/ScrollTop/ScrollTop.astro");

const $$Astro$H = createAstro();
const $$LoaderTypeOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$LoaderTypeOne;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="panels">
    <li class="panel"></li>
    <li class="panel"></li>
    <li class="panel"></li>
    <li class="panel"></li>
    <li class="panel"></li>
    <li class="panel"></li>
</ul>`;
}, "C:/rage/learning projects/ui-bs/src/components/PageLoader/LoaderTypeOne.astro");

const $$Astro$G = createAstro();
const $$HomePageOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$HomePageOne;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeaderTypeOne", $$HeaderTypeOne, {})}${renderComponent($$result2, "LoaderTypeOne", $$LoaderTypeOne, {})}${maybeRenderHead($$result2)}<main class="page-main">
    ${renderComponent($$result2, "SliderTwo", $$SliderTwo, {})}
    ${renderComponent($$result2, "Content2", $$Content2, {})}
    <section>
      <div class="container">
        <!-- Card Type 1 -->
        <div class="row">
          ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
            <div class="card card--1"${addAttribute(`background-image: url("${input.img}");`, "style")}>
              <div class="card__content">
                <h3>${input.title}</h3>
                <p>${input.description}</p>
                <a href="#" class="readmore">
                  Readmore
                </a>
              </div>
            </div>
          </div>`;
  })}
        </div>
        <!--  -->
      </div>
    </section>
    ${renderComponent($$result2, "SliderSeven", $$SliderSeven, {})}
    <section class="section--mar">
      <div class="container">
        <div class="col">
          <div class="col__content text-center">
            <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid natus odit commodi, fugit
              maxime! Blanditiis, debitis porro natus similique exercitationem iste alias at accusantium.
              Blanditiis tempore labore et, sint explicabo voluptas sequi laboriosam ipsa illum perspiciatis,
              dicta ex minus aspernatur maiores quidem provident enim minima eaque! Provident, expedita error.
            </p>
          </div>
        </div>
        <!-- Card Type 5 -->
        <div class="row mb-60">
          ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
            <div class="card card--5">
              <div class="card__head">
                <div class="card__head--profileimg card--circlewrap">
                  <img${addAttribute(input.userimg, "src")} alt="">
                </div>
                <div class="card__head--profiledetail">
                  <h3>${input.subtitle}</h3>
                  <p>${input.userdesignation}</p>
                </div>
              </div>
              <div class="card__content">
                <p>"${input.description}"</p>
              </div>
            </div>
          </div>`;
  })}
        </div>
        <!--  -->
      </div>
    </section>
    ${renderComponent($$result2, "Content1", $$Content1, {})}
    ${renderComponent($$result2, "Footerfive", $$Footerfive, {})}
    ${renderComponent($$result2, "ScrollTop", $$ScrollTop, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/homePageOne.astro");

const $$file$b = "C:/rage/learning projects/ui-bs/src/pages/homePageOne.astro";
const $$url$b = "/homePageOne";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HomePageOne,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$F = createAstro();
const $$HeaderTypetwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$HeaderTypetwo;
  return renderTemplate`<!--===========================================
	Header Type Two
===============================================-->${maybeRenderHead($$result)}<header class="headerTypeTwo header">
    <div class="container">
        <div class="flex-menu">
            <a href="#" title="Logo"><img class="logo desktop-only"${addAttribute(logo$1, "src")} alt="Logo" title="Logo">
                <img class="logo device-only"${addAttribute(logo$1, "src")} alt="Logo" title="Logo">
            </a>
            <div class="rt-col">
                <div class="search">
                  <img${addAttribute(searchIconWhite, "src")} class="search-icon icon-white" alt="Logo">
                  <img${addAttribute(searchIconBlack, "src")} class="search-icon icon-black" alt="Logo">
                </div>
                <div class="hamburger main-ham">
                  <input type="checkbox"><span> </span><span></span>
                </div>
            </div>
        </div>

        <div>
            <div class="search-overlay">
                <div class="container">
                <img class="logo overlay-logo"${addAttribute(logo$1, "src")} alt="Logo" title="Logo">
                  <div class="hamburger">
                    <input type="checkbox" checked readonly><span> </span><span></span>
                  </div>
                  <div class="search-box">
                    <input id="pages" placeholder="Search" tabindex="-1">
                    <input type="hidden" id="pages-id">
                    <div class="scroll-box">
                      <a href="javascript:;" class="upclick"></a>
                      <a href="javascript:;" class="downclick"></a>
                    </div>
                  </div>
                </div>
              </div>
              <ul id="menu">
                <div class="container">
                  <img class="logo overlay-logo"${addAttribute(logo$1, "src")} alt="Logo" title="Logo">
                  <li><a class="home-page" href="index.html" title="HOME">HOME</a></li>
                  <li>
                    <a class="about-page" href="about-us.html" title="ABOUT US">ABOUT US</a>
                  </li>
                  <li>
                    <a class="youth-page" href="our-youth.html" title="OUR YOUTH">OUR YOUTH</a>
                  </li>
                  <li>
                    <a class="research-page" href="research-engagement.html" title="RESEARCH & ENGAGEMENT">RESEARCH & ENGAGEMENT</a>
                  </li>
                  <li>
                    <a class="programmes-page" href="programme-grants.html" title="PROGRAMMES & GRANTS">PROGRAMMES & GRANTS</a>
                  </li>
                  <li>
                    <a class="youthAction-page" href="youth-action-challenge.html" title="YOUTH ACTION CHALLENGE">YOUTH ACTION CHALLENGE</a>
                  </li>
                  <li>
                    <a class="whatsnew-page" href="newsroom.html" title="NEWSROOM">NEWSROOM</a>
                  </li>
                  <li>
                    <a class="joinus-page" href="contact-us.html" title="CONTACT US">CONTACT US</a>
                  </li>
                </div>
              </ul>      
        </div>        
    </div>
</header>`;
}, "C:/rage/learning projects/ui-bs/src/components/Header/HeaderTypetwo.astro");

const $$Astro$E = createAstro();
const $$SliderSix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$SliderSix;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper-container">
  <div class="mySwiperSix">
    <div class="swiperSix-wrapper swiper-wrapper sliderSix">
      <div class="main swiper-slide swiperSix-wrapper__slide--1">
        <div class="center-side">
          <div class="main-wrapper">
            <h3 class="main-header">UI Design</h3>
            <h1 class="main-title">UI Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
      <div class="main swiper-slide swiperSix-wrapper__slide--2">
        <div class="center-side">
          <div class="main-wrapper">
            <h3 class="main-header">Ux Design</h3>
            <h1 class="main-title">Ux Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
      <div class="main swiper-slide swiperSix-wrapper__slide--3">
        <div class="center-side">
          <div class="main-wrapper">
            <h3 class="main-header">Front-End Design</h3>
            <h1 class="main-title">Front-End Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="button-wrapper-six">
    <div class="swiper-button swiper-prev-button-six">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </div>
    <div class="swiper-button swiper-next-button-six">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </div>
  </div>
  <div class="swiper-pagination-six"></div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderSix.astro");

const $$Astro$D = createAstro();
const $$Card4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Card4;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
  <div class="container">
    <!-- Card Type 4 -->
    <div class="row mb-60">
      ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
              <div class="card card--4">
                <div class="card__head">
                  <img${addAttribute(input.blogimg, "src")} alt="">
                </div>
                <div class="card__content">
                  <h3>
                    <a href="#">${input.title}</a>
                  </h3>
                  <p>${input.description}</p>
                  <a href="#" class="readmore readmore--arrow">
                    Read More
                  </a>
                </div>
              </div>
            </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--4.astro");

const art = "/assets/images/art.jpg";

const $$Astro$C = createAstro();
const $$TabFour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$TabFour;
  return renderTemplate`${maybeRenderHead($$result)}<div class="accordion">
  <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-one" checked>
  <label class="accordion__label" for="tab-one">Tab 1
    <span class="accordion-tab--status"></span>
  </label>
  <div class="accordion__content">
    <div class="accordion__content__image__container">
      <img class="accordion__content__image"${addAttribute(art, "src")} alt="placeholder alt text">
    </div>
    <div class="accordion__content__text">
      <h3 class="accordion__content__text__title">
        Content One
        <hr class="accordion__content__text__horizontal-line">
      </h3>
      <p class="accordion__content__text__body">
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Give thanks to the most high. To be successful
        you’ve got to work hard, to make history, simple, you’ve got to make it.
      </p>
      <p class="accordion__content__text__body">
        The key to more success is to get a massage once a week, very important,
        major key, cloth talk. How’s business? Boomin. Hammock talk come soon.
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Hammock talk come soon.
      </p>
    </div>
  </div>
  <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-two">
  <label class="accordion__label" for="tab-two">Tab 2
    <span class="accordion-tab--status"></span>
  </label>
  <div class="accordion__content">
    <div class="accordion__content__image__container">
      <img class="accordion__content__image"${addAttribute(art, "src")} alt="placeholder alt text">
    </div>
    <div class="accordion__content__text">
      <h3 class="accordion__content__text__title">
        Content Two
        <hr class="accordion__content__text__horizontal-line">
      </h3>
      <p class="accordion__content__text__body">
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Give thanks to the most high. To be successful
        you’ve got to work hard, to make history, simple, you’ve got to make it.
      </p>
      <p class="accordion__content__text__body">
        The key to more success is to get a massage once a week, very important,
        major key, cloth talk. How’s business? Boomin. Hammock talk come soon.
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Hammock talk come soon.
      </p>
    </div>
  </div>
  <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-three">
  <label class="accordion__label" for="tab-three">Tab 3
    <span class="accordion-tab--status"></span>
  </label>
  <div class="accordion__content">
    <div class="accordion__content__image__container">
      <img class="accordion__content__image"${addAttribute(art, "src")} alt="placeholder alt text">
    </div>
    <div class="accordion__content__text">
      <h3 class="accordion__content__text__title">
        Content Three
        <hr class="accordion__content__text__horizontal-line">
      </h3>
      <p class="accordion__content__text__body">
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Give thanks to the most high. To be successful
        you’ve got to work hard, to make history, simple, you’ve got to make it.
      </p>
      <p class="accordion__content__text__body">
        The key to more success is to get a massage once a week, very important,
        major key, cloth talk. How’s business? Boomin. Hammock talk come soon.
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Hammock talk come soon.
      </p>
    </div>
  </div>
  <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-four">
  <label class="accordion__label" for="tab-four">Tab 4
    <span class="accordion-tab--status"></span>
  </label>
  <div class="accordion__content">
    <div class="accordion__content__image__container">
      <img class="accordion__content__image"${addAttribute(art, "src")} alt="placeholder alt text">
    </div>
    <div class="accordion__content__text">
      <h3 class="accordion__content__text__title">
        Content Four
        <hr class="accordion__content__text__horizontal-line">
      </h3>
      <p class="accordion__content__text__body">
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Give thanks to the most high. To be successful
        you’ve got to work hard, to make history, simple, you’ve got to make it.
      </p>
      <p class="accordion__content__text__body">
        The key to more success is to get a massage once a week, very important,
        major key, cloth talk. How’s business? Boomin. Hammock talk come soon.
        To be successful you’ve got to work hard, to make history, simple,
        you’ve got to make it. Hammock talk come soon.
      </p>
    </div>
  </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Tabs/TabFour.astro");

const $$Astro$B = createAstro();
const $$HomePageTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$HomePageTwo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LoaderTypeOne", $$LoaderTypeOne, {})}${renderComponent($$result2, "HeaderTypeTwo", $$HeaderTypetwo, {})}${maybeRenderHead($$result2)}<main class="page-main">
    ${renderComponent($$result2, "SliderSix", $$SliderSix, {})}
    ${renderComponent($$result2, "Content3", $$Content3, {})}
    ${renderComponent($$result2, "CardOne", $$Card4, {})}
    ${renderComponent($$result2, "TabFour", $$TabFour, {})}
    <section class="section--mar">
      <div class="container">
        <div class="col col2 col2__reverse">
          <div class="col__content">
            <h5 class="section__highlight">Lorem ipsum</h5>
            <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              exercitationem fugit nisi voluptatibus praesentium enim obcaecati
              asperiores adipisci error quos?
            </p>
            <div class="accordion accordion--1">
              <div class="accordion__item">
                <h3 class="accordion__item--title">
                  Lorem ipsum dolor sit, amet ?
                </h3>
                <p class="accordion__item--content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus exercitationem fugit nisi voluptatibus praesentium
                  enim obcaecati
                </p>
              </div>
              <div class="accordion__item">
                <h3 class="accordion__item--title">
                  Lorem ipsum dolor sit, amet ?
                </h3>
                <p class="accordion__item--content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus exercitationem fugit nisi voluptatibus praesentium
                  enim obcaecati
                </p>
              </div>
              <div class="accordion__item">
                <h3 class="accordion__item--title">
                  Lorem ipsum dolor sit, amet ?
                </h3>
                <p class="accordion__item--content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus exercitationem fugit nisi voluptatibus praesentium
                  enim obcaecati
                </p>
              </div>
            </div>
          </div>
          <div class="col__img">
            <img${addAttribute(dashboardimg, "src")} alt="">
          </div>
        </div>
      </div>
    </section>
    ${renderComponent($$result2, "Footerfive", $$Footerfive, {})}
    ${renderComponent($$result2, "ScrollTop", $$ScrollTop, {})}
  </main>` })};`;
}, "C:/rage/learning projects/ui-bs/src/pages/homePageTwo.astro");

const $$file$a = "C:/rage/learning projects/ui-bs/src/pages/homePageTwo.astro";
const $$url$a = "/homePageTwo";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HomePageTwo,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const Grid = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAK8AQMAAAAj3YrlAAAABlBMVEXj9PUHX2PVbKcXAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAiFJREFUeJztzrEJwDAQBMEDF6CS1LpLcgEC6SN/BcbJXLbBwSTJ2O/uytlZla5VdXU+v10DDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/f31AD6gb9YHaXqQAAAAAElFTkSuQmCC";

const $$Astro$A = createAstro();
const $$StyleGuide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$StyleGuide;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="container">
    <h2 class="styleGuildTitle">Style Guide</h2>
    <section class="styleGuideWrapper">
      <!-- Grid -->
      <div class="styleGuideCardGrid">
        <div class="container">
          <div class="brand">Grid</div>
          <div class="row">
            <div class="col-4">
              <div class="brand text-left">Layout Information</div>
              <div class="row mb-10">
                <div class="col-5">Width</div>
                <div class="col-7">: 1920px</div>
              </div>
              <div class="row mb-10">
                <div class="col-5">Grid Width</div>
                <div class="col-7">: 1440px</div>
              </div>
              <div class="row mb-10">
                <div class="col-5">Column</div>
                <div class="col-7">: 12</div>
              </div>
              <div class="row mb-10">
                <div class="col-5">Column Width</div>
                <div class="col-7">: 88px</div>
              </div>
              <div class="row mb-10">
                <div class="col-5">Gutter Width</div>
                <div class="col-7">: 32px</div>
              </div>
            </div>
            <div class="col-8"><img${addAttribute(Grid, "src")} alt="grid"></div>
          </div>
        </div>
      </div>

      <!-- Color Palette -->
      <div class="styleGuideCard">
        <div class="brand">Gray Scale</div>
        <div class="grayScale">
          <div class="grayScale__box">
            <div class="grayScale__box--1"></div>
            <p>White</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--2"></div>
            <p>Gray-100</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--3"></div>
            <p>Gray-200</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--4"></div>
            <p>Gray-300</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--5"></div>
            <p>Gray-400</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--6"></div>
            <p>Gray-500</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--7"></div>
            <p>Gray-600</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--8"></div>
            <p>Gray-700</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--9"></div>
            <p>Gray-800</p>
          </div>
          <div class="grayScale__box">
            <div class="grayScale__box--10"></div>
            <p>Black</p>
          </div>
        </div>

        <div class="brand">Brand</div>
        <div class="roundedPalette">
          <div class="circle circle--1"></div>
          <div class="circle circle--2"></div>
          <div class="circle circle--3"></div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="styleGuideCard">
        <div class="brand">Buttons</div>
        <div class="buttonWrapper">
          <button class="button mr-18 outlined letter-hover border-1 size-sm mb-10" title="Button">Small</button>
          <button class="button mr-18 primary hoverable border-1 size-md mb-10" title="Button">Medium</button>
          <button class="button mr-18 rounded primary letter-hover border-1 size-lg mb-10" title="Button">Large</button>
          <!--           
          <button class="button mr-18 secondary letter-hover rounded border-1 size-sm mb-10"
            >Small</button
          > -->
          <!-- <button
            class="button secondary rounded hoverable size-md border-1 mb-10"
            >Medium</button
          >
          <button
            class="button outlined secondary rounded size-lg hoverable border-1 mb-10"
            >Large</button
          > -->
          <button class="button mr-18 tertiary border-1 mb-10" disabled>Large</button>
        </div>
      </div>

      <!-- Lists -->
      <div class="styleGuideCard">
        <div class="brand">Ordered List</div>
        <ol>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>
            This is a test item&nbsp;
            <strong>Testing123</strong>
          </li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
        </ol>

        <div class="brand">Unordered List</div>
        <ul class="tick">
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
        </ul>

        <div class="brand">Unordered List 2</div>
        <ul class="dot">
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
          <li>This is a test item&nbsp;<strong>Testing123</strong></li>
        </ul>
      </div>

      <!-- Typography -->
      <div class="styleGuideCard typo">
        <div class="brand">Typography & Table</div>
        <div class="typo-guide">
          <table>
            <thead>
              <tr>
                <th><h5>Element</h5></th>
                <!-- <th><h5>Size</h5></th> -->
                <th><h5>Text</h5></th>
              </tr>
            </thead>
            <tr>
              <td><h4>h1</h4></td>
              <!-- <td><h4>32px</h4></td> -->
              <td><h1>The quick brown fox jumping over the lazy dog.</h1></td>
            </tr>
            <tr>
              <td><h4>h2</h4></td>
              <!-- <td><h4>24px</h4></td> -->
              <td><h2>The quick brown fox jumping over the lazy dog.</h2></td>
            </tr>
            <tr>
              <td><h4>h3</h4></td>
              <!-- <td><h4>18.72px</h4></td> -->
              <td><h3>The quick brown fox jumping over the lazy dog.</h3></td>
            </tr>
            <tr>
              <td><h4>h4</h4></td>
              <!-- <td><h4>16px</h4></td> -->
              <td><h4>The quick brown fox jumping over the lazy dog.</h4></td>
            </tr>
            <tr>
              <td><h4>h5</h4></td>
              <!-- <td><h4>13.28px</h4></td> -->
              <td><h5>The quick brown fox jumping over the lazy dog.</h5></td>
            </tr>
            <tr>
              <td><h4>h6</h4></td>
              <!-- <td><h4>10.72px</h4></td> -->
              <td><h6>The quick brown fox jumping over the lazy dog.</h6></td>
            </tr>
            <tr>
              <td><h4>p</h4></td>
              <!-- <td><h4>16px</h4></td> -->
              <td><p>The quick brown fox jumping over the lazy dog.</p></td>
            </tr>
            <tr>
              <td><h4>body</h4></td>
              <!-- <td><h4>16px</h4></td> -->
              <td><p>The quick brown fox jumping over the lazy dog.</p></td>
            </tr>
          </table>
        </div>
      </div>

      <div class="styleGuideCard">
        <div class="brand">Pagination</div>
        <nav aria-label="Page navigation">
          <ul class="pagination center">
            <li class="page-item"><a class="page-link" href="#">« Prev</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next »</a></li>
          </ul>
        </nav>
        <ul class="pager">
          <li class="previous">
            <a href="#">« Prev</a>
          </li>
          <li class="next">
            <a href="#">Next »</a>
          </li>
        </ul>
      </div>

      <div class="styleGuideCard">
        <div class="brand">Table</div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="styleGuideCard">
        <div class="brand">Basic Form</div>
        <form>
          <div class="form-group">
            <label for="input">Input<span>*</span></label>
            <input type="text" name="input" placeholder="input">
            <span>This is a error message</span>
          </div>
          <div class="form-group">
            <label for="select">Select<span>*</span></label>
            <select id="" name="select">
              <option value="none" selected="" disabled="">Option</option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
              <option value="Option4">Option4</option>
              <option value="Option5">Option5</option>
            </select>
            <span>Required field</span>
          </div>
          <div class="form-group">
            <label for="textarea">Textarea</label>
            <textarea id="" rows="5" class="" name="textarea" placeholder="Textarea"></textarea>
          </div>

          <div class="form-group">
            <div class="checkbox custom-form-select">
              <label>
                <input type="checkbox" checked>
                Item 1
              </label>
            </div>
            <div class="checkbox custom-form-select">
              <label>
                <input type="checkbox">
                Item 2
              </label>
            </div>
          </div>
          <br>

          <div class="form-group">
            <div class="radio custom-form-select">
              <label>
                <input type="radio" checked name="foo">
                Item 1
              </label>
            </div>
            <div class="radio custom-form-select">
              <label>
                <input type="radio" name="foo">
                Item 2
              </label>
            </div>
          </div>

          <div class="form-group text-right">
            <button class="button primary border-1 size-sm mb-10">Submit</button>
          </div>
        </form>
      </div>
    </section>
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/style-guide.astro");

const $$file$9 = "C:/rage/learning projects/ui-bs/src/pages/style-guide.astro";
const $$url$9 = "/style-guide";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StyleGuide,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const ImageOne = "/assets/images/accordionImage.png";

const $$Astro$z = createAstro();
const $$Accordion$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Accordion$1;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--mar">
  <div class="container">
      <div class="col col2 col2__reverse">
          <div class="col__content">
              <h5 class="section__highlight">Lorem ipsum</h5>
              <h2 class="section__title">Lorem ipsum dolor sit amet</h2>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                  exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                  asperiores adipisci error quos?
              </p>
              <div class="accordion accordion--1">
                  <div class="accordion__item">
                      <h3 class="accordion__item--title">
                          Lorem ipsum dolor sit, amet ?
                      </h3>
                      <p class="accordion__item--content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                          exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                      </p>
                  </div>
                  <div class="accordion__item">
                      <h3 class="accordion__item--title">
                          Lorem ipsum dolor sit, amet ?
                      </h3>
                      <p class="accordion__item--content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                          exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                      </p>
                  </div>
                  <div class="accordion__item">
                      <h3 class="accordion__item--title">
                          Lorem ipsum dolor sit, amet ?
                      </h3>
                      <p class="accordion__item--content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                          exercitationem fugit nisi voluptatibus praesentium enim obcaecati
                      </p>
                  </div>
              </div>
          </div>
          <div class="col__img">
              <img${addAttribute(dashboardimg, "src")} alt="">
          </div>
      </div>
  </div>
</section>

<section class="mt-25">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="accordion accordion--2">
          <div class="accordion__item">
            <h2 class="accordion__heading"><button class="accordion__trigger">The Modern Piano Accordion</button></h2>
            <div class="accordion__copy">
              <div class="row">
                <div class="col-md-3 col-12 text-center">
                  <img${addAttribute(ImageOne, "src")} alt="Image" class="accordion__copy__pic mb-10">
                </div>
                <div class="col-md-9 col-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion__item">
            <h2 class="accordion__heading"><button class="accordion__trigger">Button Accordions</button></h2>
            <div class="accordion__copy">
              <div class="row">
                <div class="col-md-3 col-12 text-center">
                  <img${addAttribute(ImageOne, "src")} alt="Image" class="accordion__copy__pic mb-10">
                </div>
                <div class="col-md-9 col-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion__item">
            <h2 class="accordion__heading"><button class="accordion__trigger">Sound Production</button></h2>
            <div class="accordion__copy">
              <div class="row">
                <div class="col-md-3 col-12 text-center">
                  <img${addAttribute(ImageOne, "src")} alt="Image" class="accordion__copy__pic mb-10">
                </div>
                <div class="col-md-9 col-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion__item">
            <h2 class="accordion__heading"><button class="accordion__trigger">History</button></h2>
            <div class="accordion__copy">
              <div class="row">
                <div class="col-md-3 col-12 text-center">
                  <img${addAttribute(ImageOne, "src")} alt="Image" class="accordion__copy__pic mb-10">
                </div>
                <div class="col-md-9 col-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion__item">
            <h2 class="accordion__heading"><button class="accordion__trigger">Popularization</button></h2>
            <div class="accordion__copy">
              <div class="row">
                <div class="col-md-3 col-12 text-center">
                  <img${addAttribute(ImageOne, "src")} alt="Image" class="accordion__copy__pic mb-10">
                </div>
                <div class="col-md-9 col-12">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="mt-25">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="accordionTypeThree">
          <ul id="accordionUL">
            <li class="accordionList active">
              <div class="section-title">
                <h2>The Modern Piano Accordion</h2>
              </div>
              <div class="section-content visible">
                <div class="row">
                  <div class="col-12">
                    <img${addAttribute(ImageOne, "src")} alt="Image" class="horizontalAccordionImg mb-10">
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
              </div>
            </li>
            <li class="accordionList">
              <div class="section-title">
                <h2>Button Accordions</h2>
              </div>
              <div class="section-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </li>
            <li class="accordionList">
              <div class="section-title">
                <h2>Sound Production</h2>
              </div>
              <div class="section-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </li>
            <li class="accordionList">
              <div class="section-title">
                <h2>History</h2>
              </div>
              <div class="section-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>    
            </li>
            <li class="accordionList">
              <div class="section-title">
                <h2>Popularization</h2>
              </div>
              <div class="section-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>    
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Accordian/Accordion.astro");

const $$Astro$y = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "accordion" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Accordion", $$Accordion$1, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/accordion.astro");

const $$file$8 = "C:/rage/learning projects/ui-bs/src/pages/accordion.astro";
const $$url$8 = "/accordion";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accordion,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const bannerimg = "/assets/images/image-two.jpg";

const $$Astro$x = createAstro();
const $$BannerSm1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$BannerSm1;
  return renderTemplate`<!-- Banner type 1 -->${maybeRenderHead($$result)}<section class="bannersm bannersm--1 mb-100 bg-pink">
  <div class="container">
    <div class="bannersm__wrap">
      <div class="bannersm__content">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div class="bannersm__img">
        <img${addAttribute(bannerimg1, "src")} alt="">
      </div>
    </div>
  </div>
</section>
<!--  -->
<!-- Banner type 1 -->
<section class="bannersm bannersm--1 mb-100 bg-primary">
    <div class="container">
      <div class="bannersm__wrap">
        <div class="bannersm__content">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            exercitationem repellat cum itaque dolore ratione!
          </p>
          <div class="btn__wrap">
            <a href="" class="button tertiary hoverable">Explore Now</a>
            <a href="" class="button tertiary hoverable">Contact Us</a>
          </div>
        </div>
        <div class="bannersm__img">
          <img${addAttribute(bannerimg1, "src")} alt="">
        </div>
      </div>
    </div>
  </section>
  <!--  -->
<!-- Banner type 2 -->
<section class="bannersm bannersm--2 mb-100"${addAttribute(`background-image: url(${bannerimg});`, "style")}>
  <div class="container">
    <div class="bannersm__content">
      <h1>Lorem ipsum dolor sit amet.</h1>
    </div>
  </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/Banner/banner--sm1.astro");

const $$Astro$w = createAstro();
const $$Innerbanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Innerbanner;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "InnerBanner - UI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Bannersm1", $$BannerSm1, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/banner/innerbanner.astro");

const $$file$7 = "C:/rage/learning projects/ui-bs/src/pages/banner/innerbanner.astro";
const $$url$7 = "/banner/innerbanner";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Innerbanner,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$v = createAstro();
const $$Herobanner1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Herobanner1;
  return renderTemplate`<!-- Herobanner with bg img -->${maybeRenderHead($$result)}<section class="herobanner herobanner--1"${addAttribute(`background-image: url(${bannerimg});`, "style")}>
  <div class="container">
    <div class="herobanner__content">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
        consequuntur perferendis dignissimos commodi ea facere! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
        consequuntur perferendis dignissimos commodi ea facere!
      </p>
      <a href="" class="button primary hoverable">Buy Now</a>
    </div>
  </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/Banner/herobanner--1.astro");

const bannerbg = "/assets/images/bannervideo.mp4";

const $$Astro$u = createAstro();
const $$Herobanner2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Herobanner2;
  return renderTemplate`<!-- Herobanner with bg img -->${maybeRenderHead($$result)}<section class="herobanner herobanner--1">
  <video${addAttribute(bannerbg, "src")} loop autoplay muted class="herobanner__bg"></video>
  <div class="container">
    <div class="herobanner__content">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
        consequuntur perferendis dignissimos commodi ea facere! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Vel consequuntur
        perferendis dignissimos commodi ea facere!
      </p>
      <a href="" class="button primary hoverable">Buy Now</a>
    </div>
  </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/Banner/herobanner--2.astro");

const burger = "/assets/images/burgger-images.png";

const $$Astro$t = createAstro();
const $$Herobanner3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Herobanner3;
  return renderTemplate`<!-- Herobanner with bg img -->${maybeRenderHead($$result)}<section class="herobanner herobanner--2 section--mar">
  <div class="container">
    <div class="herobanner__wrap">
      <div class="herobanner__content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          consequuntur perferendis dignissimos commodi ea facere! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Vel consequuntur
          perferendis dignissimos commodi ea facere!
        </p>
        <a href="" class="button primary hoverable">Buy Now</a>
      </div>
      <div class="herobanner__img">
        <img${addAttribute(burger, "src")} alt="Banner">
      </div>
    </div>
  </div>
</section>
<!--  -->`;
}, "C:/rage/learning projects/ui-bs/src/components/Banner/herobanner--3.astro");

const $$Astro$s = createAstro();
const $$Herobanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Herobanner;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "InnerBanner - UI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Herobanner1", $$Herobanner1, {})}
    ${renderComponent($$result2, "Herobanner2", $$Herobanner2, {})}
    ${renderComponent($$result2, "Herobanner3", $$Herobanner3, {})}
    <!-- <Herobanner4 /> -->
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/banner/herobanner.astro");

const $$file$6 = "C:/rage/learning projects/ui-bs/src/pages/banner/herobanner.astro";
const $$url$6 = "/banner/herobanner";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Herobanner,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const payment = "data:image/png;base64,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";

const $$Astro$r = createAstro();
const $$Footerone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Footerone;
  return renderTemplate`${maybeRenderHead($$result)}<section class="footerone">
    <div class="footerone__nav">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 1</h3></li>
                        <li><a href="javascript:void(0)">Link1</a></li>
                        <li><a href="javascript:void(0)">Link2</a></li>
                        <li><a href="javascript:void(0)">Link3</a></li>
                        <li><a href="javascript:void(0)">Link4</a></li>
                        <li><a href="javascript:void(0)">Link5</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 2</h3></li>
                        <li><a href="javascript:void(0)">Link1</a></li>
                        <li><a href="javascript:void(0)">Link2</a></li>
                        <li><a href="javascript:void(0)">Link3</a></li>
                        <li><a href="javascript:void(0)">Link4</a></li>
                        <li><a href="javascript:void(0)">Link5</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 3</h3></li>
                        <li><a href="javascript:void(0)">Link1</a></li>
                        <li><a href="javascript:void(0)">Link2</a></li>
                        <li><a href="javascript:void(0)">Link3</a></li>
                        <li><a href="javascript:void(0)">Link4</a></li>
                        <li><a href="javascript:void(0)">Link5</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 4</h3></li>
                        <li><a href="javascript:void(0)">Link1</a></li>
                        <li><a href="javascript:void(0)">Link2</a></li>
                        <li><a href="javascript:void(0)">Link3</a></li>
                        <li><a href="javascript:void(0)">Link4</a></li>
                        <li><a href="javascript:void(0)">Link5</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 5</h3></li>
                        <li>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path><circle cx="256" cy="192" r="48" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></circle></svg>
                                </li>
                                <li>
                                    <address class="content">
                                        419 XYZ Address New York(NY), 14812,
                                    </address>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" stroke-miterlimit="10" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                                </li>
                                <li>
                                    <a href="tel:+607936-8058">(607) 936-8058</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></rect><path stroke-linecap="round" stroke-linejoin="round" d="M112 160l144 112 144-112" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                                </li>
                                <li>
                                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <ul>
                        <li><h3>CATEGORIES 6</h3></li>
                        <li>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                        <path id="_7693312_facebook_social_media_logo_apps_icon" data-name="7693312_facebook_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM30.05,14.248a11.971,11.971,0,0,0-3.391.162c-1.584.585-1.622,1.953-1.622,3.258v2.665H29.88l-.708,5.1H25.037V38.012h-5.47V25.43H15.02v-5.1h4.548V16.01a6.18,6.18,0,0,1,5.624-6.435,19.3,19.3,0,0,1,4.858.4Z" fill="#ffffff"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                        <path id="_7693327_twitter_social_media_logo_apps_icon" data-name="7693327_twitter_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM34.166,18.447c.028,1.773-.207,10.637-8.62,14.478a15,15,0,0,1-14.774-.945,11.09,11.09,0,0,0,7.793-2.216,5.523,5.523,0,0,1-4.92-3.708,4.56,4.56,0,0,0,2.3-.143A5.463,5.463,0,0,1,11.8,20.634a3.935,3.935,0,0,0,2.275.591c-3.94-2.837-1.529-7.062-1.529-7.062a15.933,15.933,0,0,0,11.071,5.619,6.224,6.224,0,0,1-.139-1.334A5.377,5.377,0,0,1,28.8,13.129a5.957,5.957,0,0,1,3.818,1.655,8.4,8.4,0,0,0,3.457-1.212,5.276,5.276,0,0,1-2.2,2.955,11.882,11.882,0,0,0,2.9-.827A11.02,11.02,0,0,1,34.166,18.447Z" fill="#ffffff"></path>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footerone__copyrights">
        <div class="container">
                <img class="pull-left"${addAttribute(payment, "src")}>
                <p class="pull-right">Copyright © rage communication. All Rights Reserved.</p>
            </div>
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footerone.astro");

const logo = "data:image/jpeg;base64,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";

const $$Astro$q = createAstro();
const $$Footertwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Footertwo;
  return renderTemplate`${maybeRenderHead($$result)}<section class="footertwo">
    <div class="container">
        <div class="row">
            <div class="footertwo__logo">
                <img${addAttribute(logo, "src")} alt="logo" class="logo">
            </div>
            <div class="row footertwo__col2section">
                <div class="footertwo__col2section--left">
                    <div class="footertwo__col2section--leftwrapper">
                        <div class="footertwo__col2">
                            <ul>
                                <li><a href="javascript:void(0)">link1</a></li>
                                <li><a href="javascript:void(0)">link2</a></li>
                                <li><a href="javascript:void(0)">link3</a></li>
                            </ul>

                            <ul>
                                <li><a href="javascript:void(0)">link1</a></li>
                                <li><a href="javascript:void(0)">link2</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul class="footertwo__horlist">
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div class="footertwo__col2section--right">
                    <h5>Let's keep the conversation flowing</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                    <div class="footertwo__tools">
                        <form class="round">
                            <input type="email" name="email" value="" size="60" maxlength="254" placeholder="Email address..">
                            <button class="g-recaptcha" class="button" type="button">Subscribe</button>
                        </form>
                    </div>
                    <div class="footertwo__socialicons">
                        <ul>
                            <li>Share us</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                    <path id="_7693312_facebook_social_media_logo_apps_icon" data-name="7693312_facebook_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM30.05,14.248a11.971,11.971,0,0,0-3.391.162c-1.584.585-1.622,1.953-1.622,3.258v2.665H29.88l-.708,5.1H25.037V38.012h-5.47V25.43H15.02v-5.1h4.548V16.01a6.18,6.18,0,0,1,5.624-6.435,19.3,19.3,0,0,1,4.858.4Z" fill="#ffffff"></path>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                    <path id="_7693327_twitter_social_media_logo_apps_icon" data-name="7693327_twitter_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM34.166,18.447c.028,1.773-.207,10.637-8.62,14.478a15,15,0,0,1-14.774-.945,11.09,11.09,0,0,0,7.793-2.216,5.523,5.523,0,0,1-4.92-3.708,4.56,4.56,0,0,0,2.3-.143A5.463,5.463,0,0,1,11.8,20.634a3.935,3.935,0,0,0,2.275.591c-3.94-2.837-1.529-7.062-1.529-7.062a15.933,15.933,0,0,0,11.071,5.619,6.224,6.224,0,0,1-.139-1.334A5.377,5.377,0,0,1,28.8,13.129a5.957,5.957,0,0,1,3.818,1.655,8.4,8.4,0,0,0,3.457-1.212,5.276,5.276,0,0,1-2.2,2.955,11.882,11.882,0,0,0,2.9-.827A11.02,11.02,0,0,1,34.166,18.447Z" fill="#ffffff"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="footertwobottom">
    <div class="container">
        <diva class="text-center">
            <img${addAttribute(logo, "src")} alt="logo" width="auto">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p class="link">POWERED BY  <a href="" target="_blank">rage communication</a></p>
        </diva>
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footertwo.astro");

const $$Astro$p = createAstro();
const $$Footerthree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Footerthree;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footerthree">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="footerthree__firstcol">
                    <h3>Category 1</h3>
                    <p class="footpara">
                        Don’t miss any updates of our new templates and
                        extensions.!
                    </p>
                    <form action="javascript:void(0)">
                        <input type="text" name="EMAIL" class="footsubscribe" placeholder="Email">
                        <button class="btn--clr" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-6">
                <div class="footerthree__seccol">
                    <h3>Category 2</h3>
                    <ul>
                        <li><a href="javascript:void(0)" class="link arrow">Link 1</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 2</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 3</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 4</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-6">
                <div class="footerthree__thirdcol">
                    <h3>Category 3</h3>
                    <ul>
                        <li><a href="javascript:void(0)" class="link arrow">Link 1</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 2</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 3</a></li>
                        <li><a href="javascript:void(0)" class="link arrow">Link 4</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="footerthree__fourthcol">
                    <h3>Category 4</h3>
                    <ul class="socialmedia">
                        <li>
                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                    <path id="_7693312_facebook_social_media_logo_apps_icon" data-name="7693312_facebook_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM30.05,14.248a11.971,11.971,0,0,0-3.391.162c-1.584.585-1.622,1.953-1.622,3.258v2.665H29.88l-.708,5.1H25.037V38.012h-5.47V25.43H15.02v-5.1h4.548V16.01a6.18,6.18,0,0,1,5.624-6.435,19.3,19.3,0,0,1,4.858.4Z" fill="#ffffff"></path>
                                </svg></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
                                    <path id="_7693327_twitter_social_media_logo_apps_icon" data-name="7693327_twitter_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM34.166,18.447c.028,1.773-.207,10.637-8.62,14.478a15,15,0,0,1-14.774-.945,11.09,11.09,0,0,0,7.793-2.216,5.523,5.523,0,0,1-4.92-3.708,4.56,4.56,0,0,0,2.3-.143A5.463,5.463,0,0,1,11.8,20.634a3.935,3.935,0,0,0,2.275.591c-3.94-2.837-1.529-7.062-1.529-7.062a15.933,15.933,0,0,0,11.071,5.619,6.224,6.224,0,0,1-.139-1.334A5.377,5.377,0,0,1,28.8,13.129a5.957,5.957,0,0,1,3.818,1.655,8.4,8.4,0,0,0,3.457-1.212,5.276,5.276,0,0,1-2.2,2.955,11.882,11.882,0,0,0,2.9-.827A11.02,11.02,0,0,1,34.166,18.447Z" fill="#ffffff"></path>
                                </svg></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <p class="footerthree__copyright">
                    © rage communication.. 2023 All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footerthree.astro");

const map = "/assets/images/map.gif";

const $$Astro$o = createAstro();
const $$Footerfour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Footerfour;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footerfour">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="footerfour">
                    <div class="col-lg-6 col-12">
                        <div class="footerfour__firstcol">
                            <h3>
                                On the roads of 125 countries
                            </h3>
                            <img${addAttribute(map, "src")} alt="map" title="map">
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="footerfour__seccol">
                            <h3>Category1</h3>
                            <ul>
                                <li><a href="javascript:void(0)" class="arrow">Link1</a></li>
                                <li><a href="javascript:void(0)" class="arrow">Link2</a></li>
                                <li><a href="javascript:void(0)" class="arrow">Link3</a></li>
                                <li><a href="javascript:void(0)" class="arrow">Link4</a></li>
                                <li><a href="javascript:void(0)" class="arrow">Link5</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="footerfour__thirdcol">
                            <h3>Category1</h3>
                            <div class="accordions">
                                <div class="tab">
                                    <input type="checkbox" class="accordioninput" id="rd1" name="rd">
                                    <label class="tab-label" for="rd1">Category1</label>
                                    <div class="tab-content">
                                        <div class="list">
                                            <ul>
                                                <li><a href="javascript:void(0)" class="arrow">Link1</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link2</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link3</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link4</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link5</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab">
                                    <input type="checkbox" class="accordioninput" id="rd2" name="rd">
                                    <label class="tab-label" for="rd2">Category1</label>
                                    <div class="tab-content">
                                        <div class="list">
                                            <ul>
                                                <li><a href="javascript:void(0)" class="arrow">Link1</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link2</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link3</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link4</a></li>
                                                <li><a href="javascript:void(0)" class="arrow">Link5</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footerfour.astro");

const $$Astro$n = createAstro();
const $$Footersix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Footersix;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footersix">
	<div class="container">
		<div class="row space">
			<div class="col-lg-4">
				<div class="footersix__logo">
					<img${addAttribute(logo, "src")} alt="BITS Law School" title="BITS Law School">
				</div>
			</div>
			<div class="col-lg-3">
				<div class="footersix__seccol">
					<ul>
						<li><a href="javascript:void(0)">Link 1</a></li>
						<li><a href="javascript:void(0)">Link 2</a></li>
						<li><a href="javascript:void(0)">Link 3</a></li>
						<li><a href="javascript:void(0)">Link 4</a></li>
						<li><a href="javascript:void(0)">Link 5</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="footersix__thirdcol">
					<img${addAttribute(logo, "src")} width="100%" alt="Download Brochure" title="Download Brochure">
					<a class="download" href="javascript:void(0)">Download</a>
				</div>
			</div>
		</div>
		<div class="row footersix__copyright">
			<div class="col-lg-6">
				<p>Copyright © rage communication. All rights reserved.</p>
			</div>
			<div class="col-lg-6">
				<ul class="social">
					<li><a href="">Follow us</a></li>
					<li>
						<a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
								<path id="_7693312_facebook_social_media_logo_apps_icon" data-name="7693312_facebook_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM30.05,14.248a11.971,11.971,0,0,0-3.391.162c-1.584.585-1.622,1.953-1.622,3.258v2.665H29.88l-.708,5.1H25.037V38.012h-5.47V25.43H15.02v-5.1h4.548V16.01a6.18,6.18,0,0,1,5.624-6.435,19.3,19.3,0,0,1,4.858.4Z" fill="#ffffff"></path>
							</svg></a>
					</li>
					<li>
						<a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="27.546" height="27.546" viewBox="0 0 47.546 47.546">
								<path id="_7693327_twitter_social_media_logo_apps_icon" data-name="7693327_twitter_social media_logo_apps_icon" d="M23.773,0A23.773,23.773,0,1,0,47.546,23.773,23.773,23.773,0,0,0,23.773,0ZM34.166,18.447c.028,1.773-.207,10.637-8.62,14.478a15,15,0,0,1-14.774-.945,11.09,11.09,0,0,0,7.793-2.216,5.523,5.523,0,0,1-4.92-3.708,4.56,4.56,0,0,0,2.3-.143A5.463,5.463,0,0,1,11.8,20.634a3.935,3.935,0,0,0,2.275.591c-3.94-2.837-1.529-7.062-1.529-7.062a15.933,15.933,0,0,0,11.071,5.619,6.224,6.224,0,0,1-.139-1.334A5.377,5.377,0,0,1,28.8,13.129a5.957,5.957,0,0,1,3.818,1.655,8.4,8.4,0,0,0,3.457-1.212,5.276,5.276,0,0,1-2.2,2.955,11.882,11.882,0,0,0,2.9-.827A11.02,11.02,0,0,1,34.166,18.447Z" fill="#ffffff"></path>
							</svg></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>`;
}, "C:/rage/learning projects/ui-bs/src/components/Footer/Footersix.astro");

const $$Astro$m = createAstro();
const $$Footer$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Footer" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Footerone", $$Footerone, {})}
    ${renderComponent($$result2, "Footertwo", $$Footertwo, {})}
    ${renderComponent($$result2, "Footerthree", $$Footerthree, {})}
    ${renderComponent($$result2, "Footerfour", $$Footerfour, {})}
    ${renderComponent($$result2, "Footerfive", $$Footerfive, {})}
    ${renderComponent($$result2, "Footersix", $$Footersix, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/footer.astro");

const $$file$5 = "C:/rage/learning projects/ui-bs/src/pages/footer.astro";
const $$url$5 = "/footer";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Footer$1,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- <Layout title="header">
  <HeaderTypeOne />
  <main>
    <Banner />
  </main>
</Layout> -->`;
}, "C:/rage/learning projects/ui-bs/src/pages/header.astro");

const $$file$4 = "C:/rage/learning projects/ui-bs/src/pages/header.astro";
const $$url$4 = "/header";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Header,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$k = createAstro();
const $$SliderBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SliderBanner;
  return renderTemplate`${maybeRenderHead($$result)}<div class="banner-container">
  <div class="banner-flex">
    <div class="banner-flex__flex--1">
      <h3>Lorem ipsum dolor sit ame</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <button>Discover</button>
    </div>
    <div class="banner-flex__flex--2">
      <img${addAttribute(burger, "src")} alt="burger">
    </div>
  </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderBanner.astro");

const $$Astro$j = createAstro();
const $$SliderOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SliderOne;
  return renderTemplate`${maybeRenderHead($$result)}<div class="swiper-container sliderOneBG">
  <div class="mySwiper">
    <div class="main-wrapper swiper-wrapper sliderOne">
      <div class="main swiper-slide main-wrapper__slide--1">
        <div class="left-side">
          <div class="main-wrapper">
            <h3 class="main-header">UI Design</h3>
            <h1 class="main-title">UI Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
      <div class="main swiper-slide main-wrapper__slide--2">
        <div class="left-side">
          <div class="main-wrapper">
            <h3 class="main-header">Ux Design</h3>
            <h1 class="main-title">Ux Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
      <div class="main swiper-slide main-wrapper__slide--3">
        <div class="left-side">
          <div class="main-wrapper">
            <h3 class="main-header">Front-End Design</h3>
            <h1 class="main-title">Front-End Design</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
      <div class="main swiper-slide main-wrapper__slide--4">
        <div class="left-side">
          <div class="main-wrapper">
            <h3 class="main-header">Devops Developer</h3>
            <h1 class="main-title">Devops Developer</h1>
          </div>
          <div class="main-content">
            <div class="main-content__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="main-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button class="more-menu">Discover</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="button-wrapper">
    <div class="swiper-button swiper-prev-button">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </div>
    <div class="swiper-button swiper-next-button">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </div>
  </div>
  <div class="swiper-pagination-one"></div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderOne.astro");

const $$Astro$i = createAstro();
const $$SliderFour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SliderFour;
  return renderTemplate`${maybeRenderHead($$result)}<div class="">
  <div class="swiper-container mySwiperFour">
    <div class="swiper-wrapper mySwiperFour__wrapper">
      <div class="swiper-slide mySwiperFour__wrapper--slide-1">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-2">
        <h3 class="mb-22">UX Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div><div class="swiper-slide mySwiperFour__wrapper--slide-3">
        <h3 class="mb-22">Front-End Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-4">
        <h3 class="mb-22">Devops</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div><div class="swiper-slide mySwiperFour__wrapper--slide-5">
        <h3 class="mb-22">Wordpress</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-6">
        <h3 class="mb-22">Drupal</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-7">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-8">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
      <div class="swiper-slide mySwiperFour__wrapper--slide-9">
        <h3 class="mb-22">UI Design</h3>
        <h4 class="mb-22">Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mySwiperFour__wrapper--button-section">
          <button class="mySwiperFour__wrapper--button">Discover</button>
        </div>
      </div>
    </div>
    <div class="buttonFour">
      <div class="swiper-button-prev buttonFour--prev"></div>
      <div class="swiper-button-next buttonFour--next"></div>
    </div>
  </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderFour.astro");

const SlideOne = "/assets/images/animation-slider.jpg";

const SlideTwo = "/assets/images/animation-slider2.jpg";

const SlideThree = "/assets/images/animation-slider3.jpg";

const SlideFour = "/assets/images/animation-slider4.jpg";

const $$Astro$h = createAstro();
const $$SliderEight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SliderEight;
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead($$result)}<div class="swiper-eight">
    <div class="swiper mySwiperEight">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img${addAttribute(SlideOne, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideTwo, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideThree, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideFour, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideOne, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideTwo, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideThree, "src")} alt="">
          </div>
          <div class="swiper-slide">
            <img${addAttribute(SlideFour, "src")} alt="">
          </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
        <div class="swiper-button-prev-custom"></div>
        <div class="swiper-button-next-custom"></div>
        <div class="arrow"></div>
    </div>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Slider/SliderEight.astro");

const $$Astro$g = createAstro();
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Slider;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Slider Components" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    <div class="margin">${renderComponent($$result2, "SliderBanner", $$SliderBanner, {})}</div>
    <div class="margin">${renderComponent($$result2, "SliderOne", $$SliderOne, {})}</div>
    <div class="margin">${renderComponent($$result2, "SliderTwo", $$SliderTwo, {})}</div>
    <div class="margin">${renderComponent($$result2, "SliderSix", $$SliderSix, {})}</div>

    <!-- <div class="margin "><SliderThree /></div> -->
    <div class="margin">${renderComponent($$result2, "SliderFour", $$SliderFour, {})}</div>
    <div class="margin">${renderComponent($$result2, "SliderSeven", $$SliderSeven, {})}</div>
    <div class="margin">${renderComponent($$result2, "SliderEight", $$SliderEight, {})}</div>
    <!-- <div class="margin"><SliderFive /></div> -->
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/slider.astro");

const $$file$3 = "C:/rage/learning projects/ui-bs/src/pages/slider.astro";
const $$url$3 = "/slider";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Slider,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Card1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Card1;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad">
    <div class="container">
        <!-- Card Type 1 -->
        <div class="row mb-60">
            ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
                <div class="card card--1"${addAttribute(`background-image: url("${input.img}");`, "style")}>
                    <div class="card__content">
                        <h3>${input.title}</h3>
                        <p>${input.description}</p>
                        <a href="#" class="readmore">
                            Readmore
                        </a>
                    </div>
                </div>
            </div>`;
  })}
        </div>
        <!--  -->
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--1.astro");

const $$Astro$e = createAstro();
const $$Card2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Card2;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad">
    <div class="container">
        <!-- Card Type 2 -->
        <div class="row mb-60">
            ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
                <div class="card card--2"${addAttribute(`background-image: url("${input.productimg}");`, "style")}>
                    <div class="card__content">
                        <h3>${input.subtitle}</h3>
                        <h4>${input.title}</h4>
                    </div>
                    <div class="card__overlay">
                        <h3>${input.subtitle}</h3>
                        <p>${input.description}</p>
                        <a href="#" class="readmore">Learn More</a>
                    </div>
                </div>
            </div>`;
  })}
        </div>
        <!--  -->
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--2.astro");

const linkedin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAl9JREFUWEfNl0FOQjEQhosHEPAC4AEUEt0aHhcQ2GuC0b0Q3QN7TWAvIcQDAF6Al7iVBPQAwgFEcC9x/kpfHqWFxleCTSZiO51+nZlO+0LMvO2S6imJQ5Ik2SeJzKdP6O87SZ/EJXki+TIxHTJQOiCda5ILkh0DfajMSBokNZK3VXPWAdzR5BvDRXVq9zRwqxvUAWDX2MFRwMXF9N7cg0veUAGckHKbZM/S4sLMmH5kSZ79dmUA7NzdwOJ+CMefFzLAi+z2bDbLMpkMc12XNZtNG05BOI6FIT/AUsJh8Var5S1aLBZZtVq1AeElpgCA619ly+VymZVKJa+70+kwQFlqhwiFAHigfy5lw8lkkrs+HA7zoVwux9pt5KeVVicrVwBAhfskURaZeDzOHMfhIMPh0MrKcyMoVlEAnJE82rAM2Fgsxk2NRiMT4HMAKN0PI9h5t9v12CqVCkNeyP0ITSqVYoVCYWEf8BrGJhNcFcpWB8DS0ROqpgD9fp8hX1QNRzefz+sAegD4IFFWPVMAYX0wGDCEQSSt6I9GozovjAHwrUtAU4DpdMrDAk9EIhGesIlEwtt1Op3mfYo2swJQq9UW4i/Xj3UAgUMgklPsEDFvNHCZ/rYVADwEgZNQBpBDtwKAJ2HgYxgAgB9DbSEyTcIAALwQaUvxhgG8Uow8UYZhwwDeZQQA5XWMM+2vcLiMILp+kfXyOOqDohwvXMeYa+MFrCu5cv/Sg0QoaI+kqWUDPe2TTIQCNdP2i1hw4WXskHjP83/3LBekW/0w8YfRRmL+6dPMD7HVj1M/yEY+z38AhVlIqN2HmNIAAAAASUVORK5CYII=";

const quotes = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAlpJREFUWEfNV1FOwkAQ3XoAU70AeAAFor+GnkA4gAYa/QeiB+AAmuC/RBIvAF6AEn8lIXoA4QBC8V/ivIVt1rbbrtqCk0wo3bezb2d2ZqcG05dtgp6QWqR50j1SczXdpd830hGpQ/pI+qFj2tAA7ROmRmqTbmngAVmQ3pPekr5GzYkjcE2TLzUXVcFuaOBKNagigF1jB4d/XFxMH648GPBGGIFjAndJdxNaXJiZ0kOZ9Em26yeAnTspLC6TsORz4SfwnKDbVQ5EOI7EoEwgiQOnGzXvYAoCcP2L7uyEcAcIhSBwR3/O/YYty2L9fl+5nmEYLAozGAz4uELa9P4CBFDhZqSBIpMyARSrHRA4JX0IY5kyASx5BgKh7sfoGgi0QUCZemsgMASBd9LQqrcGAlMQ+Aw7gGsKwSKSgGmaLJ/H1b+UarXKKpWK9x9p6Me0Wi2Wy+U4JiYNAeEElCHwZ0a322WlUom/ns/nfHG/OI7DisWiLgEeAu36Px6PWSaTURoHodkMJWUpvV6Plcu4AJXCD6EyDeVpcG2thsZoKY1Gg+GdLLKH8N62bdbpdKII8DRUFiLsCC5H7OWSCvdns1nmui4PA84FMPJ5mUwmHBMjvBD9uBTLO1OlaqFQYKMRelSleKUYCO3LyO9WPwF4B95AOGLEu4yAC72OhXEYhcFms8lwEGURGLgcGVCv13loNOTbdQx8oCERaRZlEBjNBWVOgYZEDGqnpMYOVRBlSyZC4dBD0h2xIIPO2CL12vN/15YLphv9MJFjl0Sn/KtPM5nERj9OZSKpfJ5/AWfLA6hgA2pEAAAAAElFTkSuQmCC";

const info = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAhlJREFUWEfNV0tOwkAYnnoAU70AeAClRLeGcgHDATRgdO9C98BeE9xLXHgB8QKUuJVA9ACeQGzcQ/y/CdMMj7b/jG1wki88+j++/q+ZcQR/bZPoCcEneIQ9gjtXD+nzkzAmBIQXwg/HtMMQ2ieZK8I5YYshD5EZ4ZFwT/hI0kkjcEvK10yncWJ39OAm7mEcAbw13uDwj86V+nAewZVorCNwTMLPhN2MnCszE/pSI7zqdpcJ4M2DHJzrJHy9LpYJvGUY9rgAIh1H6qFOwKjgWq2WqFQqIgxD0W63xXiMDmSvqDAVAYT+navu+77o9/uROJyXy2WuupI7QCoUgQf6ccG1sEwAeo6T1tEr1rv0zyW0MOG+CdwhIzzPE6PRKLLY6/VErYYCN1oYVjsgcEp4MlIlYTgEEaxOpyNrwWKdgYBR+C2cJKl0QYDdesViURQKhbUGB4OBDbchCHwRWFMPrddsNtc6sihC2JmAwJRbgI1GQwCu64pSqbRAxJLAzIiA8phRG8KcJMBOQQ4EZArYRZgDAVmExm2YYQpkGxoPogwJyEFkPIozIhCNYqSWlQa0YL1el22oxrCqiyAI5NdqtcodSNFmBAXWdpw0iJRXg3mwsB1DP/VAglEMJC0ViZQwrBxIlLxxS3LjrcnFHslUKpBM1t5g4RwnY58QHc//3bFcvdRGLyZ6ZFMLk5EGq6uZbnejl1OdSC7X818bHpSZkEfyxQAAAABJRU5ErkJggg==";

const $$Astro$d = createAstro();
const $$Card3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Card3;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
    <div class="container">
        <!-- Card Type 3 -->
        <div class="row mb-150">
            ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
                <div class="card card--3">
                    <img${addAttribute(input.userimg, "src")} alt="">
                    <div class="card__content">
                        <h3>${input.subtitle}</h3>
                        <p class="txt-orange">${input.userdesignation}</p>
                        <p>${input.userorganization}</p>
                        <div class="card__hcontent">
                            <p>${input.description}</p>
                        </div>
                        <ul>
                            <li><img${addAttribute(linkedin, "src")} alt="Linkedin" title="Linkedin"></li>
                            <li><img${addAttribute(quotes, "src")} alt="Quotes" title="Quotes"></li>
                            <li><img${addAttribute(info, "src")} alt="Info" title="Info"></li>
                        </ul>
                    </div>
                </div>
            </div>`;
  })}
        </div>
        <!--  -->
    </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--3.astro");

const $$Astro$c = createAstro();
const $$Card5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Card5;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
  <div class="container">
    <!--  -->
    <!-- Card Type 5 -->
    <div class="row mb-60">
      ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
              <div class="card card--5">
                <div class="card__head">
                  <div class="card__head--profileimg card--circlewrap">
                    <img${addAttribute(input.userimg, "src")} alt="">
                  </div>
                  <div class="card__head--profiledetail">
                    <h3>${input.subtitle}</h3>
                    <p>${input.userdesignation}</p>
                  </div>
                </div>
                <div class="card__content">
                  <p>"${input.description}"</p>
                </div>
              </div>
            </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--5.astro");

const $$Astro$b = createAstro();
const $$Card6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Card6;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
  <div class="container">
    <!-- Card Type 7 -->
    <div class="row mb-60">
      ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
              <div class="card card--7">
                <div class="card__head card--circlewrap">
                  <img${addAttribute(input.blogimg, "src")} alt="">
                </div>
                <div class="card__content">
                  <h3>${input.title}</h3>
                  <p class="txt-orange">${input.subtitle}</p>
                </div>
              </div>
            </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--6.astro");

const $$Astro$a = createAstro();
const $$Card7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Card7;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad bg-lwhite">
  <div class="container">
    <!-- Card Type 8 -->
    <div class="row mb-60">
      ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
              <div class="card card--8">
                <div class="card__head card--circlewrap">
                  <img${addAttribute(input.blogimg, "src")} alt="">
                </div>
                <div class="card__content">
                  <h3>${input.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati sed suscipit nostrum velit dolorum. Veritatis
                    omnis possimus sequi nostrum saepe hic dignissimos corporis
                    nesciunt facilis laboriosam. Aperiam ut numquam libero.
                  </p>
                  <a href="#" class="readmore readmore--arrow">
                    Read More
                  </a>
                </div>
              </div>
            </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--7.astro");

const $$Astro$9 = createAstro();
const $$Card8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Card8;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad">
  <div class="container">
    <!-- Card Type 6 -->
    <div class="row mb-60">
        ${data$1.slice(0, 3).map((input, index) => {
    return renderTemplate`<div class="col-sm-4">
            <div class="card card--6"${addAttribute(`background-image: url("${input.img}");`, "style")}>
                <div class="card__content">
                    <h3>${input.title}</h3>
                    <ul>
                        <li><a href="">Lorem 1</a></li>
                        <li><a href="">Lorem 2</a></li>
                        <li><a href="">Lorem 3</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--8.astro");

const $$Astro$8 = createAstro();
const $$Card9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card9;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad">
  <div class="container">
    <!-- Card Type 9 -->
    <div class="row mb-60">
      <div class="col-sm-12">
        <div class="card card--9">
          <div class="card__content">
            <h4 class="txt-primary">Category</h4>
            <h2 class="txt-primary">Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              aperiam quo consequatur labore cum aliquam vero ducimus corporis
              officiis consectetur!
            </p>
            <a href="#" class="readmore readmore--arrow">Read More</a>
          </div>
          <div class="card__imgsec">
            <img${addAttribute(dashboardimg, "src")} alt="">
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--9.astro");

const $$Astro$7 = createAstro();
const $$Card10 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Card10;
  return renderTemplate`${maybeRenderHead($$result)}<section class="section--pad">
  <div class="container">
    <!-- Card Type 10 -->
    <div class="row mb-60">
      ${data$1.slice(0, 2).map((input, index) => {
    return renderTemplate`<div class="col-sm-6">
              <div class="card card--10">
                <div class="card__imgsec">
                  <img${addAttribute(input.img, "src")} alt="">
                </div>
                <div class="card__content">
                  <h3>${input.title}</h3>
                  <h5>${input.category}</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    sed in nisi sunt perspiciatis debitis, incidunt aut laborum
                    aliquid laboriosam!
                  </p>
                  <p class="date">Jan 01 2023</p>
                </div>
              </div>
            </div>`;
  })}
    </div>
    <!--  -->
  </div>
</section>`;
}, "C:/rage/learning projects/ui-bs/src/components/Cards/Card--10.astro");

const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cards - UI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    ${renderComponent($$result2, "Card1", $$Card1, {})}
    ${renderComponent($$result2, "Card2", $$Card2, {})}
    ${renderComponent($$result2, "Card3", $$Card3, {})}
    ${renderComponent($$result2, "Card4", $$Card4, {})}
    ${renderComponent($$result2, "Card5", $$Card5, {})}
    ${renderComponent($$result2, "Card6", $$Card6, {})}
    ${renderComponent($$result2, "Card7", $$Card7, {})}
    ${renderComponent($$result2, "Card8", $$Card8, {})}
    ${renderComponent($$result2, "Card9", $$Card9, {})}
    ${renderComponent($$result2, "Card10", $$Card10, {})}
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/cards/index.astro");

const $$file$2 = "C:/rage/learning projects/ui-bs/src/pages/cards/index.astro";
const $$url$2 = "/cards";

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate``;
}, "C:/rage/learning projects/ui-bs/src/layouts/Footer.astro");

const $$Astro$4 = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="errorpage">
        <!-- <Header></Header> -->
    </div><main>
        <section class="section section--pad errorpage">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND!</h2>
                        <p>We could not find the page you were looking for. Meanwhile, you may return to <a href="/">home page.</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main><div class="errorpage">
        ${renderComponent($$result2, "Footer", $$Footer, {})}
    </div>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/404.astro");

const $$file$1 = "C:/rage/learning projects/ui-bs/src/pages/404.astro";
const $$url$1 = "/404";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$TabOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabOne;
  return renderTemplate`${maybeRenderHead($$result)}<article class="ootb-tabcordion">
  <div class="ootb-tabcordion--tabs" role="tablist" aria-label="TabCordion">
    <button class="tab is-active" role="tab" aria-selected="true" aria-controls="tab1-tab" id="tab1">Tab 1</button>
    <button class="tab" role="tab" aria-selected="false" aria-controls="tab2-tab" id="tab2" tabindex="-1">Tab 2</button>
    <button class="tab" role="tab" aria-selected="false" aria-controls="tab3-tab" id="tab3" tabindex="-1">Tab 3</button>
  </div>
  <section id="tab1-tab" class="ootb-tabcordion--entry is-active" data-title="Tab 1" tabindex="0" role="tabpanel" aria-labelledby="tab1">
    <div class="ootb-tabcordion--entry-container">
      <div class="ootb-tabcordion--entry-content">
        <p>
          A simple solution for having tabbed content on a large screen but turn
          it into accordion on a smaller one when the time is right. Just resize
          your screen to see the tabbed interface transforming into an
          accordion.
        </p>
        <p>
          In order to keep the HTML as clean as possible, without duplicating
          elements, we use element attributes as CSS content to display the
          accordion tabs. <a class="more" href="https://www.gsarigiannidis.gr/tabs-on-desktop-accordion-on-mobile/" target="_blank">Read more</a>
        </p>
      </div>
    </div>
  </section>
  <section id="tab2-tab" class="ootb-tabcordion--entry" data-title="Tab 2" tabindex="-1" role="tabpanel" aria-labelledby="tab2">
    <div class="ootb-tabcordion--entry-container">
      <div class="ootb-tabcordion--entry-content">
        <p>
          Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
          ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
          posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna
          nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </div>
    </div>
  </section>
  <section id="tab3-tab" class="ootb-tabcordion--entry" data-title="Tab 3" tabindex="-1" role="tabpanel" aria-labelledby="tab3">
    <div class="ootb-tabcordion--entry-container">
      <div class="ootb-tabcordion--entry-content">
        <p>
          Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
          ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
          posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
          ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
          posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
          ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
          posuere a, pede.
        </p>
      </div>
    </div>
  </section>
</article>`;
}, "C:/rage/learning projects/ui-bs/src/components/Tabs/TabOne.astro");

const cloud = "/assets/images/cloud.png";

const facebook = "/assets/images/fb.png";

const light = "/assets/images/light.jpg";

const $$Astro$2 = createAstro();
const $$TabTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabTwo;
  return renderTemplate`${maybeRenderHead($$result)}<div id="tsum-tabs">
  <main>
    <input id="tab01" type="radio" name="tabs" checked>
    <label for="tab01">Twitter</label>

    <input id="tab02" type="radio" name="tabs">
    <label for="tab02">Facebook</label>

    <input id="tab03" type="radio" name="tabs">
    <label for="tab03">Instagram</label>

    <input id="tab04" type="radio" name="tabs">
    <label for="tab04">Linkedin</label>

    <section id="content01">
      <div class="tabOne__flex">
        <div class="tabOne__flex--content-one">
          <h3>Twitter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati
            atque quibusdam officiis est dolorum minima deleniti ratione
            molestias numquam. Voluptas voluptates quibusdam cum?
          </p>
        </div>
        <div class="tabOne__flex--content-two">
          <h3>Content</h3>

          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="content02" class="facebook">
      <div class="facebook__flex">
        <div class="facebook__flex--content-one w-40">
          <h3>Facebook</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
        </div>
        <div class="facebook__flex--content-two">
          <img${addAttribute(cloud, "src")} alt="cloud" class="cloud">
          <img${addAttribute(facebook, "src")} alt="facebook" class="facebook_logo">
        </div>
      </div>
    </section>

    <section id="content03">
      <div class="video">
        <iframe width="420" height="345" src="https://www.youtube.com/embed/rzfSGreEO8g?autoplay=1&mute=1">
        </iframe>
      </div>
    </section>

    <section id="content04">
      <div class="image__flex">
        <div class="image__flex--content-one">
          <img${addAttribute(art, "src")} alt="art">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
        </div>
        <div class="image__flex--content-two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
            sequi, quo tempore in eum obcaecati atque quibusdam officiis est
            dolorum minima deleniti ratione molestias numquam. Voluptas
            voluptates quibusdam cum?
          </p>
          <img${addAttribute(light, "src")} alt="art">
        </div>
      </div>
    </section>
  </main>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Tabs/TabTwo.astro");

const $$Astro$1 = createAstro();
const $$TabThree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabThree;
  return renderTemplate`${maybeRenderHead($$result)}<div data-tab-component>
  <div role="tablist" aria-label="Tabbed content">
    <button role="tab" aria-selected="true" aria-controls="tab1-content" id="tab1">
      Tab One
    </button>

    <button role="tab" aria-selected="false" aria-controls="tab2-content" id="tab2">
      Tab Two
    </button>

    <button role="tab" aria-selected="false" aria-controls="tab3-content" id="tab3">
      Tab Three
    </button>

    <button role="tab" aria-selected="false" aria-controls="tab4-content" id="tab4">
      Tab Four
    </button>
  </div>

  <section id="tab1-content" role="tabpanel" aria-labelledby="tab1" tabindex="0">
    <h3>Content One</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas
      adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui.
      Quasi temporibus eos commodi aliquid impedit amet, similique nulla. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius
      ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi
      aliquid impedit amet, similique nulla. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus
      ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit
      amet, similique nulla. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit.
    </p>
  </section>

  <section id="tab2-content" role="tabpanel" aria-labelledby="tab2" tabindex="0" aria-hidden="true">
    <h3>Content Two</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas
      adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui.
      Quasi temporibus eos commodi aliquid impedit amet, similique nulla. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius
      ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi
      aliquid impedit amet, similique nulla. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </p>
  </section>

  <section id="tab3-content" role="tabpanel" aria-labelledby="tab3" tabindex="0" aria-hidden="true">
    <h3>Content Three</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas
      adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui.
      Quasi temporibus eos commodi aliquid impedit amet, similique nulla. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius
      ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi
      aliquid impedit amet, similique nulla. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </p>
  </section>

  <section id="tab4-content" role="tabpanel" aria-labelledby="tab4" tabindex="0" aria-hidden="true">
    <h3>Content Four</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas
      adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui.
      Quasi temporibus eos commodi aliquid impedit amet, similique nulla. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius
      ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi
      aliquid impedit amet, similique nulla. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus
      ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit
      amet, similique nulla. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit.
    </p>
  </section>
</div>`;
}, "C:/rage/learning projects/ui-bs/src/components/Tabs/TabThree.astro");

const $$Astro = createAstro();
const $$Tab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tab;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tab Components" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "BackButton", $$BackButton, {})}
    <div class="margin">${renderComponent($$result2, "TabOne", $$TabOne, {})}</div>
    <div class="margin container">${renderComponent($$result2, "TabTwo", $$TabTwo, {})}</div>
    <div class="margin container">${renderComponent($$result2, "TabFour", $$TabFour, {})}</div>
    <div class="margin">${renderComponent($$result2, "TabThree", $$TabThree, {})}</div>
  </main>` })}`;
}, "C:/rage/learning projects/ui-bs/src/pages/tab.astro");

const $$file = "C:/rage/learning projects/ui-bs/src/pages/tab.astro";
const $$url = "/tab";

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, _page13 as m, _page14 as n, _page15 as o };
