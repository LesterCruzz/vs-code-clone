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