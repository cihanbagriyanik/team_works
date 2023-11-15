


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = "AM";


    // eğer saat 0'a eşitse, 12'ye dönüştürür. Ardından yine eğer saat 12'den büyükse, saatten 12 çıkarılır ve 'session' değişkenini "PM" olarak ayarladim.
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    // h = checkTime(h);
    // m = checkTime(m);
    // s = checkTime(s);
    //! padStart ile iki basamkli olmasini istiyoruz degilse basina koymak istedigimiz rakami belirliyoruz
    h = h.toString().padStart(2, "0");
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");

    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + session;

    // her 1 saniyede bir kendini tekrarlamasını sağladim, böylece saati her saniye güncelliyorum
    // setTimeout(startTime, 1000);
}

// startTime()


// Bu fonksiyon ile verilen değerin 10'dan küçük olup olmadığını kontrol ediyorum ve gerektiğinde başına sıfır ekliyorum
// function checkTime(i) {
//     if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
//     return i;
// }


setInterval(startTime, 1000)
