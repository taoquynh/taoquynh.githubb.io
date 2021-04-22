function test() {
  let selectFrom = document.getElementById("from");
  let result = selectFrom.value;
  console.log(result);
}

function quyDoiTienTe(){
    let moneyInput=document.getElementById("number").value;
    let donViTienTeFrom=document.getElementById("from").value;
    let donViTienTeTo=document.getElementById("to").value;
    let moneyOutput=document.getElementById("output");
    console.log(moneyInput);
      

    moneyOutput.innerHTML = `${chuyenDoi(donViTienTeFrom, donViTienTeTo, moneyInput)} ${donViTienTeTo}`
}

function chuyenDoi(currencyFrom, currencyTo, money) {

    if(donViTienTeFrom==="USD"&&donViTienTeTo==="VND"){
        moneyOutput.innerHTML=`${moneyInput*23000} ${donViTienTeTo}`;
    }
    if(donViTienTeFrom==="EUR"&&donViTienTeTo==="VND"){
        moneyOutput.innerHTML=`${moneyInput*27000} :${donViTienTeTo}`;
    } 
}
