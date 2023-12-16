var timeOut = 2000, // 2 seconds change image
    autoOn = false, // change it to false if you don't want automatic slides
    slideIndex = 0,
    slideTimer;
if (autoOn) {
   var slider = document.querySelector(".slideshow-container");
    slider.addEventListener("mouseenter", function() {
        clearTimeout(slideTimer);
        autoOn = false;
    });

    slider.addEventListener("touchstart", function() {
        clearTimeout(slideTimer);
        autoOn = false;
    });

    slider.addEventListener("mouseleave", function() {
        autoOn = true;
        autoSlides();
    });

    slider.addEventListener("touchend", function() {
        autoOn = true;
        autoSlides();
    });

    function autoSlides() {
        slideTimer = setTimeout(function() {

              showSlides();
              autoSlides();
            }
            , timeOut);
    }
     autoSlides();
} else {
     showSlides()
}

function prevSlide() {
      var e = document.getElementsByClassName("mySlides"),
        s = document.getElementsByClassName("dot");
       for (i = 0; i < e.length; i++) {
       e[i].style.display = "none";
       s[i].className = s[i].className.replace(" active", "");
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = e.length - 1;
    }
    e[slideIndex].style.display = "block";
    s[slideIndex].className += " active";

}

function showSlides() {
    var e = document.getElementsByClassName("mySlides"),
       s = document.getElementsByClassName("dot");
    for (i = 0; i < e.length; i++) {
        e[i].style.display = "none";
        s[i].className = s[i].className.replace(" active", "");
     }
    slideIndex++;
    if (slideIndex >= e.length) {
       slideIndex = 0;
    }
    e[slideIndex].style.display = "block";
    s[slideIndex].className += " active";
}

slideIndex = -1;
showSlides();
