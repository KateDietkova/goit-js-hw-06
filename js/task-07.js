const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

let inputValue = 0;
input.addEventListener("input", onInputRange);


function onInputRange() {
    inputValue = input.value;
    spanText.style.fontSize = `${inputValue}px`;
}