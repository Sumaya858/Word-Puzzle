$('body').append('<div class= "Unit"></div>');
$('Unit').each('')

$('.block-1').mouseover(function(){
    console.log("Mouse over the block")
    $('.block-1').css({"background-color": "blue"})
    $(".block-1").off("mouseleave");


    $(".block-1").click(function() {
    $(".block-1").css("background-color", "grey");
    $(".block-1").off("mouseleave");

    })
    
})
// $('.block-1').mouseleave(function(){
//     console.log("Mouse left the block");
//     $(".block-1").off("background-color", "blueviolet");
//     $(".block-1").off("mouseleave");

// })

$(".block-1").mouseout(function(){
    $(".block-1").css("background-color", "lightgray");
  });
 
 