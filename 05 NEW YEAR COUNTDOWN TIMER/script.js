const yearSpan = document.querySelector(".year");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

var nextYear = new Date().getFullYear() + 1;
var newYear = new Date(`January 1 ${nextYear} 00:00:00`);

yearSpan.innerHTML = nextYear;

function UpdateTime() {

    const currentDate = new Date();
    const difference = newYear - currentDate;
    const d = Math.floor(difference/1000/60/60/24);
    const h = Math.floor((difference/1000/60/60)%24);
    const m = Math.floor((difference/1000/60)%60);
    const s = Math.floor((difference/1000)%60);
  
    days.innerHTML = d<10 ? "0" + d : d;
    hours.innerHTML = h<10 ? "0" + h : h;
    minutes.innerHTML = m<10 ? "0" + m : m;
    seconds.innerHTML = s<10 ? "0" + s : s;

  }

setInterval(UpdateTime, 1000);