const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");  

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //web이 실행되자마자 보이도록 한번 호출
setInterval(getClock,1000);


