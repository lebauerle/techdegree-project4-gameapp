/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//setting up Phrase Class
class Phrase{
    constructor(phrase){
        //convert to lowercase
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
    //declare var to store ul
    const phraseList = document.querySelector("#phrase ul");   
        //loop trough phrase and create 
        for(let i = 0; i < this.phrase.length; i++){
            //for each letter create an li and set the phrase[index] to textContent.
            let li = document.createElement('li');
            li.textContent = this.phrase[i];
        //if the listitem is empty a space class is added, else it is a letter
        //else add class of hide letter
        if (li.textContent === ' '){
            li.classList.add('hide', 'space');
        } else {
            li.classList.add('hide', 'letter');
        }
    //append elements to the DOM
    phraseList.appendChild(li);
    }};

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * if the letter is included in the phrase, it returns true, else false
    */
    checkLetter(key){
        if (this.phrase.includes(key)){
            return true
        } else {
            return false
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        //setting up variable to store letterlist
        const sML = document.querySelectorAll("li.hide.letter");
        //using foreach method to target every element of array
        sML.forEach((phrase) => {
            if (letter === phrase.textContent.toLowerCase()){
                // replace method to remove hide and add show class
                phrase.classList.replace("hide", "show");
                }
            });
    }    
}
