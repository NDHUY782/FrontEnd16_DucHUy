const ELEMENT_START_BUTTON    = document.querySelector('.play-newgame')
const ELEMENT_RESET_BUTTON    = document.querySelector('.play-again')
const ELEMENT_NUMBER_BOX      = document.querySelector('.number-box')
const ELEMENT_NUMBER          = document.getElementsByClassName('number')

const ELEMENT_RESULT1         = document.querySelector('.score-result1')
const ELEMENT_RESULT4         = document.querySelector('.score-result4')

const ELEMENT_HEART1          = document.querySelector('.heart1')
const ELEMENT_HEART2          = document.querySelector('.heart2')
const ELEMENT_HEART3          = document.querySelector('.heart3')

const ELEMENT_RESULT          = document.querySelector('.score-awnser')

let numberSecrect             = ''
let n                         = 1
let arrData                   = []
let elementResult1            = ''
var toggle              = true