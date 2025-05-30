document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  };

  function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
});
