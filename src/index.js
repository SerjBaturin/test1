/* eslint-env browser */
import './sass/styles.scss';

// Define button
const btn = document.querySelector('.btn');

// Define button's handler
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const a = Number(document.querySelector('.a').value.replace(',', '.')); // First input
  const b = Number(document.querySelector('.b').value.replace(',', '.')); // Second input
  const result = a + b; // result
  // Output
  const sum = document.querySelector('.sum');
  switch (true) {
    case Number.isNaN(result): // Check inputs
      sum.innerHTML = 'Please, enter a number!';
      break;
    case Number.isInteger(result): // Check integer
      sum.innerHTML = result;
      break;
    case !Number.isInteger(result): // or NOT integer
      sum.innerHTML = result.toFixed(1); // if NOT integer, reduce to one decimal place
      break;
    default:
      return null;
  }
  return 0;
});
