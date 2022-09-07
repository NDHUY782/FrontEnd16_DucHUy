// Create secret numbr
function secretNumber() {
    return Math.floor(1 + Math.random() * length);
}

// Render Number
function renderNumber() {
    var number = ''
    var length = 25
    for (var i = 1; i <= length; i++) {
        number += `<li>
        <button ${numberSecrect = '' ? false : 'onclick=setFocus(' + i + ')'} id="numberList${i}" class="number">${i}</button>
        </li>`
    }
    return ELEMENT_NUMBER_BOX.innerHTML = number
}

// Focus numberimage.png
var number = ''
function setFocus(clicked_number) {
    number = ELEMENT_NUMBER[clicked_number - 1]
    if (n <= 3) {
        if (clicked_number < numberSecrect) {
            number.style.backgroundColor = 'coral'
            ELEMENT_RESULT1.removeAttribute('hidden')
            elemetResult1 = ` <h5 class="result-heading">Sai rồi!</h5>
                            <p id="result1">${n}. Lần ${n} - Số ${number.innerText} của bạn nhỏ hơn số bí ẩn</p>`
            ELEMENT_HEART3.style.color = 'white'
            arrData.push({ item: elemetResult1 })
            console.log(arrData);
        } else if (clicked_number > numberSecrect) {
            number.style.backgroundColor = 'coral'
            ELEMENT_RESULT1.removeAttribute('hidden')
            elemetResult1 = `<h5 class="result-heading">Sai rồi!</h5>
                             <p id="result1">${n}. Lần ${n} - Số ${number.innerText} của bạn lớn hơn số bí ẩn</p>`
            ELEMENT_HEART3.style.color = 'white'
            arrData.push({ item: elemetResult1 })
        } else if (clicked_number == numberSecrect) {
            number.style.backgroundColor = 'coral'
            ELEMENT_RESULT.removeAttribute('hidden')
            ELEMENT_RESULT4.removeAttribute('hidden')
            ELEMENT_RESULT4.innerHTML = `<h5 class="result-heading green">Chính xác</h5>
                             <p id="result4">Chúc mừng bạn đã tìm ra con số bí mật!!!</p>`
            ELEMENT_RESULT.innerHTML = `<h3>Số bí ẩn</h3> <span class="score-awnser-number">${numberSecrect}</span>`
        }
        for (let k = 0; k < arrData.length; k++) {
            var arrItem = arrData[k].item
        }
        ELEMENT_RESULT1.innerHTML += arrItem
        n++
    }
}

// Toggle form
const toggleForm = (toggle) => {
    if (toggle) {
        numberSecrect = secretNumber()
    } else {
        if (number == '') {
            
        } else {
            n = 1
            ELEMENT_RESULT1.innerHTML = ''
            ELEMENT_RESULT.innerHTML = ''
            renderNumber()
            ELEMENT_START_BUTTON.textContent = 'NEW GAME'
        }
    }
}
