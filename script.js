var arr = [];


function add() { if(document.getElementById("itemInput").value != "") {
  var myValue = document.getElementById("itemInput").value;
  arr.push(myValue);
  document.getElementById("itemsList").innerHTML = arr;
  document.getElementById("itemInput").value = "";
  }
}   

function erase() { if (arr.length > 1) {
    arr.pop();
    document.getElementById("itemsList").innerHTML = arr;
  } else {
    arr.pop();
    document.getElementById("itemsList").innerHTML = "List of Items";
  }
}

function run() { if (arr.length < 1) {
  document.getElementById("result").innerHTML = "Result";
} else {
  document.getElementById("result").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  }
}








