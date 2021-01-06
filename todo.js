const toDoForm = document.querySelector(".js-toDoForm") // 할일 입력하는 폼태그
const toDoInput = toDoForm.querySelector("input"); // 그 밑에있는 인풋태그
const toDoList = document.querySelector(".js-toDoList"); // 할일 뜨는 ul태그

const TODOS_LS = 'toDos';
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) { //할일 목록 띄우는 함수
    const li = document.createElement("li"); // li태그 생성하는 변수
    const delBtn = document.createElement("button"); // 버튼 생성하는 변수
    delBtn.innerHTML="❌"; // 버튼에 뜨게 할 문구
    const span = document.createElement("span"); // span태그 생성하는 변수
    const newId = toDos.length + 1;
    span.innerText = text; // span태그에 들어갈 문구
    li.appendChild(delBtn); // li태그 자식으로 button 추가
    li.appendChild(span); // li태그 자식으로 span태그 추가
    li.id = newId;
    toDoList.appendChild(li); //ul태그 자식으로 li 태그 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault(); // 새로고침 초기화 방지
    const currentValue = toDoInput.value; // 인풋태그의 값을 변수에 집어넣음
    paintToDo(currentValue); // currentValue 띄움
    toDoInput.value=""; // 인풋태그 빈칸으로 만들어줌
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //로컬스토리지에서 가져옴
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit) // 폼태그 submit 하면 handlesumit 동작
}

init();