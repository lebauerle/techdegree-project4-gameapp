/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 // setting up Game Class
class Game{
    constructor(){
        //array with phrases the player has to guess
        this.phrases = [
            new Phrase('life is like a box of chocolate'),
            new Phrase('i will be back'),
            new Phrase('merry christmas'),
            new Phrase('i love you'),
            new Phrase('abra kadabra simsala bim')
        ];
        //missed guesses set to zero at start
        this.missed = 0;
        //no active Phrase at start
        this.activePhrase = null;
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
        //hide the startdisplay
        //calling radonphrase and addtodisplay function 
    */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
        //creating a random number
        //returning an activephrase created with the random number as index from array
    */
    getRandomPhrase() {
        let randPhraseNumber = Math.floor((Math.random() * 5));
        this.activePhrase = this.phrases[randPhraseNumber];
        return this.activePhrase;
    };

    
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
        //if the key is in the active phrase, the classList is set to chosen and the showmatchedfuntion is called
        //else the classlist is set to wrong and removelife is called
    */
    handleInteraction(key){
        key.disabled = true;
        if (this.activePhrase.checkLetter(key.textContent) === true) {
            key.classList = "chosen";
            this.activePhrase.showMatchedLetter(key.textContent);
            if (this.checkForWin() === true) {
                this.gameOver(false);
            }
        } else {
            key.classList = "wrong";
            this.removeLife();
        }
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */  
    removeLife(){
        this.missed++;
        let images = document.querySelector("img[src='images/liveHeart.png']");
            if (this.missed < 5) {
                images.src = "images/lostHeart.png";
        }   else if (this.missed === 5) {
                this.gameOver(true);
        }
    };


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin(){
        if (document.querySelectorAll('.hide.letter').length == 0) {
            this.gameOver(true);
            return true;
        }
        else {
            return false;
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    * if win showing a win startscreen and reset the game
    * else show a lose screen and reset the game
    */
    gameOver(boolean){
        if (boolean === true){
            document.getElementById('overlay').style.display = '';
            document.getElementById('game-over-message').textContent = 'You lost! Try again!';
            overlay.classList = "lose";
            this.theGreatReset();
        } else {
            document.getElementById('overlay').style.display = '';
            document.getElementById('game-over-message').textContent = 'Congratulations, you won!'; 
            overlay.classList = "win";
            this.theGreatReset();
        }
    };

    /*
    Reset the phrase, the hearts and the clicked keys
    */
    theGreatReset(){
        //loop trough the wrong/colored keys to reset them by stop disableing them and remove the color
        const buttonResetWrong = document.querySelectorAll(".wrong");
            for (let i = 0; i < buttonResetWrong.length; i++) {
            buttonResetWrong[i].className = "key";
            buttonResetWrong[i].disabled = false;
        };
        //loop trough the correct/colored keys to reset them by stop disableing them and remove the color
        const buttonResetChosen = document.querySelectorAll(".chosen");
            for (let i = 0; i < buttonResetChosen.length; i++) {
            buttonResetChosen[i].className = "key";
            buttonResetChosen[i].disabled = false;
        };
        //loop trough to remove the last active sentence
        const ul = document.querySelector("ul");
        const list = ul.querySelectorAll("li");
            for (let x = 0; x < list.length; x++) {
                ul.removeChild(list[x]);
        };

        //loop trough the scoreboard as long as the hearts are full again
        let li = document.querySelectorAll("#scoreboard img");
            for (let i = 0; i < li.length; i++) {
            li[i].src = "images/liveHeart.png";
        };
    };  
};
 