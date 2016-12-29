/*
* @Author: woshijpf
* @Date:   2016-12-28 22:58:55
* @Last Modified by:   woshijpf
* @Last Modified time: 2016-12-29 10:17:12
*/

// var myHeading = document.querySelector('h2')
// myHeading.textContent= "Hello world!"

var myImage = document.querySelector('img');
var myHeading = document.querySelector('h2');
var myButton = document.querySelector('button');

function setUserName() {
	var myName = prompt('Please input your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localstorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/google_chrome_logo.png') {
		myImage.setAttribute('src','images/firefox_logo.jpeg');
	} else {
		myImage.setAttribute('src', 'images/google_chrome_logo.png')
	}
}