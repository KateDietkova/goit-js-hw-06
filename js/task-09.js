function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector('body');


changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}