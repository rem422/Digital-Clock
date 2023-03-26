const currentTime = () => {
    const el = document.querySelector('h1');

    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    time = `${hour}:${minutes}:${seconds}`;
    el.innerText = time;
}

currentTime();
setInterval(currentTime, 1000);