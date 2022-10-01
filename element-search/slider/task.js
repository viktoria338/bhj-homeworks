const sliderItem = Array.from(document.getElementsByClassName("slider__item"));
const sliderArrowPrev = document.querySelector("div.slider__arrow.slider__arrow_prev");
const sliderArrowNext = document.querySelector("div.slider__arrow.slider__arrow_next");
let counterSlider = 0;

sliderArrowNext.onclick = function() {
    counterSlider++
    if (counterSlider > sliderItem.length - 1) {
        counterSlider = 0;
        sliderItem[counterSlider].className = "slider__item slider__item_active";
        sliderItem[sliderItem.length - 1].className = "slider__item";
        return
    };
    sliderItem[counterSlider].className = "slider__item slider__item_active";
    sliderItem[counterSlider - 1].className = "slider__item";
}
sliderArrowPrev.onclick = function() {
    counterSlider--
    if (counterSlider < 0) {
        counterSlider = sliderItem.length - 1;
        sliderItem[counterSlider].className = "slider__item slider__item_active";
        sliderItem[0].className = "slider__item";
        return
    };
    sliderItem[counterSlider].className = "slider__item slider__item_active";
    sliderItem[counterSlider + 1].className = "slider__item";
}