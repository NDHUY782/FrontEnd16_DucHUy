
const ELEMENT_BOX = document.getElementsByClassName('box')

// console.log(maxHeight)
// for (let i = 0; i < ELEMENT_BOX.length; i++) {
//   console.log(ELEMENT_BOX[i].offsetHeight);
  
// }


let maxHeight =0;
for (let i = 0; i < ELEMENT_BOX.length; i++) {
  let number = (ELEMENT_BOX[i].offsetHeight)
  if (maxHeight < number) {
    maxHeight = number;
  }
  else {maxHeight = maxHeight}
  
}
console.log(maxHeight)
for (let j = 0; j < ELEMENT_BOX.length; j++) {
  ELEMENT_BOX[j].style.height = maxHeight+'px';
  let color = j%2 ==0 ? 'red':'yellow';
  ELEMENT_BOX[j].style.backgroundColor = color;
  // if (j % 2 === 0) {
  //   ELEMENT_BOX[j].style.backgroundColor='red'
    
  // }
  // else {
  //   ELEMENT_BOX[j].style.backgroundColor='yellow'
  // }
  
}
