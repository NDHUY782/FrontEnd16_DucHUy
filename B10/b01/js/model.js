const handleToggleForm =(open = true) => {
    // console.log(toggleFrom)
    if (toggleFrom) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor='red'
        ELEMENT_FORM_BUTTON.innerHTML ='Close Task'
    }
    else {
        ELEMENT_FORM_INPUT.setAttribute('hidden', false)
        ELEMENT_FORM_BUTTON.style.backgroundColor='#31b0d5'
        ELEMENT_FORM_BUTTON.innerHTML ='Add Task'
    }
}

btnAddTask.addEventListener('click', function () {
    if (!taskName.value) {
        alert('Vui Lòng Nhập')
    }
    let taskId = this.getAttribute('id')
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    let task = {name:taskName.value}

    if (taskId == 0 || taskId) {
        tasks[taskId] = task
        this.removeAttribute('id')
    } else {tasks.push({name:taskName.value })}
    // let tasks = []

    taskName.value = ''

    localStorage.setItem('tasks', JSON.stringify(tasks))

    
    let select = document.getElementById('inputDs')
    let text = select.options[select.selectedIndex].text
    

    renderTasks(tasks)

})  

function editTask(id) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    if (tasks.length > 0) {
        taskName.value = tasks[id].name
        btnAddTask.setAttribute('id', id)
    }
}

function deleteTask(id) {
    if(confirm('Bạn có chắc chắn muốn xóa không?')){
        let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
        tasks.splice(id,1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks(tasks)
        
    }
}


function renderTasks(tasks = []) {
    let content = '<tr>'

    tasks.forEach((task,index) => {
        content += `<td> <td class="text-center">1</td>
        <td>${task.name}</td>
        <td class="text-center"><span class="label label-danger">High</span></td>
		<td>
			<button type="button" class="btn btn-warning" onclick ="editTask(${index})">Edit</button>
			<button type="button" class="btn btn-danger" onclick ="deleteTask(${index})">Delete</button>
		</td>
        </td>`
    })

    content += '</tr>'

    document.querySelector('#result').innerHTML = content
}
