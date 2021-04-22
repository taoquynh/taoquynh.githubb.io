console.log("Vong lap for");
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

console.log("Vong lap while");
let j = 0;
while (j < 10) {
  j++;
  console.log(j);
}

console.log("Vong lap do while");

let k = 10;
do {
  k--;
  if (k === 8) {
    console.log("8 chia heets cho 2");
    continue;
  }
  console.log(k);
} while (k > 0);

// Cho n, (n < 50). Đếm iệt kê tất cả các số chia hết cho 5 trong đoạn từ 0 đến n ([0,n]).
function chiaHetCho5(n) {
  if (n < 0 || n > 50) {
    return;
  }

  let dem = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 5 === 0) {
      console.log(i);
      dem++;
    }
  }

  console.log(`Co tat ca ${dem} so chia het cho 5`);
}
