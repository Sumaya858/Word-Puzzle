// document.getElementById("h1").innerHTML = "Word Search Puzzle";
$(document).ready(function() {
$('body').append('<div class= "Unit"></div>');
$('Unit').each('')
})

// const unit = ['class room', 'good bye', 'snow man', 'break fast', 'hand some', 'sleep over', 'humpty dumpty', 'mid term', 'butter fly', 'skate board', 'good night', 'rain bow'];
// const wrong =['red'];



// let blockTewleve =false
// let blockSeven = false

// $('.block-1').mouseover(function(){
//     console.log("Mouse over the block")
//     $('.block-1').css({"background-color": "blue"})
//     $(".block-1").off("mouseleave");

   
var blockOne = false;
var blockTwo = false;

$(".block-1").click(function() {
    if (!blockTwo) {
      $(this).css("background-color", "grey");
      blockOne = true
  
      if (blockOne && blockTwo) {
        alert('Correct')}
  
    }
  })
  $(".block-2").click(function() {
    if (blockOne && !blockTwo ) {
      $(this).css("background-color", "grey")
      blockTwo = true
  
      if (blockOne && blockTwo) {
        alert('Correct')
      }
    }
  })

// -------------------------------------------------------------------------------------------------

var blockTwelve = false;
var blockSeven = false;

$(".block-12").click(function() {
  if (!blockSeven) {
    $(this).css("background-color", "grey");
    blockTwelve = true

    if (blockTwelve && blockSeven) {
      alert('Correct')}

  }
})
$(".block-7").click(function() {
  if (blockTwelve && !blockSeven ) {
    $(this).css("background-color", "grey")
    blockSeven = true

    if (blockTwelve && blockSeven) {
      alert('Correct')
    }
  }
})



// ------------------------------------------------------------------------
// $('.block-1').mouseleave(function(){
//     console.log("Mouse left the block");
//     $(".block-1").off("background-color", "blueviolet");
//     $(".block-1").off("mouseleave");

// })

// $(".block-1").mouseout(function(){
//     $(".block-1").css("background-color", "lightgray");
//     $(".block-1").css("background-color", "blueviolet");
//   });
 
 




// $(".block-2").click(function() {
//     $(".block-2").css("background-color", "grey");
//       $(".block-2").off("mouseclick");


      
//         // $(".unit").click(function() { 
//         //     $(".block-2").css("background-color", "grey");
//         //       $(".block-2").off("mouseclick");

//         //       if ("unit.hasClass(block2") {
//         //         clicked
//         //         alert("correct, moveon");

//         //       }
        
//             //   }) 
        
   
   
//    })

      

    
var blockThree = false;
var blockTwentyThree = false;

$(".block-3").click(function() {
  if (!blockTwentyThree) {
    $(this).css("background-color", "grey");
    blockThree = true

    if (blockThree && blockTwentyThree) {
      alert('Correct')}

  }
})


$(".block-23").click(function() {
  if (blockThree && !blockTwentyThree ) {
    $(this).css("background-color", "grey")
    blockTwentyThree = true

    if (blockThree && blockTwentyThree) {
      alert('Correct')
    }
  }
})

var blockFivteen = false;
var blockFour = false;

$(".block-15").click(function() {
  if (!blockFour) {
    $(this).css("background-color", "grey");
    blockFivteen = true

    if (blockFivteen && blockFour) {
      alert('Correct')}

  }
})


$(".block-4").click(function() {
  if (blockFivteen && !blockFour ) {
    $(this).css("background-color", "grey")
    blockFour = true

    if (blockFivteen && blockFour) {
      alert('Correct')
    }
}
})
    


var blockFive = false;
var blockSix = false;

$(".block-5").click(function() {
  if (!blockSix) {
    $(this).css("background-color", "grey");
    blockFive = true

    if (blockFive && blockSix) {
      alert('Correct')}

  }
})
$(".block-6").click(function() {
  if (blockFive && !blockSix ) {
    $(this).css("background-color", "grey")
    blockSix = true

    if (blockFive && blockSix) {
      alert('Correct')
    }
  }
})

var blockTwentyOne = false;
var blockEight = false;

$(".block-21").click(function() {
  if (!blockEight) {
    $(this).css("background-color", "grey");
    blockTwentyOne = true

    if (blockTwentyOne && blockEight) {
      alert('Correct')}

  }
})
$(".block-8").click(function() {
  if (blockTwentyOne && !blockEight ) {
    $(this).css("background-color", "grey")
    blockEight = true

    if (blockTwentyOne && blockEight) {
      alert('Correct')
    }
  }
})

var blockNine = false;
var blockEighteen = false;

$(".block-9").click(function() {
  if (!blockEighteen) {
    $(this).css("background-color", "grey");
    blockNine = true

    if (blockNine && blockEighteen) {
      alert('Correct')}

  }
})
$(".block-18").click(function() {
  if (blockNine && !blockEighteen ) {
    $(this).css("background-color", "grey")
    blockEighteen = true

    if (blockNine && blockEighteen) {
      alert('Correct')
    }
  }
})

var blockSixteen = false;
var blockTen = false;

$(".block-16").click(function() {
  if (!blockTen) {
    $(this).css("background-color", "grey");
    blockSixteen = true

    if (blockSixteen && blockTen) {
      alert('Correct')}

  }
})
$(".block-10").click(function() {
  if (blockSixteen && !blockTen ) {
    $(this).css("background-color", "grey")
    blockTen = true

    if (blockSixteen && blockTen) {
      alert('Correct')
    }
  }
})

