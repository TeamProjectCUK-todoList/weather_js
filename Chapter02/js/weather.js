const API_KEY = "00e402a729853e0147ec626cf3f2a7ed";

function onGeoOk(pos){
    const lat = pos.coords.latitude;    //위도
    const lon = pos.coords.longitude;  //경도
    //해당 주소에 위도,경도 값을 넣어주면 내 위치의 날씨를 알려줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch() 자바스크립트가 자동으로 그 url에 접속해줌 고로 저 주소 안에
    //정보들을 자바스크립트로 가져올수 있겠지 
    //아래가 해당 url에서 정보 가져오는 법
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });  
}

function onGeoError(){
    alert("Can't find you. No weather for you..ㅠ");
}

//현재 위치 받아오는 API
//매개변수 두개: 하나는 문제 없을때 실행될 함수, 두번째는 문제 있을때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);