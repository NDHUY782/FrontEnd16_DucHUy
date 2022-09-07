ELEMENT_FORM_BUTTON.addEventListener('click', function() {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})
ELEMENT_FORM_SUBMIT.addEventListener('click', function() {
    console.log(ELEMENT_FORM_LEVEL.value)
    let name = ELEMENT_FORM_NAME.value 
    // let level = ELEMENT_FORM_LEVEL.value 
    //  console.log(name,level )
})

// btnAddTask.addEventListener('click', function () {
//     if (!taskName.value) {
//         alert('Vui Lòng Nhập')
//     }
//     let taskId = this.getAttribute('id')
//     let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
//     let task = { name:taskName.value }

//     if (taskId == 0 || taskId) {
//         tasks[taskId] = task
//         this.removeAttribute('id')
//     } else {tasks.push({name:taskName.value })}
//     // let tasks = []

//     taskName.value = ''

//     localStorage.setItem('tasks', JSON.stringify(tasks))

    
//     let select = document.getElementById('inputDs')
//     let text = select.options[select.selectedIndex].text
    

//     renderTasks(tasks)

// })