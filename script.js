$(function(){
  $(".suby").on('click', function(){
   $(".background-pop").css({"display": "flex"},2000);
   $("input").val("")
   $("textarea").val("")
  })
 })
 
$(window).on('load', function() {
  $(".quote-form").animate({"opacity": "1"},1000);
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
$(function(){
  var emailChanged = false;
  var nameChanged = false;
  var numberChanged = false;
  var dateChanged = false;
  var posChanged = false;

  function checkChanges() {
    if (emailChanged && nameChanged && numberChanged && dateChanged && posChanged) {
      console.log("hi");
      $(".appButton").animate({"opacity": "1"}, 200);
      $(".appButton").css({"font-weight": "900"}, 200);
      $(".appButton").prop("disabled", false);
        $(function(){
  $(".appButton").on('click', function(){
   $(".afterText").css({"display": "block"},2000);
  })
 })
    }
  }

  $(".email").on('change', function(){
    emailChanged = true;
    checkChanges();
  });

  $(".name").on('change', function(){
    nameChanged = true;
    checkChanges();
  });

  $(".number").on('change', function(){
    numberChanged = true;
    checkChanges();
  });

  $(".date").on('change', function(){
    dateChanged = true;
    checkChanges();
  });

  $(".pos").on('change', function(){
    posChanged = true;
    checkChanges();
  });
});

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
