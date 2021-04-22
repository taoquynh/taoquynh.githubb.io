let students = [
  {
    name: "a",
    age: 20,
  },
  {
    name: "b",
    age: 40,
  },
  {
    name: "c",
    age: 20,
  },
  {
    name: "d",
    age: 15,
  },
  {
    name: "e",
    age: 30,
  },
];

function ageAvg(arrays) {
  let sum = 0;
  let avg = 0;
  for (let i of arrays) {
    console.log(i.age);
    sum = sum + i.age;
  }
  console.log("sum:", sum);
  avg = sum / arrays.length;
  return avg;
}

console.log("Avg", ageAvg(students));

function sapXepTuoi(obj) {
  let min = obj[0];
  for (i = 0; i < obj.length; i++) {
    for (k = i + 1; k < obj.length; k++) {
      if (obj[i].age > obj[k].age) {
        min = obj[k];
        obj[k] = obj[i];
        obj[i] = min;
      }
    }
  }
  console.log(obj);
}
sapXepTuoi(students);

let values = [false,NaN,24,0,"",undefined,null,"ANBC",true]
function giaTri(arr){
    let newArr =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log(giaTri(values))

function kiemTraChuoiDoiXung(str){
    let reverseStr=""; 
    for(let i = str.length-1; i>=0; i--){
            reverseStr=reverseStr+str[i];
    }

    reverseStr = reverseStr.split(" ").join("").toLowerCase();
    let newStr = str.split(" ").join("").toLowerCase();

    if(newStr === reverseStr){
        return true;
    }else{
        return false;
    }
}
function max(arr){
    let max =arr[0].length;
    for(let i=1 ;i < arr.length; i++ ){
        if(max<arr[i].length){
            max =arr[i].length
        }
    }

    let array = []
    for(i=0 ; i < arr.length;i++){
        if(arr[i].length===max){
            array.push(arr[i])
        }
    }

    return array
}
