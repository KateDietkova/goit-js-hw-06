const input = document.querySelector('[data-length="6"]');
const symbolInputLength = Number(input.dataset.length);
let inputValueLengthCurrent = 0;

input.addEventListener("input", onInputGetLength);

input.addEventListener("blur", onInputBlur);

function onInputGetLength(event) {
  inputValueLengthCurrent = event.currentTarget.value.length;
}

function onInputBlur() {
  if (
    input.classList.contains("invalid") &&
    inputValueLengthCurrent === symbolInputLength
  ) {
    input.classList.replace("invalid", "valid");
    return;
  } else if (inputValueLengthCurrent !== symbolInputLength) {
    input.classList.add("invalid");
    return;
  } else {
    input.classList.add("valid");
  }
}
