// taoj bieens
const ELEMENT_FORM_INPUT            = document.getElementById('formInput')
const ELEMENT_FORM_BUTTON           = document.getElementById('button_form')

const ELEMENT_FORM_SUBMIT_BUTTON    = document.getElementById('button_submit')
const ELEMENT_FORM_INPUT_NAME       = document.getElementById('input_name')
const ELEMENT_FORM_INPUT_LEVEL      = document.getElementById('input_level')
const ELEMENT_CONTENT               = document.getElementById('content-showData')
const ELEMENT_INPUT_HIDDEN          = document.getElementById('input_id')


let toggleFrom = true;


//create id
const makeId = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

let arrData = [
    {id : '123a', name : '1lorem123123123' , level : 'Small'},
    {id : '321', name : '2hajslaxkjcbzx,cb' , level : 'High'},
]