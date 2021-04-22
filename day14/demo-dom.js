// getElementByID(tenID) để lấy ra phần tử có id tương ứng
// innerHTML là nội dung của element
document.getElementById("demo").innerHTML = "Xin chao cac ban, toi la DOM";

// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();

let hello = document.getElementById("demo");
hello.innerHTML = "Hello world";
hello.style.color = "blue";
hello.style.textAlign = "center";
hello.style.backgroundColor = "yellow";

function pressOnClick() {
  hello.innerHTML = "Hi you";
  hello.style.color = "red";
}
