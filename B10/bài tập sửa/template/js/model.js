const handleToggleForm = (open = true) => {
    if(open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    }else {
        ELEMENT_FORM_INPUT.setAttribute('hidden' , true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK'
    }
}
// Show Data
const showData = () => {
    let xhtml = '';
    arrData.forEach((item , index) => {
        xhtml += ` <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center"><span class="label label-danger">High</span></td>
            <td>
                <button type="button" class="btn btn-warning" onclick ="editItem('${item.id}')">Edit</button>
                
                
                <button type="button" class="btn btn-danger" onclick ="deleteItem('${item.id}')">Delete</button>
            </td>
        </tr>`
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}

//add
const addItem = (item) => {
    arrData.push(item)
}

//-------------------Delete---------------
// const deleteItem = (id) => {
//         if (confirm('Bạn có muốn xóa ?')) {
//             let idItem = arrData.find(item => item.id == id)// in ra object
//             let index  =arrData.indexOf(idItem)//lấy vị trí ofject
//             arrData.splice(index,1)//xóa 
//             showData()
//         }
//     }
//----------------Delete cách 2------------
    const deleteItem = (id) => {
        if (confirm('Bạn có muốn xóa ?')) {
            arrData = arrData.filter(item => item.id != id)//xóa 
            showData()
        }
    }
//-------------Edit------ 
// function editItem(id) {// nhận giá trị id vì truyền phía $ là id
//     let item = getItemById(id)
//     handleToggleForm(true)
//     showItemInform(item)

const editItem = (item) => {
    arrData = arrData.map(i => {
        return i.id == item.id ? item : i 
    })
    setItemLocal()
    showItemInform()    
    showData()
}


const showItemInform  = (item) => {
    handleToggleForm(true)
    ELEMENT_FORM_INPUT_NAME.value   = item.name
    ELEMENT_INPUT_HIDDEN.value      = item.id
    ELEMENT_FORM_INPUT.value        = item.level
}


//ResetForm
const resetForm = () => {
    ELEMENT_FORM_INPUT_NAME.value = ''
    ELEMENT_FORM_INPUT_LEVEL.value ='Small'
    ELEMENT_INPUT_HIDDEN.value = ''
}
//get Local

const getItemLocal = () => {
    let items = JSON.parse(localStorage.getItem('keyItem'))
    items = items ? items : []
    return items
    
}

//set local
const setItemLocal = () => {
    localStorage.setItem("keyItem",JSON.stringify(arrData))
}