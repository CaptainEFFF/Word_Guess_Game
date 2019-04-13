var names = [
    "mario",
    "luigi", 
    "peach", 
    "daisy",
    "bowser", 
    "rosalina",
    "samus",
    "ridley",
    "link", 
    "zelda", 
    "sheik",
    "ganondorf", 
    "kirby",
    "fox",
    "falco",
    "wolf",
    "yoshi",
    "pikachu",
    "pichu",
    "jigglypuff",
    "mewtwo",
    "lucario",
    "greninja",
    "incineroar",
    "ness",
    "lucas",
    "marth",
    "roy",
    "ike",
    "robin",
    "corrin",
    "lucina",
    "chrom",
    "pit",
    "palutena",
    "wario",
    "snake",
    "sonic",
    "olimar",
    "villager",
    "isabelle",
    "inkling",
    "bayonetta",
    "shulk",
    "ryu",
    "ken",
    "cloud",
    "simon",
    "richter",
    "donkey,kong",
    "ice,climbers",
    "young,link",
    "toon,link",
    "bowser,jr",
    "mega,man",
    "pac,man",
    "king,k,rool",
    "meta,knight",
    "dark,samus",
    "dark,pit",
    "duck,hunt",
    "little,mac",
    "dr,mario",
    "r,o,b",
    "pokemon,trainer",
    "cpt,falcon",
];

// array with nested objects to keep track of character icons
var icons = [
    {name: 'mario', image: 'assets/Character-Pictures/Mario.png'},
    {name: 'luigi', image: 'assets/Character-Pictures/Luigi.png'},
    {name: 'peach', image: 'assets/Character-Pictures/Peach.png'},
    {name: 'daisy', image: 'assets/Character-Pictures/daisy.png'},
    {name: 'bowser', image: 'assets/Character-Pictures/Bowser.png'},
    {name: 'rosalina', image: 'assets/Character-Pictures/rosalina.png'},
    {name: 'samus', image: 'assets/Character-Pictures/Samus.png'},
    {name: 'ridley', image: 'assets/Character-Pictures/ridley.png'},
    {name: 'link', image: 'assets/Character-Pictures/link.png'},
    {name: 'zelda', image: 'assets/Character-Pictures/Zelda.png'},
    {name: 'sheik', image: 'assets/Character-Pictures/sheik.png'},
    {name: 'ganondorf', image: 'assets/Character-Pictures/Ganondorf.png'},
    {name: 'kirby', image: 'assets/Character-Pictures/Kirby.png'},
    {name: 'fox', image: 'assets/Character-Pictures/starfox.png'},
    {name: 'falco', image: 'assets/Character-Pictures/falco.png'},
    {name: 'wolf', image: 'assets/Character-Pictures/wolf.png'},
    {name: 'yoshi', image: 'assets/Character-Pictures/yoshi.png'},
    {name: 'pikachu', image: 'assets/Character-Pictures/pikachu.png'},
    {name: 'pichu', image: 'assets/Character-Pictures/pichu.png'},
    {name: 'jigglypuff', image: 'assets/Character-Pictures/jigglypuff.png'},
    {name: 'mewtwo', image: 'assets/Character-Pictures/mewtwo.png'},
    {name: 'lucario', image: 'assets/Character-Pictures/lucario.png'},
    {name: 'greninja', image: 'assets/Character-Pictures/greninja.png'},
    {name: 'incineroar', image: 'assets/Character-Pictures/incineroar.png'},
    {name: 'ness', image: 'assets/Character-Pictures/ness.png'},
    {name: 'lucas', image: 'assets/Character-Pictures/lucas.png'},
    {name: 'marth', image: 'assets/Character-Pictures/marth.png'},
    {name: 'roy', image: 'assets/Character-Pictures/roy.png'},
    {name: 'ike', image: 'assets/Character-Pictures/ike.png'},
    {name: 'robin', image: 'assets/Character-Pictures/robin.png'},
    {name: 'corrin', image: 'assets/Character-Pictures/corrin.png'},
    {name: 'lucina', image: 'assets/Character-Pictures/lucina.png'},
    {name: 'chrom', image: 'assets/Character-Pictures/chrom.png'},
    {name: 'pit', image: 'assets/Character-Pictures/pit.png'},
    {name: 'palutena', image: 'assets/Character-Pictures/palutena.png'},
    {name: 'wario', image: 'assets/Character-Pictures/wario.png'},
    {name: 'snake', image: 'assets/Character-Pictures/snake.png'},
    {name: 'sonic', image: 'assets/Character-Pictures/sonic.png'},
    {name: 'olimar', image: 'assets/Character-Pictures/olimar.png'},
    {name: 'villager', image: 'assets/Character-Pictures/villager.png'},
    {name: 'isabelle', image: 'assets/Character-Pictures/isabelle.png'},
    {name: 'inkling', image: 'assets/Character-Pictures/inkling.png'},
    {name: 'bayonetta', image: 'assets/Character-Pictures/bayonetta.png'},
    {name: 'shulk', image: 'assets/Character-Pictures/shulk.png'},
    {name: 'ryu', image: 'assets/Character-Pictures/ryu.png'},
    {name: 'ken', image: 'assets/Character-Pictures/ken.png'},
    {name: 'cloud', image: 'assets/Character-Pictures/cloud.png'},
    {name: 'simon', image: 'assets/Character-Pictures/simon.png'},
    {name: 'richter', image: 'assets/Character-Pictures/richter.png'},
    {name: 'dokey,kong', image: 'assets/Character-Pictures/DK.png'},
    {name: 'ice,climbers', image: 'assets/Character-Pictures/iceclimbers.png'},
    {name: 'young,link', image: 'assets/Character-Pictures/younglink.png'},
    {name: 'toon,link', image: 'assets/Character-Pictures/toonlink.png'},
    {name: 'bowser,jr', image: 'assets/Character-Pictures/bowserjr.png'},
    {name: 'mega,man', image: 'assets/Character-Pictures/megaman.png'},
    {name: 'pac,man', image: 'assets/Character-Pictures/pacman.png'},
    {name: 'king,k,rool', image: 'assets/Character-Pictures/kkr.png'},
    {name: 'meta,knight', image: 'assets/Character-Pictures/metaknight.png'},
    {name: 'dark,samus', image: 'assets/Character-Pictures/darksamus.png'},
    {name: 'dark,pit', image: 'assets/Character-Pictures/darkpit.png'},
    {name: 'duck,hunt', image: 'assets/Character-Pictures/duckhunt.png'},
    {name: 'little,mac', image: 'assets/Character-Pictures/littlemac.png'},
    {name: 'dr,mario', image: 'assets/Character-Pictures/drmario.png'},
    {name: 'r,o,b', image: 'assets/Character-Pictures/rob.png'},
    {name: 'pokemon,trainer', image: 'assets/Character-Pictures/pokemon.png'},
    {name: 'cpt,falcon', image: 'assets/Character-Pictures/captain.png'},
    
]


