
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper(".marqueen", {
  allowTouchMove: true, 
  alidesPerView: 'auto',
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});