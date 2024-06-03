//HTML element 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    paintGreeting(username);
}

//h1에 string 추가하는 부분은 계속 쓰이니 함수로 빼놓고
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

//로컬 스토리지에서 username 받아오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

//값이 없다면 form의 hidden class 지우고 값 입력되면 func 실행
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
//값이 있다면 h1에 로컬스토리지에 저장된 username 전달해주기
else{
    //show the greetings
    paintGreeting(savedUsername);
}
