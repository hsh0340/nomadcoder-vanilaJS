const form = document.querySelector(".js-form"); // 폼태그 따옴
const input = form.querySelector("input"); // 폼태그 안에 있는 인풋태그 따옴
const greeting = document.querySelector(".js-greetings") // 사용자 이름 뜰 태그 따옴

const USER_LS = "currentUser";
const SHOWING_CN = "showing"; 

function saveName(text) {
    localStorage.setItem(USER_LS, text) // currentUser 에 text 값 줌
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value; // 인풋 값을 변수에 저장
    paintGreeting(currentValue); // 인풋 값으로 화면 띄움
    saveName(currentValue); //
}

function askForName() {
    form.classList.add(SHOWING_CN);// form이 보이게해줌 
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) { //화면에 띄우는 함수
    greeting.classList.add(SHOWING_CN); // greeting이 보이게 해줌
    form.classList.remove(SHOWING_CN); // form이 안보이게 해줌
    greeting.innerText = `Hello ${text}`; 
    
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // key값이 currentUser인 value 가져와서 변수에 저장함 (seungha)
    if(currentUser === null){ // 만약 변수가 null 값 이면?
        askForName();// she is not 
    } else { // 변수에 값 담겨있으면?
        paintGreeting(currentUser); // 화면에 띄우기
    }
}

function init() {
    loadName();
}
init();