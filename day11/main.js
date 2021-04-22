//bai 1

function thang() {
  var date = new Date();
  console.log(date.getDate());
  var m = date.getMonth() + 1;
  if (m < 1 || m > 12) {
    return;
  }
  if (m <= 3) {
    return `Thang ${m} la mua xuan`;
  } else if (m <= 7) {
    return `Thang ${m} la mua he`;
  } else if (m <= 9) {
    return `Thang ${m} la mua thu`;
  } else if (m <= 12) {
    return `Thang ${m} la mua xuan`;
  }
}

//bai 2
function DateCount(m, y) {
  if (m < 1 || m > 12 || y < 1) {
    return `khong hop le`;
  }

  if (m === 4 || m === 6 || m === 9 || m === 11) {
    return `Thang ${m} nam ${y} co 30 ngay`;
  } else if (m === 2) {
    if (NamNhuan(y)) {
      return `Thang 2 nam ${y} co 29 ngay`;
    } else {
      return `thang 2 nam ${y} co 28 ngay`;
    }
  } else {
    return `thang ${m} nam ${y} co 31 ngay`;
  }
}

function NamNhuan(y) {
  if (y % 4 === 0 && y % 100 !== 0) {
    return true;
  } else if (y % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function kiemTraNamNhuan(y) {
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    return true;
  }

  return false;
}

function NgayThang(m, y) {
  if (m < 1 || m > 12 || y < 1) {
    return `Dữ liệu không hợp lệ`;
  }

  if (m === 4 || m === 6 || m === 9 || m === 11) {
    return `Thang ${m} nam ${y} co 30 ngay`;
  } else if (m === 2) {
    return kiemTraNamNhuan(y)
      ? `Thang ${m} nam ${y} co 29 ngay`
      : `Thang ${m} nam ${y} co 28 ngay`;
  } else {
    return `thang ${m} nam ${y} co 31 ngay`;
  }
}

function catchuoi(n) {
  let x = n.length;
  let y = n.substring(0, 10);
  if (x > 10) {
    return `${y}...`;
  } else {
    return `${y}`;
  }
}

function translate(text) {
  if (typeof text !== "string") {
    return "Xin chao, du lieu cua ban khong hop le";
  }

  if (text === "French") {
    return "Borjou";
  } else if (text === "Hawoai") {
    return "aloha";
  } else if (text === "Gemany") {
    return "Hallo";
  } else if (text === "Italy") {
    return "Ciao";
  } else if (text === "China") {
    return "Nihao";
  } else {
    return "Xin chao";
  }
}

function translate2(language) {
  switch (language) {
    case "French":
      console.log("Bonjour");
      break;
    case "Hawaiian":
      console.log("Hui");
      break;
    case "Germany":
      console.log("Hallo");
      break;
    case "Italy":
      console.log("Ciao");
      break;
    case "Hawaiian":
      console.log("Croatia");
      break;
    default:
      return "Xin chào";
  }
}
