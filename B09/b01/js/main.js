
// function myFunction() {
//     console.log(1)
// }
/* **********Onclick_If Else********** */
const ELEMENT_BOX = document.getElementById('box_black');
let clickBox=false;

 
ELEMENT_BOX.addEventListener("click", function () {
    console.log(clickBox)
    clickBox ? ELEMENT_BOX.style.backgroundColor='black': ELEMENT_BOX.style.backgroundColor='blue'
    clickBox = !clickBox;
});
