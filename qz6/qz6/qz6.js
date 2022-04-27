setInterval(function(){
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById("timeoutId").innerHTML = hh + ":" + mm + ":" + ss;
  }, 1000);

  
  function checkTime(i){
    if (i < 10)
    {
      i = "0" + i;
    }
    return i;
  }