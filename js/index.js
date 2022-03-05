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