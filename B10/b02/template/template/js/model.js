function renderTasks(tasks = []) {
    let content = '<tr>'

    tasks.forEach((tasks, index) => {
        content += `
        <tr>
        <td class="text-center">1</td>
        <td>${tasks.name}</td>
        <td class="text-center"><span class="label label-danger">High</span></td>
        <td>
            <button type="button" class="btn btn-warning" onclick="editTask(${index})">Edit</button>
            <button type="button" class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </td>
        </tr>`
    })

    content += '</tr>'
 
    document.querySelector('#result').innerHTML = content;
}

function getTaskFromLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

function editTask(id) {
    let tasks = getTaskFromLocalStorage()

    if (tasks.length > 0) {
        ELEMENT_INPUT_NAME.value = tasks[id].name 
        ELEMENT_SUBMIT_BUTTON.setAttribute('id', id)
    }
}

function deleteTask(id) {
    if (confirm('Bạn có muốn xóa ?')) {
        let tasks = getTaskFromLocalStorage()
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))

        renderTasks(getTaskFromLocalStorage())
    }
}