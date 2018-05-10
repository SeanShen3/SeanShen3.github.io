var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

var myImg = document.querySelector('img');
myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === "images/Origin-源型机.jpg") {
        mySrc = "images/海贼王.jpg";
    } else {
        mySrc = "images/Origin-源型机.jpg";        
    }
    myImg.setAttribute('src', mySrc);
}

var myButton = document.querySelector('button');
function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello ^_^' + myName;
}

myButton.onclick = setUserName;

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storageName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello ^_^  ' + storageName;
}



