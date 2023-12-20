$(function(){
  $(".suby").on('click', function(){
   $(".background-pop").css({"display": "flex"},2000);
   $("input").val("")
   $("textarea").val("")
  })
 })
 $(function(){
  $(".home").on('click', function(){
  //  $(".background-pop").css({"display": "none"},2000);
   window.location.href="index.html"
  })
 })
  $(function(){
  $("#trust").on('click', function(){
   $(".background-pop").css({"display": "none"},2000);
  })
 })

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");
buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});
