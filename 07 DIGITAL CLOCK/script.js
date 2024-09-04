const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const mdm = document.querySelector('.mdm');

function clock() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    if(hours>12) {
        hours-=12;
        meridiam = 'PM'
    } else if(hours==0) {
        hours = '00';
        meridiam = 'AM'
    }

    hours = hours<10 ? '0'+hours : hours;
    minutes = minutes<10 ? '0'+minutes : minutes;
    seconds = seconds<10 ? '0'+seconds : seconds;

    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    mdm.innerHTML = meridiam;
}

setInterval(clock, 1000);