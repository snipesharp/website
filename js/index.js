const faders = document.querySelectorAll('.loadIn');
const appearOptions = {
    threshold: 0.8
};
let showFeatures = false;
let featuresContainer = document.getElementById("featuresContainer");
let featuresTitle = document.getElementById("featuresTitle")

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.toggle('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    fader.classList.remove('noJs');
    appearOnScroll.observe(fader);
})

function toggleShowFeatures(event) {
    event.preventDefault();
    showFeatures = !showFeatures
    if (!showFeatures) {
        featuresTitle.textContent = "See Features"
        featuresContainer.style.animationName = "minimize"
    }
    else {
        featuresTitle.textContent = "Hide Features"
        featuresContainer.style.animationName = "unminimize"
    }
}
featuresContainer.classList.add("minimized")
featuresTitle.classList.remove("normalizeLink")
featuresTitle.textContent = "See Features"


function copyXmrDemented() {
    var r = document.createRange();
    r.selectNode(document.getElementById("xmrDemented"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
function copyBtcDemented() {
    var r = document.createRange();
    r.selectNode(document.getElementById("btcDemented"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
function copyXmrStiliyan() {
    var r = document.createRange();
    r.selectNode(document.getElementById("xmrStiliyan"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}