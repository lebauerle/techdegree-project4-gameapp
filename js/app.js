/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//adding a click event to button that starts a new game
document.getElementById('btn__reset').addEventListener('click', () =>{
    game = new Game();
    game.startGame();
});


/*
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
    //Adding eventlistener to the keyboard keys and calling game.handleinteraction functionality by clicking letters
*/

const keyButtons = document.querySelector('div#qwerty');
keyButtons.addEventListener("click", (e) => {
    const klick = e.target;
    if (klick.tagName === "BUTTON") { game.handleInteraction(klick) }
});