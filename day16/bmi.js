function check() {
  let x = document.getElementById("weight").value;
  let y = document.getElementById("high").value / 100;
  let z = document.getElementById("result");
  let a = 0;
  let b = document.getElementById("life");

  if (x >= 20 && x <= 200 && y >= 1 && y <= 2) {
    a = x / (y * y);
    a = a.toFixed(2);
    z.innerHTML = `chi so BMI la: ${a}`;
  } else
    alert(
      "vui long kiem tra lai thong tin voi chieu cao:100~200 va can nang: 20~200"
    );
  if (a < 18.5) {
    b.innerHTML = `ban hoi gay can co nhung thuc don phu hop de cai thien`;
  } else if (18.5 <= a <= 24.9) {
    b.innerHTML = `ban dang co chi so hoan hao hay tiep tuc giu vung nhe`;
  } else {
    b.innerHTML = `ban dang thua can can co nhung thuc don va bai tap giup giam can de co 1 chi so hoan hao`;
  }
}
