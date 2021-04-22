/**
 * Arrow function
 */

function sayHi(name) {
  return `Hi ${name}`;
}

let hello = sayHi("Quynh");

// viet rut gon
let hello2 = (name) => `Hi ${name}`;

console.log(hello2("An"));

// tinh tong cua mang
let sumArray = (arrs) => {
  let sum = 0;
  for (let i = 0; i < arrs.length - 1; i++) {
    sum = sum + arrs[i];
  }

  return sum
};

console.log(sumArray([1, 2, 3, 4]));

var binhPhuong = (a) => a * a; // function co 1 tham so thi k can ngoac

var chuoi = () => "empty";

/**
 * Object
 */

let person = new Object();

// gan va them moi phan
person.name = "Quynh";
console.log(person.name);

let animal = {
  name: "Fish",
  color: "Gray",
  "number feet": 2,
};

console.log(animal.color);
console.log(animal["number feet"]);
console.log(animal["name"]);

// xoa phan tu
delete animal["number feet"];

console.log(animal);
