
function numberRandom() {
    return Math.ceil(Math.random()*25);
    
 }
function renderNumber() {
    let number= ''
    let length = 25
    for (let i = 1; i <= length; i++){
        number +=`
            <li> 
            <button ${numberSerect = '' ? false :  'onclick=setFocus(' + i +')' } id="n${i}"  class="number" >${i}</button> </li>`
    }
    return ELEMENT_FORM_NUMBER.innerHTML = number
}



function setFocus(clicked_id) {
    clickNum = ELEMENT_NUMBER[clicked_id - 1]
    if (n < 4) 
    {
        if (clicked_id < numberSerect ) {
            ELEMENT_SMALLER.removeAttribute('hidden')
            ELEMENT_SMALLER.innerHTML = `<div class="Wrong">Sai Rồi</div>
            <p> Số Của Bạn Nhỏ Hơn Số Bí Mật</p>`
            
    
        }
         else if (clicked_id > numberSerect) {
            ELEMENT_BIGGER .removeAttribute('hidden')
            ELEMENT_BIGGER.innerHTML = `<div class="Wrong">Sai Rồi</div>
            <p> Số Của Bạn Lớn Hơn Số Bí Mật</p>`

        }
         else if (clicked_id = numberSerect) {
            ELEMENT_HIDDEN_FOOTER.removeAttribute('hidden')
            ELEMENT_HIDDEN_FOOTER.innerHTML = `<div  class="footer">
                                                    <p >Chúc Mừng Bạn, Số Bí Mật Là</p>
                                                    <div class="end">${numberSerect}</div>
                                                </div>`                        
            $(document).ready(function () {
                $('.number').click(function () { 
                    $(this).css("background", "url('../Images/filters_expand.jpg')");
                });
            });
            
        }
        
        n++
    }

    
}
// $("#toggle").click(function() {
//     if (left.width() > 0) {
//         AnimateNav(left, right, 0);
//         $(this).css("background", "url('../Images/filters_expand.jpg')");
//     }
//     else {
//         AnimateNav(left, right, 170);
//         $(this).css("background", "url('../Images/filters_collapse.jpg')");
//     }
// });


