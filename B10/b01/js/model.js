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

// function editTask(id) {
//     let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
//     if (tasks.length > 0) {
//         taskName.value = tasks[id].name
//         btnAddTask.setAttribute('id', id)
//     }
// }

// function deleteTask(id) {
//     if(confirm('Bạn có chắc chắn muốn xóa không?')){
//         let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
//         tasks.splice(id,1)
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//         renderTasks(tasks)
        
//     }
// }


// function renderTasks(tasks = []) {
//     let content = '<tr>'

//     tasks.forEach((task,index) => {
//         content += `<tr> <td class="text-center">1</td>
//         <td>${task.name}</td>
//         <td class="text-center"><span class="label label-danger">high</span></td>
// 		<td>
// 			<button type="button" class="btn btn-warning" onclick ="editTask(${index})">Edit</button>
// 			<button type="button" class="btn btn-danger" onclick ="deleteTask(${index})">Delete</button>
// 		</td>
//         </tr>`
//     })

//     content += '</tr>'

//     document.querySelector('#result').innerHTML = content
// }

// let getData = () => {
//     data.id = randomString(6);
//     nameTask =inputDs.value
//     let level;
//     if (inputDs.value == '0') {
//         level = 'Small';
//     } else if (inputDs.value == '1') {
//         level = 'Medium'
//         level.style.background = 'yellow'
//     } else {
//         level = 'High';
//     }
//     data.level = level;
//     renderTasks();
// }

// const makeid = (length) =>  {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

