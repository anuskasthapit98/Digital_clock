
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mon = now.getMonth(),
        dnum = now.getDate(),
        year = now.getFullYear(),
        ho = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        per = "AM"

        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var ids = ['dayname','month','daynum','year','hour','minute','second','period'];
        var values = [week[dname],mon,dnum,year,ho,min,sec,per];
        for(var i = 0; i < ids.length ;i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}