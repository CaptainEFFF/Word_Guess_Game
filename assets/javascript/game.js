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

var name = names[Math.floor(Math.random() * names.length)];

console.log(name);

var guess = []

var lives = 12;

for (var i = 0; i < name.length; i++){
    guess[i] = "_";
}

console.log(guess);

var remainingLetter = name.length;

console.log(remainingLetter);

var userText = document.getElementById("user-text");
// while (remainingLetter > 0 && lives > 0){


    document.onkeyup = function(event) {
        userText.textContent = event.key;
      };


// }