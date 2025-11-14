// seleccion de elementos del DOM
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

// array de tareas
let task = []

// funciones base (TO DO)
function addTask() {}
function renderTask() {}
function toggleTask() {}
function deleteTask() {}

// evento para el boton
addBtn.addEventListener("click", addTask)

// evento para Enter
taskList.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
})

