function getTimeRemaining(endtime) {

    //Hier wird die verbleibende Zeit ausgerechnet und als Konstanten in Tagen, Stunden, Minuten und Sekunden deklariert
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));


    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}


// Hier wird die Funktion um die Uhr zu initialisieren erstellt
function initializeClock(id, endtime) {

    //Die spans aus dem HTML werden selektiert und Konstanten zugewiesen
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');


    //Hier wird die Update Funktion der Uhr deklariert
    function updateClock() {
        const t = getTimeRemaining(endtime);

        //Die Spans werden überschrieben und es wird die übrige Zeit auf die Spans zugeteilt
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);


        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    // Die Update Funktion der Uhr wird hier aufgerufen
    updateClock();
    //Ein Interval wird deklariert damit sich die Uhr nur jede Sekunde updatet
    const timeinterval = setInterval(updateClock, 1000);
}

//Die Deadline kann man hier setzen in dem man die Tage anpasst und diese läuft runter bis sie auf 0 ist
const deadline = new Date(Date.parse(new Date()) + 150/* Tage */ * 24 * 60* 60 * 1000);

// Die Uhr wird hier initialisiert
initializeClock('timelist', deadline);
