var run;

function test(){
  var test = document.getElementById("select").value;
 switch(test){
  case "pull":
    document.getElementById("snake").style.display = "none";
    document.getElementById("pull").style.display = "inline-block";
    break;
   case "snake":
    document.getElementById("snake").style.display  = "inline-block";
    document.getElementById("pull").style.display = "none";
    break;

 }
}

function check(value){
  if (document.getElementById("select").value == "none"){
    alert("Pick your shot!");
    return;
  }
  if (value == true){
    run = true;
/*    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";*/
    setup();
  }else{
    run = false;
/*    document.getElementById("start").style.display = "inline-block";
    document.getElementById("stop").style.display = "none";*/
  }
}

function setup(){
  if (run==true){
  var setup = document.getElementById("setup").value;
  setup = parseInt(setup) *1000;
  setTimeout(load, setup);
  }else{
    return;
  }
}
function load(){
  if (run==true){
  var minimum = document.getElementById("minimum").value;
  minimum = parseInt(minimum);
  var maximum = document.getElementById("maximum").value;
  maximum = parseInt(maximum);
  var random = (Math.random() * (maximum - minimum) + minimum);
/*  document.getElementById("time").innerHTML = random.toFixed(2) + " seconds";
  document.getElementById("result").innerHTML = " ";*/
  let audio = new Audio('./audio/robot/set.mp3').play();
  var select = document.getElementById("select").value;
  if(select == "pull"){
setTimeout(pull, random*1000)
  }else{
setTimeout(snake, random*1000)
  }
}
}

function pull(){
  if (run==true){
  var type = [];
  var form = document.forms[0];
  for (i = 0; i < form.length; i++) {
        if (form[i].checked) {
            type.push(form[i].value);
        }
    }
  var random = Math.floor(Math.random() * type.length);
/*  document.getElementById("result").innerHTML = type[random];*/
  let audio = new Audio('./audio/robot/'+type[random]+'.mp3');
   audio.volume = 1;
  audio.play();
  var wait = document.getElementById("wait").value;
  wait = parseInt(wait) *1000;
  setTimeout(setup, wait);
}
}

function snake(){
  if (run==true){
  var type = [];
    var form = document.forms[1];
  for (i = 0; i < form.length; i++) {
        if (form[i].checked) {
            type.push(form[i].value);
        }
    }
  var random = Math.floor(Math.random() * type.length);
/*  document.getElementById("result").innerHTML = type[random];*/
  let audio = new Audio('./audio/robot/'+type[random]+'.mp3');
  audio.volume = 1;
  audio.play();
  var wait = document.getElementById("wait").value;
  wait = parseInt(wait) *1000;
  setTimeout(setup, wait);
}
}
  
