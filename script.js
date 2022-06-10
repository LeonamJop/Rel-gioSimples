function clock() {
    var date = new Date();
    var hor = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();
    var session = "AM";

    if (hor == 0) {
        hor = 12;
    }
    if (hor > 12) {
        hor = hor - 12
        session = "PM"
    }
    if(hor < 10){
        hor = `0${hor}`;
    }
    if (min < 10) {
        min =  `0${min}`;
    }
    if(seg < 10){
        seg = `0${seg}`;
    }
    
    var hours = `${hor}:${min}:${seg}${session}`;

    document.getElementById("clock").innerHTML = hours;
}
var timer = setInterval(clock,1000);