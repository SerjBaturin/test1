/* eslint-env browser */
import './sass/styles.scss';

// Определяем кнопку
const btn = document.querySelector('.btn');

// Определеям обработчик для кнопки
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const a = Number(document.querySelector('.a').value.replace(',', '.')); // Первый input
  const b = Number(document.querySelector('.b').value.replace(',', '.')); // Второй input
  const result = a + b; // результат
  // Вывод результата
  const sum = document.querySelector('.sum');
  switch (true) {
    case Number.isNaN(result): // Проверяем, что введено
      sum.innerHTML = 'Ошибка! Введите число пожалуйста.';
      break;
    case Number.isInteger(result): // Проверяем integer
      sum.innerHTML = result;
      break;
    case !Number.isInteger(result): // или НЕ integer
      sum.innerHTML = result.toFixed(1); // если НЕ integer, сокращаем до одного знака после запятой
      break;
    default:
      return null;
  }
  return 0;
});
