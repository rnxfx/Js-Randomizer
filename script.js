var arr = [];

function add(){
  if(document.getElementById("itemInput").value != "") {
    var myValue = document.getElementById("itemInput").value;
    arr.push(myValue);
    document.getElementById("itemsList").innerHTML = arr;
    document.getElementById("itemInput").value = "";
  }
}   

function erase(){
  if(arr.length) 
    arr.pop();
  document.getElementById("itemsList").innerHTML = arr.length >= 1 ? arr : "List of Items";
}

function run(){
  document.getElementById("result").innerHTML = arr.length < 1 ? "Result" : arr[Math.floor(Math.random() * arr.length)];
}









