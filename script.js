// jquery for header
$(document).scroll(function() {
    if($(window).scrollTop() > 20){

     $("#phone").animate({"opacity": "1"},.01);
    }
});
$(document).scroll(function() {
    if($(window).scrollTop() <= 0){

     $("#phone").animate({"opacity": "0.0"},.01);
    }
});


// script for getting form data

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let legal = document.getElementById("legal");
let eStatus = document.getElementById("eStatus");
let abYou = document.getElementById("abYou");