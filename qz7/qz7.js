function ajaxGet(rain){
    var motcData=[];
    $.ajax({ 
        type: 'GET',
        url: rain,
        dataType: 'json',
        headers: GetAuthorizationHeader(),
        success: res =>{
            $.each(res, function (i, item) {
                if (rain == "count"){
                    for(i=0; i<item.count; count++){
                        motcData.push({
                            "stationNo": item.count.length[i].stationNo,
                            "stationName": item.count.length[i].stationName,
                            "recTime": item.count.length[i].recName,
                            "rain": item.count.length[i].rain,
                        })
        
                        console.log(motcData);
                        
                var list=[];
                for(i=0; i<motcData.length; i++)
                {
                list.push(motcData[i].stationNo);
                }
                    
        document.getElementById("recTime").innerHTML = year + "年" + month + "月" + date+"號"+clock+"點"+min+"分";           
        $(document).ready(function ()
        {
            rain="xxx.json";
            ajaxGet(rain, "rain");
            console.log (ajaxGet(rain, "rain"));
        }
        
      