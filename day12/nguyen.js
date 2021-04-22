// Vẽ hình chữ nhật rỗng, kích thước m x n
function drawRectangle2(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thông số đầu vào không hợp lệ")
        return;
    }

    let str = "";

    // Vẽ các hàng thứ nhất
    for (let x = 0; x < m; x++) {
        str += "* "
    }

    // // Vẽ các hàng ở giữa
    for (let i = 1; 1 < n - 2; i++) {
        str += "<br />"
        for (let j = 0; j < m; j++) {
            if (j === 0 || j === m - 1) {
                str += "* "
            } else {
                str += "* ".fontcolor("red");
            }
        }
    }

    void main(m, n) {
        String str = "";
        for (int i = 1; 1 < n - 2; i++) {
          str += "<br />";
          for (int j = 0; j < m; j++) {
            if (j == 0 || j == m - 1) {
              str += "* ";
            } else {
              str += "  ";
            }
          }
        }
      }
      

    // Vẽ hàng cuối
    str += "<br>"
    for (let x = 0; x < m; x++) {
        str += "* "
    }
    console.log(str)
    document.write(str)
}