// Had to ommit Diddy Kong, Mr.Game & Watch, Zero Suit Samus, Wii Fit Trainer, and King DeDeDe

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

document.getElementById("under-score").innerText = underScore.join(" ").toUpperCase();
document.getElementById("lives").innerText = "Lives: " + lives;


document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    
    if (rightGuess.includes(userGuess)||wrongGuess.includes(userGuess)){
        console.log("Already Guessed");
        
    }
    
    //  pushing correct guesses
    else if (rightAnswer.includes(userGuess)){
        x = fullName.indexOf(userGuess);
        underScore[x]=userGuess;
        y = fullName.lastIndexOf(userGuess);
        underScore[y]=userGuess;
        rightGuess.push(userGuess);
        counter++;
        document.getElementById("under-score").innerText = underScore.join(" ").toUpperCase();
        
        
        console.log("counter: "+counter);
        console.log(underScore);
    
        
        
    }
    // pushing wrong guesses
    else {
        
        wrongGuess.push(userGuess);
        lives = lives - 1;
        document.getElementById("lives").innerText = "Lives: " + lives;
        document.getElementById("wrong-guess").innerText = "Wrong Letters: " + wrongGuess;
        
    }
    
    // handler for mutli word answers
    if(rightGuess.includes(",")){
        console.log("Space already added");
    }
    
    else if(rightAnswer.includes(",")){
        x = fullName.indexOf(",");
        y = fullName.lastIndexOf(",");
        rightGuess.push(",");
        underScore[x]=",";
        underScore[y]=",";
        counter++;
       
    
    }
    
    console.log(lives);
    console.log("wrong " + wrongGuess);
    console.log("right " + rightGuess);
    
    // win conditon, also updates character icon
    if (counter === rightAnswer.length){
        console.log("You Win");
        var z = names.indexOf(name);
        console.log( "Name: " + name + " Index: " + z );
        document.getElementById("foe-icon").src = icons[z].image;
        alert("You Win!");
        
    }

    
    if (lives <= 0){
        console.log("You Lose")
        alert("You Lose");
    }
}
 



