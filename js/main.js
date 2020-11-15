// попап

(function () {
const popup = document.getElementById('popup-wrap');
      const popupClose = document.querySelector('.popup-x');

      popupClose.onclick = function () {
        popup.style.display = "none";
      }
   }());

// бургер

// (function () {
//    const burgerItem = document.querySelector('.burger');
//    const menu = document.querySelector('.menu');
//    const menuCloseItem = document.querySelector('.menu__nav-close');
//    const menuLinks = document.querySelectorAll('.menu-link');
//    burgerItem.addEventListener('click', () => {
//       menu.classList.add('menu_active');
//       burgerItem.style.display = "none";
//    });
//    menuCloseItem.addEventListener('click', () => {
//       menu.classList.remove('menu_active');
//       if (window.innerWidth < 1200) {
//          burgerItem.style.display = "block";
//       };
//    });
// }());

// (function () {
//    if (window.innerWidth >= 1200) {
//       burgerItem.style.display = "none";
//    };
// }());