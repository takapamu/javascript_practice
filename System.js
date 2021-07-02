var EnterFlag = false;

function disp(n){
      var obj = document.getElementById("result");
      obj.value += n;
}

function enter(){
  var obj = document.getElementById("result");
  obj.value = eval(obj.value);
  EnterFlag = true;
}

function clear(){
  var obj = document.getElementById("result");
  obj.value == "0";
}