var blockEleven = false;
var blockTwentyTwo = false;

$(".block-11").click(function() {
  if (!blockTwentyTwo) {
    $(this).css("background-color", "grey");
    blockEleven = true

    if (blockEleven && blockTwentyTwo) {
      alert('Correct')}

  }
})
$(".block-22").click(function() {
  if (blockEleven && !blockTwentyTwo ) {
    $(this).css("background-color", "grey")
    blockTwentyTwo = true

    if (blockEleven && blockTwentyTwo) {
      alert('Correct')
    }
  }
})

var blockThirteen = false;
var blockFourteen = false;

$(".block-13").click(function() {
  if (!blockFourteen) {
    $(this).css("background-color", "grey");
    blockThirteen = true

    if (blockThirteen && blockFourteen) {
      alert('Correct')}

  }
})
$(".block-14").click(function() {
  if (blockThirteen && !blockFourteen ) {
    $(this).css("background-color", "grey")
    blockFourteen = true

    if (blockThirteen && blockFourteen) {
      alert('Correct')
    }
  }
})

var blockSeventeen = false;
var blockTwentyFour = false;

$(".block-17").click(function() {
  if (!blockTwentyFour) {
    $(this).css("background-color", "grey");
    blockSeventeen = true

    if (blockSeventeen && blockTwentyFour) {
      alert('Correct')}

  }
})
$(".block-24").click(function() {
  if (blockSeventeen && !blockTwentyFour ) {
    $(this).css("background-color", "grey")
    blockTwentyFour = true

    if (blockSeventeen && blockTwentyFour) {
      alert('Correct')
    }
  }
})

var blockNineteen = false;
var blockTwenty = false;

$(".block-19").click(function() {
  if (!blockTwenty) {
    $(this).css("background-color", "grey");
    blockNineteen = true

    if (blockNineteen && blockTwenty) {
      alert('Correct')}

  }
})
$(".block-20").click(function() {
  if (blockNineteen && !blockTwenty ) {
    $(this).css("background-color", "grey")
    blockTwenty = true

    if (blockNineteen && blockTwenty) {
      alert('Correct')
    }
  }
})


$("img").click(function() {
  $('#myAudio')[0].play();
})

$("img").off(function() {
  $('#myAudio')[0].pause();
})



$('#Start').click(function(){
  $('#Start').start()
})











    
    // $(".block-5").click(function() {
    //     $(".block-5").css("background-color", "grey");
    //     $(".block-5").off("mouseclick");
    // })
    
    // $(".block-6").click(function() {
    //     $(".block-6").css("background-color", "grey");
    //     if ("some clicked after hand") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // $(".block-7").click(function() {
    //     $(this).css("background-color", "grey");
    //     $(".block-7").off("mouseclick");

    //     if ("dumpty clicked after humpty") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
         
    // })
    
    // $(".block-8").click(function() {
    //     $(".block-8").css("background-color", "grey");
    //     if ("board clicked after skate") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // $(".block-9").click(function() {
    //     $(".block-9").css("background-color", "grey");
    //     $(".block-9").off("mouseclick");
    // })
    
    // $(".block-10").click(function() {
    //     $(".block-10").css("background-color", "grey");
    //     if ("fast clicked after break") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }

        
    // })
    
    // $(".block-11").click(function() {
    //     $(".block-11").css("background-color", "grey");
    //     $(".block-11").off("mouseclick");
    // })
    
    // // $(".block-12").click(function() {
    // //     $(this).css("background-color", "grey");
        
        
    //     // if ($(".block-12").hasClass("clicked") && $(".block-7").hasClass("clicked")) {
    //     //     alert('Correct')
    //     //   } else {
    //     //     $(".block-12").addClass("clicked")
    //     //   }

    // // })
    
    
    // $(".block-13").click(function() {
    //     $(".block-13").css("background-color", "grey");
    // })
    
    // $(".block-14").click(function() {
    //     $(".block-14").css("background-color", "grey");
    //     if ("term clicked after mid") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // // $(".block-15").click(function() {
    // //     $(".block-15").css("background-color", "grey");
    // // })
    
    // $(".block-16").click(function() {
    //     $(".block-16").css("background-color", "grey");
    // })
    
    // $(".block-17").click(function() {
    //     $(".block-17").css("background-color", "grey");
    // })
    
    // $(".block-18").click(function() {
    //     $(".block-18").css("background-color", "grey");
    //     if ("man clicked after snow") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // $(".block-19").click(function() {
    //     $(".block-19").css("background-color", "grey");
    // })
    
    // $(".block-20").click(function() {
    //     $(".block-20").css("background-color", "grey");
    //     if ("bow clicked after rain") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // $(".block-21").click(function() {
    //     $(".block-21").css("background-color", "grey");
    // })
    
    // $(".block-22").click(function() {
    //     $(".block-22").css("background-color", "grey");
    //     if ("glasses clicked after sun") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })
    
    // // $(".block-23").click(function() {
    // //     $(".block-23").css("background-color", "grey");
    // //     // if ("over clicked after sleep") {

    // //     //     alert("correct, moveon");
    // //     //  } else {
    // //     //     alert("wrong");
    // //     //  }
    // // })
    
    // $(".block-24").click(function() {
    //     $(".block-24").css("background-color", "grey");
    //     if ("fly clicked after butter") {

    //         alert("correct, moveon");
    //      } else {
    //         alert("wrong");
    //      }
    // })