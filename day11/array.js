let array = [1, 2, 3];
let names;

names = ["An", "Anh", "Hieu", "Thinh"];

names.length; // dem so phan tu cua mang

// lay phan tu theo index
names[3];
console.log(names[2]);

// duyet mang
for (let i = 0; i < names.length; i++) {
  console.log(`Toi ten la ${names[i]}`);
}

for (let index in names) {
  console.log(`Index la ${index} va item la ${names[index]}`);
}

for (let item of names) {
  console.log(item);
}

// Phuong thuc voi mang
names.push("Quynh"); // dung ham push de them moi mot phan tu vao mang
console.log(names);

array.pop(); // dung ham pop de lay ra (xoa) mot phan tu cuoi mang
console.log(array);

// Cho một mảng số nguyên. Kiểm tra nếu có phần tử bé hơn 0 thì thay thế nó bằng 0
function checkArray(arr) {
  for (let i in arr) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

function drawSquare(n) {
    for (let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
            console.log("*");
        }
    }
}