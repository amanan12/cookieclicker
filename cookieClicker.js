$(".23").hide();
$(".btn2").hide();
$(".btn3").hide();
$(".btn4").hide();
$(".hi").hide();

$(".hi").click(function(){
  alert("You have donated all of your money. Thank You! ^_^");
  $(".hi").hide();
});

$(".button").hover(function(){
  
  getRandomColor();
  
  $(".button").css("background-color", a);
  
});

$(".button").click(function(){

  setInterval(function(){ 
  
    getRandomColor();

    b = ++count;
    $("#counter").html(b + " cookies");
    $("#counter").css("color", a);
    
    $("img").animate({width: "100%", height: "100%"}, 50 );
    
    validate();
  
  }, 1000);

});

$(".button").click(function(){
  
  $(".23").show();
  $(".button").hide();
  
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        a = color += letters[Math.floor(Math.random() * 16)];
    }
    return a;
}

function myFunction(event){
  var x = event.keyCode;
  if(x == 90){  
    $(".hi").show();
  }
  if(x == 88){  
    $(".hi").hide();
  }
  if(x == 32){  
    $("img").animate({width: "90%", height: "90%"}, 30 );
    getRandomColor();

  b = ++count;
  $("#counter").html(b + " cookies");
  $("#counter").css("color", a);
  
  $("img").animate({width: "100%", height: "100%"}, 30 );
  
  validate();
  }
}

count = 0;
var a;

$("#update").mousedown(function(){
  $("img").animate({width: "90%", height: "90%"}, 50 );
});



$("#update").mouseup(function(){ 
  
  getRandomColor();

  b = ++count;
  $("#counter").html(b + " cookies");
  $("#counter").css("color", a);
  
  $("img").animate({width: "100%", height: "100%"}, 50 );
  
  validate();
  
});

function getRandomColor() {
  
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        a = color += letters[Math.floor(Math.random() * 16)];
    }
    return a;
}

var b;
var c;
var d;
var e;

function validate(){
  
  if(b >= 100){
    c = (b * 2 - 100);
    $("#counter").html(c + " cookies");
  }
  
  if(c > 500){
    d = (b * 4 - 700);
    $("#counter").html(d + " cookies");
  } 
  
  if(d > 1000){
    e = (b * 6 - 1550);
    $("#counter").html(e + " cookies");
  }
  
  switch(count){
    case 100:
      $(".btn2").show();
      text = "You Are Cookie Rookie!! ^_^";
      break;
    case 500:
      $(".btn3").show();
      text = "You Are A Cookie Monster!! ^_^";
      break;
    case 1000:
      $(".btn4").show();
      text = "You Are A Cookie God!! ^_^";
      break;
    default:
      $(".btn2").hide();
      $(".btn3").hide();
      $(".btn4").hide();
      text = "";
  }
  
  $("#cook").html(text);
  
}