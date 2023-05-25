// document.getElementById("h1").innerHTML = "Word Search Puzzle";



let count = 0
document.querySelector(".score").textContent= count;
let test = 0

// start();

//     $('.start').on('click', function(){
//         start();
//     })
const button = document.createElement('button')
button.innerText = 'start'
button.id = 'mainButton'
let gameStatus = false;

// const restartButton = document.createElement('button')
// restartButton.innerText = 'restart'
// restartButton.id = 'Button'
// let restartStatus = false
// document.body.appendChild(restartButton)
document.body.appendChild(button)

  $('body').append('<div class= "Unit"></div>');
  $('Unit').each('')

button.addEventListener('click', (event) => {
  console.log('clicked')
  if (event.type === true){
    gameStatus= true 
    console.log(gameStatus)
  }else {
    gameStatus=false
  }

  
  // restartButton.addEventListener('click', (event) => {
  // console.log('clicked here')
  // if (event.type === true){ 
  //   restartStatus = true
  //   console.log(restartStatus)
  // }else {
  //   restartStatus = false
  // }







// const unit = ['class','room','good','bye','snow','man','break','fast','hand','some','sleep', 'over', 'humpty', 'dumpty', 'mid', 'term', 'butter', 'fly', 'skate', 'board','good','night','rain','bow'];
// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24];



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
      gameStatus= true 
      restartStatus = true
      if (blockOne && blockTwo) {
        alert('Correct')
        gameStatus= true
        restartStatus = true }

        
  
    }
  })

  $(".block-2").click(function() {
    if (blockOne && !blockTwo ) {
      $(this).css("background-color", "grey")
      blockTwo = true
      gameStatus= true 
  
      if (blockOne && blockTwo) {
        count = count + 1
        test +=1       
         if(test==12){finished()}
        document.querySelector(".score").textContent= count;
        gameStatus= true 
    console.log(count)

   
        
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
    gameStatus= true 

    if (blockTwelve && blockSeven) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-7").click(function() {
  if (blockTwelve && !blockSeven ) {
    $(this).css("background-color", "grey")
    blockSeven = true
    gameStatus= true 

    if (blockTwelve && blockSeven) {
      count = count + 1
      test +=1       
       if(test==12){finished()}
      document.querySelector(".score").textContent= count;
      gameStatus= true 
    console.log(count)

    

    
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
    gameStatus= true 
    if (blockThree && blockTwentyThree) {
      alert('Correct')
      gameStatus= true }

  }
})


$(".block-23").click(function() {
  if (blockThree && !blockTwentyThree ) {
    $(this).css("background-color", "grey")
    blockTwentyThree = true
    gameStatus= true 
    if (blockThree && blockTwentyThree) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      
      gameStatus= true 
     
    console.log(count)

    
    
  
    }
  }
    
})

var blockFivteen = false;
var blockFour = false;

$(".block-15").click(function() {
  if (!blockFour) {
    $(this).css("background-color", "grey");
    blockFivteen = true
    gameStatus= true 

    if (blockFivteen && blockFour) {
      alert('Correct')
      gameStatus= true }

  }
})


$(".block-4").click(function() {
  if (blockFivteen && !blockFour ) {
    $(this).css("background-color", "grey")
    blockFour = true
    gameStatus= true 
    if (blockFivteen && blockFour) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
      // count = count + 1
    console.log(count)

   
    
    }
}

    
})
    


var blockFive = false;
var blockSix = false;

$(".block-5").click(function() {
  if (!blockSix) {
    $(this).css("background-color", "grey");
    blockFive = true
    gameStatus= true 

    if (blockFive && blockSix) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-6").click(function() {
  if (blockFive && !blockSix ) {
    $(this).css("background-color", "grey")
    blockSix = true
    gameStatus= true 

    if (blockFive && blockSix) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
      // count = count + 1
    console.log(count)

    

    
    }
  }
   
})

var blockTwentyOne = false;
var blockEight = false;

$(".block-21").click(function() {
  if (!blockEight) {
    $(this).css("background-color", "grey");
    blockTwentyOne = true
    gameStatus= true 

    if (blockTwentyOne && blockEight) {
      alert('Correct')
      gameStatus= true }

  }
})



$(".block-8").click(function() {
  if (blockTwentyOne && !blockEight ) {
    $(this).css("background-color", "grey")
    blockEight = true
    gameStatus= true 

    if (blockTwentyOne && blockEight) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
      // count = count + 1
    console.log(count)

    
    
    }
  }
  
})

var blockNine = false;
var blockEighteen = false;

$(".block-9").click(function() {
  if (!blockEighteen) {
    $(this).css("background-color", "grey");
    blockNine = true
    gameStatus= true 
    if (blockNine && blockEighteen) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-18").click(function() {
  if (blockNine && !blockEighteen ) {
    $(this).css("background-color", "grey")
    blockEighteen = true
    gameStatus= true 

    if (blockNine && blockEighteen) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
    console.log(count)

   
    
    }
  }
    
})

var blockSixteen = false;
var blockTen = false;

$(".block-16").click(function() {
  if (!blockTen) {
    $(this).css("background-color", "grey");
    blockSixteen = true
    gameStatus= true 

    if (blockSixteen && blockTen) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-10").click(function() {
  if (blockSixteen && !blockTen ) {
    $(this).css("background-color", "grey")
    blockTen = true
    gameStatus= true 

    if (blockSixteen && blockTen) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
      // count = count + 1
    console.log(count)
    
   

    }
  }
    
})

