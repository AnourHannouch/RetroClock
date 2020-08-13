function clock() {
    //def variables
    var today = new Date();
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    mm = (mm < 10 ? "0" : "") + mm;
    var dd = today.getDate();
    dd = (dd < 10 ? "0" : "") + dd;

    var hh = today.getHours();
    hh = (hh < 10 ? "0" : "") + hh;
    var mi = today.getMinutes();
    mi = (mi < 10 ? "0" : "") + mi;
    var ss = today.getSeconds();
    ss = (ss < 10 ? "0" : "") + ss;


    var date = yy+"."+mm+"."+dd;
    var time = hh+":"+mi+":"+ss;

    document.getElementById("timeID").innerHTML = time;
    document.getElementById("dateID").innerHTML = date;

    setTimeout(clock,1000);
}

clock();