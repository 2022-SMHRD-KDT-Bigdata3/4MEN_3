// 뉴스 테이블 출력 하는 js 코드
let appendNumber = 600;
let prependNumber = 1;
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 크롤링 받아온 사진 갯수에 맞춰 이미지 갯수 출력해볼곳
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 500; i += 1) {
        slides.push('Slide ' + (i + 1));
      }
      return slides;
    })(),
  },
});










