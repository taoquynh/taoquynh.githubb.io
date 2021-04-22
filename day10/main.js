/**
 * Câu điều kiện
 */

function checkN(n) {
  // Kiem tra n co lon hon 0
  if (n > 0) {
    console.log("n lon hon 0");
  }

  // Kiem tra n la so chan hay so le
  if (n % 2 === 0) {
    console.log("n la so chan");
  } else {
    console.log("n la so le");
  }

  // Kiem tra n la so duong, so am, hay so 0
  if (n > 0) {
    console.log("n la so duong");
  } else if (n < 0) {
    console.log("n la so am");
  } else {
    console.log("n = 0");
  }
}

/**
 * 1. Viết hàm kiểm tra 2 số, trả về số lớn hơn.
 * 2.
 * - Cho 3 môn Toán, Lý, Hoá.
 * - Viết hàm tính điểm trung bình môn và kiểm tra xếp loại học lực.
 * - Biết rằng:
 *  + ĐTB lớn hơn bằng 8 và nhỏ hơn bằng 10: Xếp loại Giỏi
 *  + ĐTB lớn hơn bằng 6.5 và nhỏ hơn 8: Xếp loại Khá
 *  + ĐTB lớn hơn bằng 4 và nhỏ hơn 6.5: Xếp loại Trung Bình
 *  + ĐTB nhỏ hơn 4, lớn hơn 0: Xếp loại Yếu
 * - Lưu ý: Tính điểm môn học theo thang điểm 10.
 */

function kiemTraHaiSo(x, y) {
  if (x > y) {
    return x;
  }

  return y;
}

function hocluc(x, y, z) {
  if (x < 0 || x > 10 || y < 0 || y > 10 || z < 0 || z > 10) {
    console.log("diem khong hop le");
    return;
    console.log("abc");
  }

  let a = (x + y + z) / 3;

  if (a < 4) {
    console.log("học lực yếu");
  } else if (a < 6.5) {
    console.log("học lưc trung bình");
  } else if (a < 8) {
    console.log("học lực khá");
  } else {
    console.log("học lực giỏi");
  }
}

function hoclucCopy(x, y, z) {
  if (x < 0 || x > 10 || y < 0 || y > 10 || z < 0 || z > 10) {
    console.log("diem khong hop le");
  } else {
    let a = (x + y + z) / 3;

    // if(a<0||a>10){
    //     return;
    // }

    if (a < 4) {
      console.log("học lực yếu");
    } else if (a < 6.5) {
      console.log("học lưc trung bình");
    } else if (a < 8) {
      console.log("học lực khá");
    } else {
      console.log("học lực giỏi");
    }
  }
}

function checkSo4() {
  let a = 2 + 2;

  switch (a) {
    case 3:
      console.log("small");
      break;
    case 4:
      console.log("equal");
      break;
    case 5:
      console.log("big");
      break;
    default:
      console.log("default");
  }
}

// Giải phương trình bậc 2: ax^2 + bx + c = 0.
function giaiPTBac2(a, b, c) {
  if (a === 0) {
    return;
  }
  let delta = b * b - 4 * a * c;
  console.log(delta);

  if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log(`x1 = ${x1}, x2 = ${x2}`);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(`phuong trinh co nghiem kep la ${x}`);
  } else {
    console.log(" pt vo nghiem");
  }
}

function kiemTraTamGiac(a,b,c){
  if(a<=0||b<=0||c<=0){
    return "a,b,c khong hop le";
  }
  if(a+b>c&&a+c>b&&b+c>a){
    console.log("day la tam giac");
    let p=(a+b+c)/2;
    let s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return s;
  }
  else{
    return"day khong pahi tam giac";
  }
}
