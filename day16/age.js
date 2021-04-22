let day = new Date();
let year = day.getFullYear();
function ageCount() {
  namSinh = document.getElementById("age").value;
  if (namSinh <= 0 || namSinh > year) {
    thongBao = "Xin hay nhap lai nam sinh";
  } else {
    tuoi = year - namSinh;
    if (tuoi > 121) {
      thongBao = " Ban qua gia";
    } else {
      thongBao = `Tuoi cua ban la ${year - namSinh}`;
    }
  }
  document.getElementById("alert").innerHTML = thongBao;
}
