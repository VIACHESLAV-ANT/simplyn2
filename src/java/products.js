{
const pilotItems = document.querySelectorAll('.products__button');

// Отримуємо всі елементи <li> з класом "products__item"
const productItems = document.querySelectorAll('.products__item');

// Функція, яка додає обробник події "click" до елементів "pilot"
function addClickHandlers() {
  pilotItems.forEach(function(pilotItem, index) {
    pilotItem.addEventListener('click', function() {
      handlePilotItemClick(index);
    });
  });
}

// Функція, яка обробляє натискання на елемент "pilot"
function handlePilotItemClick(index) {
  // Видаляємо клас "--active" з усіх елементів "pilot"
  pilotItems.forEach(function(item) {
    item.classList.remove('products__button--active');
  });
  // Додаємо клас "--active" лише до обраного елемента "pilot"
  pilotItems[index].classList.add('products__button--active');

  // Видаляємо клас "--active" з усіх елементів "products__item"
  productItems.forEach(function(item) {
    item.classList.remove('products__item--active');
  });
  // Додаємо клас "--active" лише до обраного елемента "products__item"
  productItems[index].classList.add('products__item--active');
}

// Викликаємо функцію для додавання обробників подій після завантаження сторінки
window.addEventListener('DOMContentLoaded', addClickHandlers);
};