let timer = document.getElementById("timer");

function countDown() {
    let currentDate = new Date();
    let diff = finishDate - currentDate;
    let seconds = Math.floor((diff / 1000) % 60);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let hours = Math.floor((diff / 1000 / 60 / 60));
    timer.textContent = (hours < 10 ? `0${hours}` : hours) + " : " + (minutes < 10 ? `0${minutes}` : minutes) + " : " + (seconds < 10 ? `0${seconds}` : seconds);
    if (minutes == 0 && seconds == 0 && hours == 0) {
        alert("You are winner!")
        clearInterval(interval);
    }
    return
}

let interval = setInterval(function() {
    --timer.textContent
    if(timer.textContent == 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(interval)
    }
}, 1000);