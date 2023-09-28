const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 100) {
  //   header.style="background:pink; position:fixed; width:100%; z-index:999;"
  header.classList.add("blue")
} else {
  //   header.style="background:#2b2b2b;";
  header.classList.remove("blue")
  }
});


const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

// toggleCls.addEventListener("click", () => {
//   toggleBtn.classList.remove("open");
//   headerNav.classList.remove("open");
// });
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const toggleChev = document.querySelector(".chevron");
const toggleDrop = document.querySelector(".dropdown");

toggleChev.addEventListener("click", () => {
  toggleChev.classList.toggle("open");
  toggleDrop.classList.toggle("open");
});

const toggleChevRight = document.querySelector(".chevron");
const tweetPage = document.querySelector(".tweet__page_2");

toggleChevRight.addEventListener("click", () => {
  toggleChevRight.classList.toggle("open");
  tweetPage.classList.toggle("open");
});
