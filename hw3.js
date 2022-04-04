auto();
const log = document.getElementById('log3');
document.addEventListener("keypress",logKey);
function logKey(e){
    var autoText = document.getElementById('log4').innerHTML;
    console.log(e.keyCode);
    console.log(autoText[(autoText.length-1)].charCodeAt(0));
    if(e.keyCode == autoText[(autoText.length-1)].charCodeAt(0)){
        var str2 = autoText.substring(0, autoText.length - 1);
        var text = document.getElementById('log4');
        text.innerHTML=str2;
        console.log("suc");
    }     
}
setInterval(auto,2000);
function myAlert(min){
    var str =[];
    var range = min
    arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1))
        str += arr[pos]
    }
    return str;
}
function auto(){
    var autoText =document.getElementById('log4');
    autoText.innerHTML =  myAlert(5) + autoText.innerHTML;
}