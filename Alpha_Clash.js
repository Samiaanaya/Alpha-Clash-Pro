
function play(){
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    //reset score life
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    continueGame();
}

function continueGame(){
    const alphabet=getARandomAlphabet();

    const currentAlphabetElement=document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet;
    
    setBackgroundColorById(alphabet)

}

document.addEventListener('keyup',handleKeyboardKeyUpEvent)
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;

    if(playerPressed==='Escape'){
        gameOver();
    }

    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase()

    if(playerPressed===expectedAlphabet){
        //update score
        const currentScore=getTextElementById('current-score');
        const newScore=currentScore+1;
        setTextElementById('current-score',newScore)

        // start a new new score
        removeBackgroundColorById(playerPressed)
        continueGame();
    }
    else{
        //update life
        const currentLife=getTextElementById('current-life')
        const newLife=currentLife-1;

        setTextElementById('current-life',newLife)

        if(newLife===0){
            gameOver();
        }
    }
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore=getTextElementById('current-score');
    setTextElementById('last-score',lastScore)

    //clear the last selected alphabet color
    const alphabet=getElementTextById('current-alphabet')
    removeBackgroundColorById(alphabet)
}

//...........Random Alphabet.............
function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwzyz';
    const alphabets=alphabetString.split('');

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet =alphabets[index];
    return alphabet;
}

// ........................................
// ...........common function..............
function getTextElementById(elementId){
    const element=document.getElementById(elementId)
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}

function setTextElementById(elementId,value){
    const element=document.getElementById(elementId)
    element.innerText=value;
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId)
    const text=element.innerText;
    return text;
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}