import tracker from './tracker'
import ScrollTrigger from './scrollTrigger'
import smoothscroll from 'smoothscroll-polyfill';
import share from './share'
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

let social = {

    title : "Who should I vote for? Policy guide to the 2019 Australian election",

    url : "https://www.theguardian.com/australia-news/ng-interactive/2019/apr/10/who-should-i-vote-for-policy-guide-to-the-2019-australian-election",

    fbImg : null,

    twImg : null,

    twHash : "#auspol",

    message : "We compare and analyse policies of the major political parties around tax, climate change, industrial relations, education, health, immigration, and foreign affairs"

};

var sharestuff = document.querySelectorAll('.sharible')

for (var i = 0; i < sharestuff.length; i++) {
    sharestuff[i].addEventListener("click", function(e){
        e.preventDefault();
        var platform = this.getAttribute('data-source');
        console.log(platform)
        let shared = share(social.title, social.url, social.fbImg, social.twImg, social.twHash, social.message);
        
        shared(platform);

    });
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
