// let toggle = true;
// $(document).ready(function () {
//     $('#light').click(function (e) { 
//         e.preventDefault();
//         toggle ? $(this).css('color',"yellow") : $(this).css('color',"red");
//         toggle = !toggle
// })})


// When + or - buttons are clicked the font size of the h1 is increased/decreased by 1
// The max is set to 50px for this demo, the min is set by min font in the user's style sheet

function getSize() {
    size = $( "h1" ).css( "font-size" );
    size = parseInt(size, 10);
    $( "#font-size" ).text(  size  );
  }
  
  //lấy size
  getSize();
  
  $( "#up" ).on( "click", function() {
  
    // parse font size, if less than 50 increase font size
    if ((size + 1) <= 100) {
      $( "h1" ).css( "font-size", "+=1" );
      $( "#font-size" ).text(  size += 1 );
    }
  });
  
  $( "#down" ).on( "click", function() {
    if ((size - 1) >= 5) {
      $( "h1" ).css( "font-size", "-=1" );
      $( "#font-size" ).text(  size -= 1  );
    }
  });