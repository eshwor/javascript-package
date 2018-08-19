
//JavaScript


var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';

//change the img src
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/js.png') {
      myImage.setAttribute ('src','images/js1.png');
    } else {
      myImage.setAttribute ('src','images/image.png');
    }
}

//Split
var string = "How are you doing today?";
var res = string.split(" "); ///What needs to be split space or letter var res = string.split("o");
document.getElementById("demo").innerHTML = res;

//Join
var  result = res.join(" "); //opposite of split
document.getElementById("demo2").innerHTML = result;


//pop , push, shift, unshift

//CONDITIONALS If else Statement
var select = document.querySelector('#weather');
var result = document.querySelector('#demo3');

select.addEventListener('change', setWeather);

function setWeather() {

  var choice = select.value;
  if(choice === 'sunny'){
    result.textContent = "Good Morning !! It is nice and sunny outside today.";
  } else if ( choice === 'rainy' ) {
    result.textContent = "Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.";
  } else if ( choice === 'snowing' ) {
    result.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if ( choice === 'overcast' ) {
    result.textContent = "It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    result.textContent = '';
  }
}

//Ternary operator
var select = document.querySelector('#theme');
var wrapper = document.querySelector('#wrapper');

function update(bgColor, textColor) {
  wrapper.style.backgroundColor = bgColor;
  wrapper.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('lightgray','black');
}

//Loop
var Ids = ['Ishwor:001','Sharmila:003','Santosh:005','Ramkumar:007'];
var para = document.querySelector('#demo4');
var input = document.querySelector('#search');
var btn = document.querySelector('#search-btn');

btn.addEventListener('click', function() {
  var searchName = input.value;
  input.value = '';
  input.focus();
  for (var i = 0; i < Ids.length; i++) {
    var splitContact = Ids[i].split(':');
    if (splitContact[0] === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});
