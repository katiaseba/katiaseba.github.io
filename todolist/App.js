const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
document.addEventListener("DOMContentLoaded", getTodos)

function addTodo(event) {
  event.preventDefault()
  //créer div
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  //créer li
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item")
  //mettre li dans la div
  todoDiv.appendChild(newTodo)

  //ajouter todo au locaclstorage
  saveTodos(todoInput.value)

  //button check
  const checkBtn = document.createElement("button")
  checkBtn.innerHTML = '<i class="fas fa-check"></i>'
  checkBtn.classList.add("check-btn")
  //button dans la div
  todoDiv.appendChild(checkBtn)

  //button supprimer
  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
  deleteBtn.classList.add("delete-btn")
  //button dans la div
  todoDiv.appendChild(deleteBtn)

  //ajouter div todo à todo-list
  todoList.appendChild(todoDiv)

  //reset input
  todoInput.value = ""
}

function deleteCheck(event) {
  const item = event.target
  //supprimer todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement
    removeLocalTodos(todo)
    todo.remove()
  }

  //check todo
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement
    todo.classList.toggle("completed")
  }
}

function saveTodos(todo) {
  let todos
  if (localStorage.getItem("todos") === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }
  todos.push(todo)
  localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
  let todos
  if (localStorage.getItem("todos") === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }

  todos.forEach(function(todo){
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  const newTodo = document.createElement("li")
  newTodo.innerText = todo
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)

  const checkBtn = document.createElement("button")
  checkBtn.innerHTML = '<i class="fas fa-check"></i>'
  checkBtn.classList.add("check-btn")
  todoDiv.appendChild(checkBtn)

  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
  deleteBtn.classList.add("delete-btn")
  todoDiv.appendChild(deleteBtn)

  todoList.appendChild(todoDiv)
  })
}

function removeLocalTodos(todo) {
  let todos
  if (localStorage.getItem("todos") === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }
  const todoIndex = todo.children[0].innerText
  todos.splice(todos.indexOf(todoIndex), 1)
  localStorage.setItem("todos", JSON.stringify(todos))
}