// Функция для рендеринга элементов меню
function renderMenuItems(menuItems) {
    const menuList = document.querySelector('.js-menu');

    // Перебираем каждый объект из массива JSON
    menuItems.forEach(function (item) {
      // Создание элементов списка (li) и добавление их в список меню
      const listItem = document.createElement('li');
      const itemName = document.createElement('h3');
      const itemDescription = document.createElement('p');
      const itemImage = document.createElement('img');
      const itemPrice = document.createElement('p');
      const itemIngredients = document.createElement('ul');

      itemName.textContent = item.name;
      itemDescription.textContent = item.description;
      itemImage.src = item.image;
      itemPrice.textContent = 'Price: ' + item.price + ' $';
      item.ingredients.forEach(function (ingredient) {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        itemIngredients.appendChild(ingredientItem);
      });

      listItem.appendChild(itemName);
      listItem.appendChild(itemDescription);
      listItem.appendChild(itemImage);
      listItem.appendChild(itemPrice);
      listItem.appendChild(itemIngredients);

      menuList.appendChild(listItem);
    });
  }

  // Слушатель события загрузки страницы
  document.addEventListener('DOMContentLoaded', function () {
    // Загрузка данных из файла menu.json
    fetch('menu.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Вызываем функцию рендеринга меню с данными из JSON
        renderMenuItems(data);
      })
      .catch(function (error) {
        console.error('Error fetching menu data:', error);
      });
  });
 // Слушатель события загрузки страницы
 document.addEventListener("DOMContentLoaded", function () {
    // Слушатель события изменения состояния переключателя темы
    document.getElementById("theme-switch-toggle").addEventListener("change", function () {
      // Получаем текущее значение переключателя
      const themeToggle = document.getElementById("theme-switch-toggle");
      // Получаем корневой элемент (body) для применения класса темы
      const rootElement = document.querySelector("body");

      // Если переключатель включен, добавляем класс "dark-theme", иначе удаляем его
      if (themeToggle.checked) {
        rootElement.classList.add("dark-theme");
      } else {
        rootElement.classList.remove("dark-theme");
      }
    });
  });