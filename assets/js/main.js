// tab
let tabs = document.querySelectorAll(".menu-tab li");
let tabContents = document.querySelectorAll(".tab-content .inner-tab");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
// menu mobile
let button = document.querySelectorAll('.btn-menu-mobile');
function menuClick() {
  let menuMobile = document.querySelectorAll(".main-nav");
  menuMobile.forEach(x => x.classList.toggle('active'));
  button.forEach(x => x.classList.toggle('active'));
}
