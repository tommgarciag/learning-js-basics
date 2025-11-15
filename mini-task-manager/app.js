// seleccion de elementos del DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// cargar tareas desde localStorege
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// render inicial
renderTasks();

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
    saveAndRender();
    taskInput.value = "";
}

// eliminar tarea
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
}

// alternar completada/no completada
function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveAndRender();
}

// guardar y renderizar tareas
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// render de la lista de tareas
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.text}</span>
      <button onclick="deleteTask(${task.id})">X</button>
    `;

    taskList.appendChild(li);
  });
}

// evento para el boton
addBtn.addEventListener("click", addTask);

// evento para Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
})

