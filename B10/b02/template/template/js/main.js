ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    if (toggleForm) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = "CLOSE TASK"
    } else {
        ELEMENT_FORM_INPUT.setAttribute('hidden', true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#5bc0de'
        ELEMENT_FORM_BUTTON.innerHTML = "ADD TASK"
    }
    toggleForm = !toggleForm
})

let tasks = getTaskFromLocalStorage()

renderTasks(tasks)

ELEMENT_SUBMIT_BUTTON.addEventListener('click', function () {
    let taskId = this.getAttribute('id')
    let tasks  = getTaskFromLocalStorage()
    let task = { name: ELEMENT_INPUT_NAME.value }
    
    if (taskId == 0 || taskId) {
        tasks[taskId] = task
        this.removeAttribute('id')
    } else {
        tasks.push(task)
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    
    renderTasks(tasks)
})




