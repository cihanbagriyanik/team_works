


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = "AM";
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + session;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

startTime()