const faders = document.querySelectorAll('.loadIn');
const appearOptions = {
    threshold: 0.8
};

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