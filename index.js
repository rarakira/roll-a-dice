function roll () {
  // 2 random numbers
  var diceOne = Math.floor(Math.random()*6)+1;
  var diceTwo = Math.floor(Math.random()*6)+1;

  //each number to its own image
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice-0" + diceOne + ".svg");
  document.querySelectorAll("img")[0].setAttribute("alt", "dice " + diceOne);

  document.querySelectorAll("img")[1].setAttribute("src", "images/dice-0" + diceTwo + ".svg");
  document.querySelectorAll("img")[1].setAttribute("alt", "dice " + diceTwo);

  //compare numbers
  if (diceOne < diceTwo) {
    document.querySelector("h1").textContent = "Player 2 wins!";
    document.querySelectorAll(".player")[0].textContent = "Player 1";
    document.querySelectorAll(".player")[1].textContent = "Player 2 🚩";
  } else if (diceOne > diceTwo) {
    document.querySelector("h1").textContent = "Player 1 wins!";
    document.querySelectorAll(".player")[0].textContent = "Player 1 🚩";
    document.querySelectorAll(".player")[1].textContent = "Player 2";
  } else {
    document.querySelector("h1").textContent = "Draw!";
    document.querySelectorAll(".player")[0].textContent = "Player 1";
    document.querySelectorAll(".player")[1].textContent = "Player 2";
  }
}
