var seconds = 0;
var minutes = 0;
var hour = 0;
var interval

function twoDigits(digit) {
    if (digit < 10) {
        return('0'+ digit)
    } else {
        return (digit)
    }
}

function start() {
    watch()
    interval = setInterval(watch,10)
}

function pause() {
    clearInterval(interval)
}

function stopp() {
    clearInterval(interval)
    seconds = 0
    minutes = 0
    document.getElementById('clock').innerText = "00:00:00"
}

function watch() {
    seconds++
    if(seconds==60) {
        minutes++
        seconds=0
        if(minutes==60) {
            minutes=0
            hour++
        }
    }

    document.getElementById('clock').innerText = twoDigits(hour) + ":" + twoDigits(minutes) + ':' + twoDigits(seconds);
}