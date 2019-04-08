import tracker from './tracker'
import ScrollTrigger from './scrollTrigger'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

var isAndroidApp = (window.location.origin === "file://" && /(android)/i.test(navigator.userAgent) ) ? true : false;

// init jump bar
var jumpLinks = document.querySelectorAll('[data-jump-to]'), i;
for (i = 0; i < jumpLinks.length; ++i) {
    var jumpLink = jumpLinks[i];
    jumpLink.addEventListener("click", function(e){
        e.preventDefault();
        var jumpTarget = this.getAttribute('data-jump-to');
        var jumpDiv = document.querySelector('[id="'+jumpTarget+'"]');
        scrollTo(jumpDiv)
    },false);
}

function scrollTo(element) {

    setTimeout(function() {

        var elementTop = window.pageYOffset + element.getBoundingClientRect().top

        window.scroll({
          top: elementTop,
          behavior: "smooth"
        });

    }, 400);

}

// scrollTrigger
var trigger = new ScrollTrigger({
    offset: { x: -50, y: 50 }
});
