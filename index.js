//when computer guess ,lets make a variable for this
let computerGuess;
//basically user jo guess kar rha hai wo ek jagah store ho rha so uske liye ek alag array banayenge
let userGuess = [];
//for updation of user value we will make other variable
let userGuessUpdate = document.getElementById("textOutput");

//since ek br input dene ke bad hame use hatana v hai so
let userNumberUpdate = document.getElementById("inputBox");

//Now we will add a music when i click the button
//syntax= let audio= new Audio("path of music");
let audio = new Audio("./music.wav");

//now we call function jis se ham ek random number generate karenge
const init = () => {
  // computerGuess=Math.random()*100;==yah decimal number, 1 and 100 ke bich dega
  //now for integer bw 0 and 100 we use Math.floor function
  computerGuess = Math.floor(Math.random() * 100);

  //hame do page banana hai iske liye hame newgame and game area ka display none karna hoga
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
//jaise hi ham page load kare waise computer ek random number guess kar le iske liye mai ek body me onlaod atrubute deke function ko call kiya hu!

//now when we click on buttons of easy and hard the hame ek function call karenge for hiding the welcomeScreen and Rising the gameArea!

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block"; //for showing
};
//reload the page for new game again
const newGameBegin = () => {
  //it reload the current documents
  audio.play();
  window.location.reload();
};

//Now jb wah apna total chance complete kar lega then use ek new game khilana hai then uske liye we will disable the inpute box and show the new game button
const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//now looking forward to value ,jo user ne input kiya hai iske liye mai ek function ko call karuga jisko as  a atribute de dunga input tag me
const compareGuess = () => {
  audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  //now we have to store the data
  //...userGuess == ... is a spread operator that means user pahle v kuchh value enter kar chuka tha
  // userGuess=[...userGuess, userNumber]=by array we will store;
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //i)-We will restrict the user to enter the number when they will complete thier chances
  //ii)-check the value are low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML =
        "Your Guess is High " + String.fromCodePoint(0x1f632);
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML =
        "Your Guess is low" + String.fromCodePoint(0x1f614);
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML =
        "It's Correct " + String.fromCodePoint(0x1f603);
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    //for last hame yah condition likhni padegi
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML =
        "Your Guess is High " + String.fromCodePoint(0x1f632);
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML =
        "Your Guess is low" + String.fromCodePoint(0x1f614);
      userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML =
        "It's Correct " + String.fromCodePoint(0x1f603);
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  //now we have to store the number of attempts which is acomplished by user who tell the how many time user have attempted
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
