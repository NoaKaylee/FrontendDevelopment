// JavaScript Document

// https://www.w3schools.com/w3css/w3css_slideshow.asp

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides"); // get all elements with the specified class name
    for (i = 0; i < x.length; i++) { // the var i is 0, when i is smaller than x.length, do this . ++ is count up 1 every time it is called.
        x[i].style.display = "none"; // hide an element
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1} 
    x[myIndex-1].style.display = "block"; // block-level element
    setTimeout(carousel, 2000); // change image every 2 seconds
}

