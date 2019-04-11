var names = [
    "mario",
    "luigi", 
    "peach", 
    "bowser", 
    "link", 
    "zelda", 
    "ganon", 
    "kirby",
    "starfox",
    ["captain","falcon"],
    ["donkey","kong"]];

var wrongGuess = [];
var rightGuess = [];
var rightAnswer = [];
var userGuess = "";
var underScore = []
var lives = 12;
var name = [names[Math.floor(Math.random() * names.length)]];
console.log(name);

for (var i = 0; i < name.length; i++){
    underScore[i] = "_";
    rightAnswer.push(name.charAt(i));
}
console.log(underScore);
console.log(rightAnswer);

document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
//     for(var j = 0; j< rightAnswer.length; j++){
    
//         if (rightAnswer[j] === userGuess){
//         rightGuess.push(rightAnswer[j]);
//     }
// }
    
    
    for(var j = 0; j< rightAnswer.length; j++)
    {
        
        if(rightAnswer[j] === userGuess)
        {
          rightGuess.push(rightAnswer[j]);
          
        }
        
        else if (wrongGuess.includes(userGuess)){
           break;
        }
        else if (rightAnswer[j] !== userGuess)
        {
        wrongGuess.push(userGuess);
        }
    lives = lives - 1;
    // wrongGuess.push(userGuess);
    console.log(lives);
    console.log("wrong " + wrongGuess);
    console.log("right " + rightGuess);
    };
    

 


}