// попап

(function () {
const popup = document.getElementById('popup-wrap');
      const popupClose = document.querySelector('.popup-x');

      popupClose.onclick = function () {
        popup.style.display = "none";
      }
   }());

// бургер

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuCloseItem = document.querySelector('.menu__nav-close');
  const menuLinks = document.querySelectorAll('.menu-link');
  const trends = document.querySelector('.main-trends');
  const content = document.querySelector('.content');
  burgerItem.addEventListener('click', () => {
     menu.classList.add('menu_active');
     content.style.display = "none";
     trends.style.display = "none";

  });
  menuCloseItem.addEventListener('click', () => {
     menu.classList.remove('menu_active');
     content.style.display = "block";
     trends.style.display = "block";
  });

  if (window.innerWidth < 1200) {
     for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
           menu.classList.remove('menu_active');
           content.style.display = "block";
           trends.style.display = "block";
        })
     }
  };
}());