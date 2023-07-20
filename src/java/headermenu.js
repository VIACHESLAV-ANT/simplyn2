{
// Отримуємо посилання на елементи "button-menu", "button__close" і "menu--content"
const buttonMenu = document.querySelector('.button-menu');
const buttonClose = document.querySelectorAll('.button__close');
const menuContent = document.querySelector('.menu--content');
const buttonicon = document.querySelectorAll('.button__icon');

// Додаємо обробник події "click" до елемента "button-menu"
buttonMenu.addEventListener('click', function() {
  // Додаємо або видаляємо клас "--active" з елементів "button__close" і "menu--content" залежно від їх поточного стану
  buttonicon.forEach(function(item) {
    item.classList.toggle('button__icon--active');
  });
  menuContent.classList.toggle('menu--content--active');
});

}