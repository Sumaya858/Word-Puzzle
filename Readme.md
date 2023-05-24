# Word Search Puzzle

#### discription
The game based on a compound words for kids to learn. When the two correct words get choosed, the player got a score and then he move on untill the game finished. 

![pic of Proj](https://media.git.generalassemb.ly/user/49241/files/f9e3af8e-1f6f-4f89-962e-308dd8d7dc50)




#### How the game works

 There is a start button to start the game,the player click it first and then play. There is a restart button to reatart the game after finishing the round. Music button too if the player want to listen to it. 

#### Parts which need to be developed
On behalf of developing the game, more stages will be added with different words, shuffle the words for the same round, synonyms , antonyms ... etc
 The restart button need to be changed from reload the page to restart the game it self with a shuffle. Music option too add a mute and pause function to it.

#### Difficulties 
1. The if conditionals: I should put a condition inside a codition, so when I did it, it doesn't work. Then I change the words inside the block and replace it with the block number and still not working, then the block number into words. 
2. The pause function for the music and still it's not working.
3. A congrats alert it shown in a specific block when it's clicked.

### Favorites 
1. when the click buttons works inside the blocks.
2. When the color changed.
3. Clicking on the image button to play the music.

### The code of the blocks

`var blockSeventeen = false;
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
        alert('Correct      your score: '+count)
      gameStatus= true 
      
     
    }
`

### Techniqes Used
1.HTML, CSS, JavaScript and JQuery 
2. if conditions
3. Click buttons
4. Alert
5. Score



### File Frames

![File Frames2](https://media.git.generalassemb.ly/user/49241/files/c5246f80-8087-48ab-8513-002c24d91ee9)

### User Story

https://trello.com/b/xyXqIR7h/project-01

![user story](https://media.git.generalassemb.ly/user/49241/files/3798cac2-df9f-4e02-86bf-d21e36c41a6e)






