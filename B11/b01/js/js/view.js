ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})


ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {

    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    let id = ELEMENT_INPUT_ID.value ? ELEMENT_INPUT_ID.value : makeid []
    // if(!ELEMENT_INPUT_ID.VALUE) {
    //    console.log('add')
    //    arrData.push({id,name,level}) 
    // }
    // else {
    //     console.log('edit')
    // }
    arrData.push({id,name,level})
    handleToggleForm(false)
    showData()
})

showData()