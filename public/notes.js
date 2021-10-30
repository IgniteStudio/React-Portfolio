way === "left"
  ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
  : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

if (way === "left") {
  if (currentSlide > 0) {
    setCurrentSlide(currentSlide - 1);
  } else {
    setCurrentSlide(2);
  }
} else {
  if (currentSlide < data.length - 1) {
    setCurrentSlide(currentSlide + 1);
  } else {
    setCurrentSlide(0);
  }
}
