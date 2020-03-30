let myImage = document.querySelector('img#shirtless');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/henry.jpg') {
      myImage.setAttribute ('src','images/henry2.jpg');
    } else if (mySrc === 'images/henry2.jpg') {
      myImage.setAttribute ('src','images/henry3.jpg');
    } else if (mySrc === 'images/henry3.jpg') {
        myImage.setAttribute ('src','images/henry4.jpg');
    } else if (mySrc === 'images/henry4.jpg') {
        myImage.setAttribute ('src','images/henry.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName === "") {
        alert("No name entered. Try again.");
        setUserName();
    } else if (myName === null) {
        return;
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to Henry Cavill\'s Fan Page, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Henry Cavill\'s Fan Page, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }