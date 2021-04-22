let container = document.getElementById("container");
let paraNo1 = document.getElementById("paraNo1");
let paraNo2 = document.getElementById("paraNo2");
let paraNo3 = document.getElementById("paraNo3");

function changeFontSize() {
  let newFontSize = prompt("Nhập vào font-size muốn thay đổi", "20px");
  container.style.fontSize = newFontSize;
}

function changeColor() {
  paraNo1.style.color = "green";
  paraNo2.style.color = "yellow";
  paraNo3.style.color = "red";
}

function changecontent() {
  paraNo2.innerText = paraNo1.innerText
}

function changeBgColor() {
  document.getElementById("container").style.backgroundColor = "blanchedalmond";
}

function tangSize() {
  let value = prompt(
    "Hãy nhập vào id đoạn văn (paraNo1, paraNo2, paraNo3)",
    "paraNo1"
  );
  let element = document.getElementById(value);
  let fontsizeNumber = window
    .getComputedStyle(element)
    .getPropertyValue("font-size");
  let currentFont = parseFloat(fontsizeNumber);
  element.style.fontSize = currentFont + 5 + "px";
}

function giamSize() {
  let value = prompt(
    "Hãy nhập vào id đoạn văn (paraNo1, paraNo2, paraNo3)",
    "paraNo1"
  );
  let element = document.getElementById(value);
  let fontsizeNumber = window
    .getComputedStyle(element)
    .getPropertyValue("font-size");
  let currentFont = parseFloat(fontsizeNumber);
  element.style.fontSize = currentFont - 5 + "px";
}

function reset() {
  location.reload();
}