var blockEleven = false;
var blockTwentyTwo = false;

$(".block-11").click(function() {
  if (!blockTwentyTwo) {
    $(this).css("background-color", "grey");
    blockEleven = true
    gameStatus= true 
    if (blockEleven && blockTwentyTwo) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-22").click(function() {
  if (blockEleven && !blockTwentyTwo ) {
    $(this).css("background-color", "grey")
    blockTwentyTwo = true
    gameStatus= true 

    if (blockEleven && blockTwentyTwo) {
      count = count + 1
      test +=1
        if(test==12){finished()}
      document.querySelector(".score").textContent= count;   
         gameStatus= true 
      // count = count + 1
    console.log(count)
    
    
    }
  }
    
})

var blockThirteen = false;
var blockFourteen = false;

$(".block-13").click(function() {
  if (!blockFourteen) {
    $(this).css("background-color", "grey");
    blockThirteen = true
    gameStatus= true 

    if (blockThirteen && blockFourteen) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-14").click(function() {
  if (blockThirteen && !blockFourteen ) {
    $(this).css("background-color", "grey")
    blockFourteen = true
    gameStatus= true 
    if (blockThirteen && blockFourteen) {
      count = count + 1
      test +=1
        if(test==12){finished()}

        document.querySelector(".score").textContent= count;
      gameStatus= true 
      // count = count + 1
    console.log(count)

    
    
    }
  }
    
})

var blockSeventeen = false;
var blockTwentyFour = false;

$(".block-17").click(function() {
  if (!blockTwentyFour) {
    $(this).css("background-color", "grey");
    blockSeventeen = true
    gameStatus= true 

    if (blockSeventeen && blockTwentyFour) {
      alert('Correct')
      gameStatus= true 
      
    }

  }
})
$(".block-24").click(function() {
  if (blockSeventeen && !blockTwentyFour ) {
    $(this).css("background-color", "grey")
    blockTwentyFour = true
    gameStatus= true 

    if (blockSeventeen && blockTwentyFour) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 

      

      
      
     
    }
  }
 
    
})

var blockNineteen = false;
var blockTwenty = false;

$(".block-19").click(function() {
  if (!blockTwenty) {
    $(this).css("background-color", "grey");
    blockNineteen = true
    gameStatus= true 

    if (blockNineteen && blockTwenty) {
      alert('Correct')
      gameStatus= true }

  }
})
$(".block-20").click(function() {
  if (blockNineteen && !blockTwenty ) {
    $(this).css("background-color", "grey")
    blockTwenty = true
    gameStatus= true 

    if (blockNineteen && blockTwenty) {
      count = count + 1
      test +=1
        if(test==12){finished()}
        document.querySelector(".score").textContent= count;
      gameStatus= true 
    console.log(count)
    

    }
  
      
}

  
})


function finished(){
    document.body.style.background="url('https://media.tenor.com/JrY5vHW30h4AAAAC/congrats-congratulations.gif"
    alert('congrats')
  }


    

  

// function restart() {
//   gameStatus = false

// }

// $('.restart').click(function(){
//   restart();
//   console.log(restart)

// });

// function restart(){
//   Unit = 0;
// }


$("img").click(function() {
  $('#myAudio')[0].play();
})


// $("img").off(function() {
//   $('#myAudio')[0].pause();
// })

// $('img').click(function(){
  
//   $('img').html({"image": pause})
//   console.log("image.pause")
// })
})



// function myBlocks(){
//   location.reload();


// document.getElementsByClassName("block-1").value = "";
// document.getElementsByClassName("block-2").value = "";
// document.getElementsByClassName("block-3").value = "";
// document.getElementsByClassName("block-4").value = "";
// document.getElementsByClassName("block-5").value = "";
// document.getElementsByClassName("block-6").value = "";
// document.getElementsByClassName("block-7").value = "";
// document.getElementsByClassName("block-8").value = "";
// document.getElementsByClassName("block-9").value = "";
// document.getElementsByClassName("block-10").value = "";
// document.getElementsByClassName("block-11").value = "";
// document.getElementsByClassName("block-12").value = "";
// document.getElementsByClassName("block-13").value = "";
// document.getElementsByClassName("block-14").value = "";
// document.getElementsByClassName("block-15").value = "";
// document.getElementsByClassName("block-16").value = "";
// document.getElementsByClassName("block-17").value = "";
// document.getElementsByClassName("block-18").value = "";
// document.getElementsByClassName("block-19").value = "";
// document.getElementsByClassName("block-20").value = "";
// document.getElementsByClassName("block-21").value = "";
// document.getElementsByClassName("block-22").value = "";
// document.getElementsByClassName("block-23").value = "";
// document.getElementsByClassName("block-24").value = "";

// };

// })


// restart() {
//   let tokenElements = document.querySelectorAll('.token');
//   tokenElements.forEach(token => {
//     token.remove();
//   });
//   document.querySelector()
//   })
// }




// $('.Restart').click(function(){
//   $('#Restart').start()
// })
// var start = 0;
// $(document).ready(function() {
//     $('.button').click(function() {
//         start = 1;
//     });
// });
// if (start === 1) {
// var ready = prompt("ready").click;
// start = 0 
// } else {
  
// }









    
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