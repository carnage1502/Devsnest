const input = document.getElementById("msg");
const addBtn = document.getElementById("addBtn");
const del = document.querySelector(".del");
const todoList = document.querySelector(".content");

let i = 0;

addBtn.addEventListener("click", () => {
  if (input.value) {
    const newTodoDiv = document.createElement("div");
    newTodoDiv.classList.add("msgs");
    newTodoDiv.setAttribute("id", `d${i}`);
    i++;

    const newTodo = document.createElement("span");
    newTodo.classList.add("mainMsg");
    newTodo.innerHTML = input.value;

    const delBtn = document.createElement("button");
    delBtn.classList.add("del");

    const delIcon = document.createElement("i");
    delIcon.classList.add("fas");
    delIcon.classList.add("fa-trash");

    delBtn.appendChild(delIcon);
    newTodoDiv.appendChild(newTodo);
    newTodoDiv.appendChild(delBtn);
    todoList.appendChild(newTodoDiv);

    input.value = "";

    for (let j = 0; j < i; j++) {
      document.getElementById(`d${j}`).addEventListener("click", () => {
        document.getElementById(`d${j}`).style.display = "none";
      });
    }
  } else {
    alert("Write a message first!");
  }
});