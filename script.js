const selectSize = document.querySelector(".selectsize");
const selectColor = document.querySelector(".colorpicker");
const textInput = document.querySelector("#textcontainer");
const textborder = document.querySelector(".bordersize");
const userBtn = document.querySelector(".changebtn");

userBtn.addEventListener("click", () => {
  const Sizevalues = selectSize.options[selectSize.selectedIndex];
  const selectedvalue = Sizevalues.value;
  textInput.style.fontSize = selectedvalue + "px";
  const selectPicker = selectColor.value;
  textInput.style.color = selectPicker;
  const userBorder = textborder.options[textborder.selectedIndex];
  const Borderuser = userBorder.value + "px";
  textInput.style.border = `${Borderuser} solid black`;
});
