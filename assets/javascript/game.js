// Global Variables
// ====================================================
// Create array of names
let word = [
    "freddy",
    "jason",
    "dracula",
    "frankenstein",
    "pennywise",
    "clown",
    "ghost",
    "samara",
    "michael myers"
];

// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let lettersGuessed = [];
let guesses = 6;

// Dom manipulation
let docUnderScore = document.getElementById('underscore');
let doclettersGuessed = document.getElementById('lettersGuessed');

// testing
console.log(chosenWord);

// Main
// ==================================================================
// Create underscores based on word length
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// testing
console.log(generateUnderscore());

// Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(keyCode);
    // if users guess is right
    if (chosenWord.indexOf(keyWord) > -1) {
        // add to rightWord Array
        rightWord.push(keyWord);
        // replace underscore with correctly guessed letter
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(' ');
        doclettersGuessed[0].innerHTML = lettersGuessed;
        // Checks to see if user word matches guesses
        if (underScore.join('') == chosenWord) {
           alert('You Win!');
        }
    } else {
        wrongWord.push(keyWord);
        // testing
        console.log(wrongWord);
    }
});

// docUnderScore[0].innerHTML = generateUnderscore().join(' ');
// wrongWord.push(keyWord);
// let lettersGuessed = document.getElementById('lettersGuessed');


// let answerArray = [];
// for (let i = 0; i < chosenWord.length; i++) {
//     answerArray[i] = "_";
// }

// let remainingLetters = word.length;

// // Shows user's current progress:
// (answerArray.join(" "));

// Updates game status after user guesses letter:
// for (let j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//     }
// }
// NOT MY CODE
// window.onload = function () {

//     let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//           'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//           't', 'u', 'v', 'w', 'x', 'y', 'z'];

//     let categories;         // Array of topics
//     let chosenCategory;     // Selected catagory
//     let getHint ;          // Word getHint
//     let word ;              // Selected word
//     let guess ;             // Geuss
//     let geusses = [ ];      // Stored geusses
//     let lives ;             // Lives
//     let counter ;           // Count correct geusses
//     let space;              // Number of spaces in word '-'

//     // Get elements
//     let showLives = document.getElementById("mylives");
//     let showCatagory = document.getElementById("scatagory");
//     let getHint = document.getElementById("hint");
//     let showClue = document.getElementById("clue");



//     // create alphabet ul
//     let buttons = function () {
//       myButtons = document.getElementById('buttons');
//       letters = document.createElement('ul');

//       for (let i = 0; i < alphabet.length; i++) {
//         letters.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letter';
//         list.innerHTML = alphabet[i];
//         check();
//         myButtons.appendChild(letters);
//         letters.appendChild(list);
//       }
//     }


//     // Select Catagory
//     let selectCat = function () {
//       if (chosenCategory === categories[0]) {
//         catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
//       } else if (chosenCategory === categories[1]) {
//         catagoryName.innerHTML = "The Chosen Category Is Films";
//       } else if (chosenCategory === categories[2]) {
//         catagoryName.innerHTML = "The Chosen Category Is Cities";
//       }
//     }

//     // Create geusses ul
//      result = function () {
//       wordHolder = document.getElementById('hold');
//       correct = document.createElement('ul');

//       for (let i = 0; i < word.length; i++) {
//         correct.setAttribute('id', 'my-word');
//         guess = document.createElement('li');
//         guess.setAttribute('class', 'guess');
//         if (word[i] === "-") {
//           guess.innerHTML = "-";
//           space = 1;
//         } else {
//           guess.innerHTML = "_";
//         }

//         geusses.push(guess);
//         wordHolder.appendChild(correct);
//         correct.appendChild(guess);
//       }
//     }

//     // Show lives
//      comments = function () {
//       showLives.innerHTML = "You have " + lives + " lives";
//       if (lives < 1) {
//         showLives.innerHTML = "Game Over";
//       }
//       for (let i = 0; i < geusses.length; i++) {
//         if (counter + space === geusses.length) {
//           showLives.innerHTML = "You Win!";
//         }
//       }
//     }

//         // Animate man
//     let animate = function () {
//       let drawMe = lives ;
//       drawArray[drawMe]();
//     }


//     // Hangman
//     canvas =  function(){

//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.strokeStyle = "#fff";
//       context.lineWidth = 2;
//     };

//       head = function(){
//         myStickman = document.getElementById("stickman");
//         context = myStickman.getContext('2d');
//         context.beginPath();
//         context.arc(60, 25, 10, 0, Math.PI*2, true);
//         context.stroke();
//       }

//     draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

//       context.moveTo($pathFromx, $pathFromy);
//       context.lineTo($pathTox, $pathToy);
//       context.stroke(); 
//   }

//      frame1 = function() {
//        draw (0, 150, 150, 150);
//      };

//      frame2 = function() {
//        draw (10, 0, 10, 600);
//      };

//      frame3 = function() {
//        draw (0, 5, 70, 5);
//      };

//      frame4 = function() {
//        draw (60, 5, 60, 15);
//      };

//      torso = function() {
//        draw (60, 36, 60, 70);
//      };

//      rightArm = function() {
//        draw (60, 46, 100, 50);
//      };

//      leftArm = function() {
//        draw (60, 46, 20, 50);
//      };

//      rightLeg = function() {
//        draw (60, 70, 100, 100);
//      };

//      leftLeg = function() {
//        draw (60, 70, 20, 100);
//      };

//     drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


//     // OnClick Function
//      check = function () {
//       list.onclick = function () {
//         let geuss = (this.innerHTML);
//         this.setAttribute("class", "active");
//         this.onclick = null;
//         for (let i = 0; i < word.length; i++) {
//           if (word[i] === geuss) {
//             geusses[i].innerHTML = geuss;
//             counter += 1;
//           } 
//         }
//         let j = (word.indexOf(geuss));
//         if (j === -1) {
//           lives -= 1;
//           comments();
//           animate();
//         } else {
//           comments();
//         }
//       }
//     }


//     // Play
//     play = function () {
//       categories = [
//           ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
//           ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
//           ["manchester", "milan", "madrid", "amsterdam", "prague"]
//       ];

//       chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//       word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//       word = word.replace(/\s/g, "-");
//       console.log(word);
//       buttons();

//       geusses = [ ];
//       lives = 10;
//       counter = 0;
//       space = 0;
//       result();
//       comments();
//       selectCat();
//       canvas();
//     }

//     play();

//      // Reset

//     document.getElementById('reset').onclick = function() {
//       correct.parentNode.removeChild(correct);
//       letters.parentNode.removeChild(letters);
//       showClue.innerHTML = "";
//       context.clearRect(0, 0, 400, 400);
//       play();
//     }
//   }


