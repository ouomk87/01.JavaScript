//비주얼 스와이퍼
const visualSw = new Swiper(".visualswiper", {
  loop: true,

  //오토플레이
  autoplay: {
    delay: 1000, //1초
    disableOnInteraction: false, //클릭했을때 행동하는거 막아 놓을것
  },

  //페이징
  pagination: {
    el: ".swiper-pagination",
    //dynamicBullets: true, //dynamic 효과
    clickable: true, //클릭했을때 그대로 보이고 싶을때
  },
});

// productlist
const proSw = new Swiper(".proSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
});

