ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {

    let id      = ELEMENT_INPUT_HIDDEN.value ? ELEMENT_INPUT_HIDDEN.value : makeId(20)
    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    let item    = {id,name,level}
     if (!name.trim()) {
        alert('vui long nhap')
     }
    else {
        return true
    }
    
    
    !ELEMENT_INPUT_HIDDEN.value ? addItem(item) : editItem(item)

    handleToggleForm(false)
    showData()
})
arrData = getItemLocal()
showData()


