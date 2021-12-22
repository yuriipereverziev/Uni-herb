import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import bannerScroll from './modules/banner.js';
import reviews from './modules/reviews.js';
import footer from './modules/footer.js';

function main () {
  scrollSmooth();
  bannerScroll();
  reviews();
  footer();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  main();
};
