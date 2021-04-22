console.log("Hello main.js");

// Chu thich 1 dong

/*
    Chu thich
    nhieu dong
*/

/**
 * 1. Number
 * - So nguyen, so thuc
 * - Infinity
 * - NaN (Not a Number)
 */

/**
 * 2. String (chuoi, xau)
 * 'Dat trong dau nhay don'
 * "Dat trong dau nhay kep"
 * `Dat trong dau back-tick ${1+3}`
 */

/**
 * 3. Boolean
 * - Chi co 2 gia tri dung/sai (true/false)
 */

/**
 * 4. null
 * - null la mot bien / doi tuong no trong, no khong co gi
 */

/**
 * 4. undefined
 * - mot bien/hang so ma da duoc khai bao, chua duoc khoi tao thi no mang gia tri undefined
 */

/**
 * Ham so - function
 */

function sendEmail() {
  console.log("This is a function");
}

sendEmail();

function getAMessage(from, message = "Khong co noi dung") {
  console.log(from + ":" + message);
}

getAMessage("Robin", "hi");

getAMessage("John");


function getABox() {
    return "This is a box"
}

let box = getABox();

// Bai 4
function calSum(a, b) {
    return a + b;
}

console.log(calSum(10, 20));


function binhPhuong (p){
    return p * p;
}
let o = binhPhuong(5);
console.log(o);

let z = 2021
function theki(z) {
    return z % 100;
}
let e = theki(2020)
