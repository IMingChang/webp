const log = document.getElementById('log3');
log.innerHTML ="test";
document.addEventListener("keypress",logKey);
function logKey(e) {
    console.log(e.keyCode);
    log.textContent+= String.fromCharCode(e.keyCode);
}