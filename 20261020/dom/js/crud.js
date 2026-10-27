// html  요소 가져오기

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const count = document.querySelector("#count");
//할일 데이터를 저장하는 배열
let tasks = [
  {
    id: 1,
    text: "HTML 공부하기",
    done: false,
  },
  {
    id: 2,
    text: "CSS 공부하기",
    done: false,
  },
];
//다음에 사용할 id 번호
let nextId = 3;
// R - 목록 출력(read)
function renderTasks() {
  //  console.log("read");
  // 기존 화면을 비우기(초기화)
  taskList.innerHTML = ""; //초기화
  //배열의 데이터를 하나씩 화면에 추력
  tasks.forEach((task) => {
    //console.log(task);
    const liE = document.createElement("li");
    //console.log(li);
    //할일 내용
    const spanE = document.createElement("span");
    spanE.className = "task-text";
    spanE.textContent = task.text; //task의 text 내용을 넣겠다!
    console.log(spanE);
    //완료 여부에 따라 클래스 추가
    if (task.done) {
      spanE.classList.add("done");
    }
    //완료 체크 버튼
    const checkBtn = document.createElement("button");
    console.log(checkBtn);
    //삼항연산자
    checkBtn.textContent = task.done ? "완료취소" : "완료 ";
    //완료 체크 버튼 클릭시 함수
    checkBtn.addEventListener("click", () => {
      task.done = !task.done; //부정기호 ! :반대로 하겠다
      //console.log(task.done);
      //화면 출력 함수 재사용중
      renderTasks();
    });
    //수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit-btn";
    console.log(editBtn);
    //수정버튼 클릭시 함수
    editBtn.addEventListener("click", () => {
      const nextText = prompt("수정할 내용을 입력하세요.", task.text);
      console.log(nextText);
      //task.text = nextText;
      if (nextText !== null && nextText.trim() !== "") {
        //null없다면 ->!있으면  빈공간이 아니면
        task.text = nextText;
      }
      renderTasks(); //화면에 출력하기
    });

    //삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    console.log(deleteBtn);
    //삭제버튼 클릭시 함수
    deleteBtn.addEventListener("click", () => {
      const ok = confirm("정말 삭제할까요?");
      console.log(ok);

      if (ok) {
        tasks = tasks.filter((item) => {
          //필터링 필터해서 담겠다.
          //console.log(item);
          //현재 삭제하려는 할일을 제외하고 나머지만 남기기 filter를 써서
          //return - 결과를 돌려주는 기능
          return item.id !== task.id; // item.id->내가 삭제한 id
        }); //item.id !== task.id; -> return을 써서 돌려내라
        renderTasks();
      }
    });

    //버튼 담을 영역
    const actions = document.createElement("div");
    console.log(actions);
    actions.className = "actions";
    actions.append(checkBtn, editBtn, deleteBtn);

    //목록에 내용과 버튼 넣기
    liE.append(spanE, actions);
    console.log(liE);
    taskList.append(liE);
  });
  //전체 개수와 완료 개수
  //filter에는 ()=>{}써야함
  const doneCount = tasks.filter((task) => {
    //console.log(task);
    return task.done;
  }).length; //false나 frue의 갯수를 체크함
  console.log(doneCount);
  count.textContent = `전체 ${tasks.length}개 / 완료 ${doneCount}개`;
}
//c - 새 할일 추가 (create)
taskForm.addEventListener("submit", (e) => {
  //foem 제출시 페이지가 새로고침 되는 기능을 방지 preventDefault
  e.preventDefault(); //번쩍이는 거 막기
  const text = taskInput.value.trim(); //trim 공백을 제거하는 메서드
  console.log(text);
  //빈내용은 등록하지 않음
  //trim가 없으면 밑에 if가 잘 실행하지 못한다.
  if (text === "") {
    alert("할 일을 입력하세요.");
    return; // 여기왔으면 종료하는 기능->값을 지정하지말고 끝내라~~
    //return 을 넣지않으면 renderTasks출력이 되어버림
  }
  //배열에 새 객체 추가 -> let tasks안에 추가
  tasks.push({
    id: nextId, // 3번 추가
    text: text, // 변수 text
    done: false,
  });
  console.log(tasks);
  nextId++; //id값이 추가됨
  //입력창 지우기
  taskInput.value = ""; //버튼 누르면 input박스에 내용 사라짐
  //변경된 배열을 화면에 출력
  //화면 출력 함수 재사용중
  renderTasks();
});

// 처음화면 출력

renderTasks();
