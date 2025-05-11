// Создаем элемент кнопки
const myButton = document.createElement("button");
myButton.textContent = "Дизлайк"; // Текст на кнопке
myButton.id = "floating-button";    // Удобно для стилизации
myButton.style.cssText = `
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;

// Добавляем обработчик клика
myButton.addEventListener("click", () => {
    (function() {

// Шаг 1: Находим секцию плеера
const section = document.querySelector('section.PlayerBarDesktop_root__d2Hwi');
if (!section) {
    console.error("Секция не найдена");
    return;
}
console.log(section);

// Шаг 2: Находим кнопку контекстного меню
const menuButton = section.querySelector('button[aria-label="Контекстное меню"]');
if (!menuButton) {
    console.error("Кнопка меню не найдена");
    return;
}
console.log(menuButton);

// Шаг 3: Эмулируем клик по кнопке меню
menuButton.click();
console.log("Кнопка 'Контекстное меню' нажата");

// Шаг 4: Ждём появления подменю с кнопкой "Не нравится"
function waitForDislikeButton(callback) {
    const observer = new MutationObserver(() => {
        const dislikeButton = [...document.querySelectorAll('button[role="menuitemcheckbox"]')].find(
    btn => btn.textContent.trim() === 'Не нравится'
);
        if (dislikeButton) {
            observer.disconnect(); // останавливаем наблюдателя
            callback(dislikeButton);
        }
    });

    // Начинаем наблюдать за изменениями в секции
    observer.observe(section, { childList: true, subtree: true });
}

// Шаг 5: Когда кнопка найдётся — кликаем по ней
waitForDislikeButton((dislikeButton) => {
    console.log("Кнопка 'Не нравится' найдена!");
    dislikeButton.click();
    console.log("Кнопка 'Не нравится' нажата");
});

})();

});

const sectionAgain = document.querySelector('section.PlayerBarDesktop_root__d2Hwi');
const nextButton = sectionAgain.querySelector('button[aria-label="Следующая песня"]');

// Добавляем кнопку в тело страницы
//button.insertAdjacentElement('afterend', newElement);
//document.body.appendChild(myButton);
nextButton.insertAdjacentElement('afterend', myButton);

console.log('Кнопка добавлена!')


// ДОБАВЛЕНИЕ УЛУЧШЕНОЕ

let i = 0;

const interval = setInterval(() => {
  
const sectionAgain = document.querySelector('section.PlayerBarDesktop_root__d2Hwi');
const nextButton = sectionAgain.querySelector('button[aria-label="Следующая песня"]');

console.log('ищу кнопку след песни')

  if (nextButton) {
	i++;
	console.log('interval ' + i);
    //clearInterval(interval);

    nextButton.insertAdjacentElement('afterend', myButton);
  }

if (i == 10) {clearInterval(interval)}

}, 500); // Проверяем каждые 500 мс