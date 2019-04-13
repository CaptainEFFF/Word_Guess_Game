// array with nested objects to keep track of character icons
var icons = [
    {name: 'mario', image: 'assets/Character-Pictures/Mario.png', audio: 'assets/sounds/Mario.wav'},
    {name: 'luigi', image: 'assets/Character-Pictures/Luigi.png', audio: 'assets/sounds/Luigi.wav'},
    {name: 'peach', image: 'assets/Character-Pictures/Peach.png', audio: 'assets/sounds/Peach.wav'},
    {name: 'daisy', image: 'assets/Character-Pictures/daisy.png', audio: 'assets/sounds/Daisy.wav'},
    {name: 'bowser', image: 'assets/Character-Pictures/Bowser.png', audio: 'assets/sounds/Bowser.wav'},
    {name: 'rosalina', image: 'assets/Character-Pictures/rosalina.png', audio: 'assets/sounds/Rosalina.wav'},
    {name: 'samus', image: 'assets/Character-Pictures/Samus.png', audio: 'assets/sounds/Samus.wav'},
    {name: 'ridley', image: 'assets/Character-Pictures/ridley.png', audio: 'assets/sounds/Ridley.wav'},
    {name: 'link', image: 'assets/Character-Pictures/link.png', audio: 'assets/sounds/Link.wav'},
    {name: 'zelda', image: 'assets/Character-Pictures/Zelda.png', audio: 'assets/sounds/Zelda.wav'},
    {name: 'sheik', image: 'assets/Character-Pictures/sheik.png', audio: 'assets/sounds/Sheik.wav'},
    {name: 'ganondorf', image: 'assets/Character-Pictures/Ganondorf.png', audio: 'assets/sounds/Ganon.wav'},
    {name: 'kirby', image: 'assets/Character-Pictures/Kirby.png', audio: 'assets/sounds/Kirby.wav'},
    {name: 'fox', image: 'assets/Character-Pictures/starfox.png', audio: 'assets/sounds/Fox.wav'},
    {name: 'falco', image: 'assets/Character-Pictures/falco.png', audio: 'assets/sounds/Falco.wav'},
    {name: 'wolf', image: 'assets/Character-Pictures/wolf.png', audio: 'assets/sounds/Wolf.wav'},
    {name: 'yoshi', image: 'assets/Character-Pictures/yoshi.png', audio: 'assets/sounds/Yoshi.wav'},
    {name: 'pikachu', image: 'assets/Character-Pictures/pikachu.png', audio: 'assets/sounds/Pikachu.wav'},
    {name: 'pichu', image: 'assets/Character-Pictures/pichu.png', audio: 'assets/sounds/Pichu.wav'},
    {name: 'jigglypuff', image: 'assets/Character-Pictures/jigglypuff.png', audio: 'assets/sounds/Jigglypuff.wav'},
    {name: 'mewtwo', image: 'assets/Character-Pictures/mewtwo.png', audio: 'assets/sounds/Mewtwo.wav'},
    {name: 'lucario', image: 'assets/Character-Pictures/lucario.png', audio: 'assets/sounds/Lucario.wav'},
    {name: 'greninja', image: 'assets/Character-Pictures/greninja.png', audio: 'assets/sounds/Greninja.wav'},
    {name: 'incineroar', image: 'assets/Character-Pictures/incineroar.png', audio: 'assets/sounds/Incineroar.wav'},
    {name: 'ness', image: 'assets/Character-Pictures/ness.png', audio: 'assets/sounds/Ness.wav'},
    {name: 'lucas', image: 'assets/Character-Pictures/lucas.png', audio: 'assets/sounds/Lucas.wav'},
    {name: 'marth', image: 'assets/Character-Pictures/marth.png', audio: 'assets/sounds/Marth.wav'},
    {name: 'roy', image: 'assets/Character-Pictures/roy.png', audio: 'assets/sounds/Roy.wav'},
    {name: 'ike', image: 'assets/Character-Pictures/ike.png', audio: 'assets/sounds/Ike.wav'},
    {name: 'robin', image: 'assets/Character-Pictures/robin.png', audio: 'assets/sounds/Robin.wav'},
    {name: 'corrin', image: 'assets/Character-Pictures/corrin.png', audio: 'assets/sounds/Corrin.wav'},
    {name: 'lucina', image: 'assets/Character-Pictures/lucina.png', audio: 'assets/sounds/Lucina.wav'},
    {name: 'chrom', image: 'assets/Character-Pictures/chrom.png', audio: 'assets/sounds/Chrom.wav'},
    {name: 'pit', image: 'assets/Character-Pictures/pit.png', audio: 'assets/sounds/Pit.wav'},
    {name: 'palutena', image: 'assets/Character-Pictures/palutena.png', audio: 'assets/sounds/Palutena.wav'},
    {name: 'wario', image: 'assets/Character-Pictures/wario.png', audio: 'assets/sounds/Wario.wav'},
    {name: 'snake', image: 'assets/Character-Pictures/snake.png', audio: 'assets/sounds/Snake.wav'},
    {name: 'sonic', image: 'assets/Character-Pictures/sonic.png', audio: 'assets/sounds/Sonic.wav'},
    {name: 'olimar', image: 'assets/Character-Pictures/olimar.png', audio: 'assets/sounds/Olimar.wav'},
    {name: 'villager', image: 'assets/Character-Pictures/villager.png', audio: 'assets/sounds/Villager.wav'},
    {name: 'isabelle', image: 'assets/Character-Pictures/isabelle.png', audio: 'assets/sounds/Isabelle.wav'},
    {name: 'inkling', image: 'assets/Character-Pictures/inkling.png', audio: 'assets/sounds/Inkling.wav'},
    {name: 'bayonetta', image: 'assets/Character-Pictures/bayonetta.png', audio: 'assets/sounds/Bayonetta.wav'},
    {name: 'shulk', image: 'assets/Character-Pictures/shulk.png', audio: 'assets/sounds/Shulk.wav'},
    {name: 'ryu', image: 'assets/Character-Pictures/ryu.png', audio: 'assets/sounds/Ryu.wav'},
    {name: 'ken', image: 'assets/Character-Pictures/ken.png', audio: 'assets/sounds/Ken.wav'},
    {name: 'cloud', image: 'assets/Character-Pictures/cloud.png', audio: 'assets/sounds/Cloud.wav'},
    {name: 'simon', image: 'assets/Character-Pictures/simon.png', audio: 'assets/sounds/Simon.wav'},
    {name: 'richter', image: 'assets/Character-Pictures/richter.png', audio: 'assets/sounds/Richter.wav'},
    {name: 'dokey,kong', image: 'assets/Character-Pictures/DK.png', audio: 'assets/sounds/Donky.wav'},
    {name: 'ice,climbers', image: 'assets/Character-Pictures/iceclimbers.png', audio: 'assets/sounds/Iceclimbers.wav'},
    {name: 'young,link', image: 'assets/Character-Pictures/younglink.png', audio: 'assets/sounds/Younglink.wav'},
    {name: 'toon,link', image: 'assets/Character-Pictures/toonlink.png', audio: 'assets/sounds/Toonlink.wav'},
    {name: 'bowser,jr', image: 'assets/Character-Pictures/bowserjr.png', audio: 'assets/sounds/Bowserjr.wav'},
    {name: 'mega,man', image: 'assets/Character-Pictures/megaman.png', audio: 'assets/sounds/Megaman.wav'},
    {name: 'pac,man', image: 'assets/Character-Pictures/pacman.png', audio: 'assets/sounds/Pacman.wav'},
    {name: 'king,k,rool', image: 'assets/Character-Pictures/kkr.png', audio: 'assets/sounds/Kingkrool.wav'},
    {name: 'meta,knight', image: 'assets/Character-Pictures/metaknight.png', audio: 'assets/sounds/Metaknight.wav'},
    {name: 'dark,samus', image: 'assets/Character-Pictures/darksamus.png', audio: 'assets/sounds/Darksamus.wav'},
    {name: 'dark,pit', image: 'assets/Character-Pictures/darkpit.png', audio: 'assets/sounds/Darkpit.wav'},
    {name: 'duck,hunt', image: 'assets/Character-Pictures/duckhunt.png', audio: 'assets/sounds/Duckhunt.wav'},
    {name: 'little,mac', image: 'assets/Character-Pictures/littlemac.png', audio: 'assets/sounds/Littlemac.wav'},
    {name: 'dr,mario', image: 'assets/Character-Pictures/drmario.png', audio: 'assets/sounds/Drmario.wav'},
    {name: 'r,o,b', image: 'assets/Character-Pictures/rob.png', audio: 'assets/sounds/Rob.wav'},
    {name: 'pokemon,trainer', image: 'assets/Character-Pictures/pokemon.png', audio: 'assets/sounds/Pokemontrainer.wav'},
    {name: 'cpt,falcon', image: 'assets/Character-Pictures/captain.png', audio: 'assets/sounds/Captain.wav'}
    {name: 'pihrana,plant', image: 'assets/Character-Pictures/pihranaplant.png', audio: 'assets/sounds/Pihranaplant.wav'}

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
var index = rightAnswer.indexOf();
var x ;
var y ;

// Random name selected
var name = [icons[Math.floor(Math.random() * icons.length)].name];
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
       
        // while (index != -1) {
        //     rightGuess.push(index);
        //     index = rightAnswer.indexOf(index + 1);
        // }
        x = fullName.indexOf(",");
        y = fullName.lastIndexOf(",");
        underScore[x]=",";
        underScore[y]=",";
        rightGuess.push(",");
        counter++;
    
    }
    
    console.log(lives);
    console.log("wrong " + wrongGuess);
    console.log("right " + rightGuess);
    
    // win conditon, also updates character icon
    // pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
    if (counter === rightAnswer.length){
        var z = icons.findIndex(i=>i.name===name);
        var winneris = new Audio ("assets/sounds/winneris.wav");
        winneris.play();
        var charaudio = new Audio(icons[z].audio);
        setTimeout(function() { charaudio.play(); }, 1500), 
        console.log(z);
        document.getElementById("foe-icon").src = icons[z].image;
        var winaudio =new Audio("assets/sounds/congrats.wav");
        setTimeout(function() { winaudio.play(); }, 2500), 
        document.getElementById("endgame").style.visibility = "visible";
        console.log( "Name: " + name + " Index: " + z );
        console.log("You Win");
        
    }
    
    
    if (lives <= 0){
        document.getElementById("gameover").style.visibility = "visible";
        console.log("You Lose")
        var loseaudio = new Audio("assets/sounds/failure.wav");
       loseaudio.play();
        
    }
}
 



