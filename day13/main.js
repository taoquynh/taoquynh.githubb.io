function tamgiacvuong(m) {
  console.log(m);
  if (m <= 0 || Number.isInteger(m) === false) {
    document.write("So khong hop le");
    return;
  }

  let str = "";
  for (i = 0; i < m; i++) {
    for (j = 0; j <= i; j++) {
      str += "*&#32;";
    }
    str += "<br>";
  }
  document.writeln(str);
}
// hinh tam giac can nguoc
function tamgiacCan(m, n) {
  console.log(m);
  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    document.write("So khong hop le");
    return;
  }
  let str = "";
  for (i = 0; i < n; i++) {
    str += "<br>";
    for (j = 0; j < m; j++) {
      if (j >= i && j < m - i) {
        str += "* ";
      } else {
        str += "+";
      }
    }
  }
  document.writeln(str);
}
// tamgiacCan(7, 4);

function countCal(n) {
  if (n <= 0 || Number.isInteger === false) {
    return "So khong hop le";
  }
  let countNumber = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 2 !== 0) {
      n = n * 3 + 1;
    }

    countNumber++;
  }

  if (countNumber === countNumber) {
    return countNumber;
  } else {
    return -1;
  }
}

function doiXung(n) {
  n = n + "";
  let reversedN = n.split("").reverse().join("");
  if (n === reversedN) {
    return true;
  } else {
    return false;
  }
}

function kiemTraDoiXung(n) {
  let soMoi = 0;
  let temp = n;
  while (temp > 0) {
    let soTachRa = temp % 10;
    soMoi = soMoi * 10 + soTachRa;
    temp = Math.floor(temp / 10);
  }
  if (soMoi === n) {
    console.log(n + " la so doi xung");
  } else {
    console.log(n + "khong phai so doi xung");
  }
}
function giataxi() {
  let soKM = prompt("nhap so km");
  let b = prompt("nhap thoi gian  cho");
  let giacuoc = 0;

  if (soKM < 0 && b < 0) {
    return "nhap lai du lieu";
  }

  if (soKM <= 1) {
    giacuoc = 9000;
  } else if (soKM > 1 && soKM < 31 ) {
    giacuoc = 9000 + (soKM-1) * 11000;
  } else if (soKM >= 31) {
    giacuoc = 9000 + (29 * 11000) + (soKM - 30) * 9500;
  }

  if(b>0){
      let a=0;
      a = 20000*b;
      giacuoc+=a
  }
  
  
  console.log("KM di: ", soKM);
  console.log("thoi gian cho la:",b,"gio")
  console.log("so tien la: ",giacuoc);
}
