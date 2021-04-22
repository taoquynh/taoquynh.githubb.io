/**tinh tong chu so cua so nguyen */
function tinhTong(number) {
  //kiem tra so dau vao
  if (number < 0 || Number.isInteger(number) == false) {
    return;
  }

  //tinh tong
  let tachSo;
  let tong = 0;
  for (; number != 0; ) {
    tachSo = number % 10;
    tong += tachSo;
    number = Math.floor(number / 10);
  }
  return tong;
}

// kiem tra so hoan hao
function kiemTraSoHoanHao(a) {
  let tongCacUoc = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      tongCacUoc += i;
      console.log(i);
    }
  }
  if (tongCacUoc === a) {
    console.log(`${a} la so hoan hao`);
    return true;
  }
  return false;
}

function inSoHoanHao(n) {
  for (let i = 1; i <= n; i++) {
    if (kiemTraSoHoanHao(i) == true) {
      console.log(i);
    }
  }
}

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log("Gia tri lon nhat la: ", max);
  console.log("Gia tri nho nhat la: ", min);
}

function timsothu2(arr) {
  let max = arr[0];
  let max2 = arr[0];
  // tim Max trong mang arr
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  // xoa max trong mang arr
  for (i = 1; i < arr.length; i++) {
    if (arr[i] === max) {
      arr.splice(i, 1);
    }
  }

  // tim max cua mang arr sau khi da xoa phan tu lon nhat
  for (let i = 0; i < arr.length; i++) {
    if (max2 < arr[i]) {
      max2 = arr[i];
    }
  }
  console.log(max2);
}

function second_Max(a) {
  let max1;
  let max2;
  if (a[0] > a[1]) {
    max1 = a[0];
    max2 = a[1];
  } else {
    max1 = a[1];
    max2 = a[0];
  }
  for (let i = 2; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2) {
      max2 = a[i];
    }
  }
  return `${max2} là số lớn thứ hai trong mảng`;
}

// Tra ve vi tri dau tien cua so le trong mang

function findFirstOdd(arr) {
    for (let i in arr) {
        if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
            return `Index: ${i} - value: ${arr[i]}`;
        }
    }
}

// Tra ve vi tri cuoi cung cua so chan trong mang

function findLastEven(arr) {
    for (let i = arr.length - 1; i >=0; i--) {
        if (arr[i] % 2 === 0) {
            return `Index: ${i} - value: ${arr[i]}`;
        }
    }
}

let array = [-4, 0, -3.6, -5, 8, 6, 9, 4, -6, 2, 7];

console.log(findFirstOdd(array));
console.log(findLastEven(array));

function giaithua(n) {
    if (n < 0 || Number.isInteger(n) === false) {
        return;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let gt = 1;
    while (n > 1) {
        gt = gt * n;
        n--;
    }

    return gt;
}