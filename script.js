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