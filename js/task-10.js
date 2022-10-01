function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBoxMain: document.querySelector("#boxes"),
};

const collectionOfBoxes = [];
let amountOfBox;
let widthBox = 30;
let heigthBox = 30;

refs.input.addEventListener('input', onInputGetValue);
refs.createBtn.addEventListener("click", onClickCreateBoxes);
refs.destroyBtn.addEventListener("click", onClickDestroyBoxes);



function onInputGetValue(event) {
  amountOfBox = Number(event.currentTarget.value);
}


function onClickCreateBoxes() {
  if (amountOfBox === 0) {
    alert('Please enter the number');
    return;
  }
  
  createBoxes(amountOfBox);
  refs.divBoxMain.append(...collectionOfBoxes);
  refs.input.value = '';
  amountOfBox = 0;

}


function onClickDestroyBoxes() {
  refs.divBoxMain.innerHTML = '';
  collectionOfBoxes.splice(0, collectionOfBoxes.length);
  widthBox = 0;
  heigthBox = 0;
}


function createBoxes(amount) {

  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    const divBox = document.createElement('div');
    divBox.style.width = `${widthBox}px`;
    divBox.style.height = `${heigthBox}px`;
    divBox.style.backgroundColor = color;

    collectionOfBoxes.push(divBox);

    widthBox += 10;
    heigthBox += 10;
  }
  return collectionOfBoxes;
}