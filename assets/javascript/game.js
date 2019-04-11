var names = [
    "mario",
    "luigi", 
    "peach", 
    "bowser", 
    "link", 
    "zelda", 
    "ganondorf", 
    "kirby",
    "starfox",
    "samus",
    ["donkey","kong"]];

var wrongGuess = [];
var rightGuess = [];
var fullName = [];
var rightAnswer = [];
var userGuess = "";
var underScore = [];
var counter = 0;
var lives = 12;
var x ;
var y ;

// Random name selected
var name = [names[Math.floor(Math.random() * names.length)]];
console.log(name);

// Fill arrays for underscores and chosen name
for (var i = 0; i < name.length; i++){
    underScore[i] = "_";
    fullName.push(name.charAt(i));
}

// Truncates name to exclude duplicate letters
rightAnswer = [...new Set(fullName)];
  
console.log(underScore);
console.log(fullName);
console.log(rightAnswer);


document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    
    if (rightGuess.includes(userGuess)||wrongGuess.includes(userGuess)){
        console.log("Already Guessed");
    }
    
    
    else if (rightAnswer.includes(userGuess)){
        x = fullName.indexOf(userGuess);
        underScore[x]=userGuess;
        y = fullName.lastIndexOf(userGuess);
        underScore[y]=userGuess;
        rightGuess.push(userGuess);
        counter++;
        console.log(counter);
        console.log(underScore);
        // document.getElementById(under-score)
        
        
    }
    else {
        
        wrongGuess.push(userGuess);
        lives = lives - 1;
    }
    
    console.log(lives);
    console.log("wrong " + wrongGuess);
    console.log("right " + rightGuess);
   
    if (counter === rightAnswer.length){
        console.log("You Win");
    }

    if (lives <= 0){
        console.log("You Lose")
    }
}
 


// need to employ DOM methods to update html/css
// need to create html and css

