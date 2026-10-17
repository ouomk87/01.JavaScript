//defer 대신 쓸수 있음
window.addEventListener("load", () => {
  //console.log("hi");
  //잘 연결됐는지 확인!!

  const open = document.querySelector("#open");
  const detail = document.querySelector("#detail");
  const closeBtn = document.querySelector("#close");

  //console.log(open);
  open.addEventListener("click", () => {
    detail.style.display = "block";
    open.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    detail.style.display = "none";
    open.style.display = "block";
  });
});
//이걸쓰면 {}안에 작업해야 함!!
