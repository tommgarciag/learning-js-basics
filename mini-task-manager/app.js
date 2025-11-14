// seleccion de elementos del DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// array de tareas
let tasks = [];

// funcion para agregar una tarea
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return; // evita tareas vacías

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
}

// render de la lista de tareas
function renderTasks() {
    taskList.innerHTML = ""

    tasks.forEach( task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>        
        `;

        taskList.appendChild(li);
    });
}

// To Do
function toggleTask() {}
function deleteTask() {}

// evento para el boton
addBtn.addEventListener("click", addTask);

// evento para Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
})

