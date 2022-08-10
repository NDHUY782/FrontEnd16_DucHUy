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