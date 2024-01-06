let randomNumber = Math.floor(Math.random()*100+1)

const userInput = document.querySelector('#input')
const submit = document.querySelector('#submit')
const previousGuess = document.querySelector('#previous-guesses')
const remGuess = document.querySelector("#guess-remaining")
const results = document.querySelector('#endres')
const startOver = document.querySelector('#remarks')

const p = document.createElement('p')

let prevGuess =[]
let num = 1

let playGame = true;

if (playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validGuess(guess)
    })
}

function validGuess(guess){
    if (isNaN(guess) || guess >100 || guess <1){
        alert('Please enter a valid number!')
    } else {
        prevGuess.push(guess)
        if (num === 11){
            displayGuess(guess)
            displayMessage(`Game Over!! Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`You Guessed it right!`)
    }else if (guess < randomNumber){
        displayMessage(`The Number is too low!`)  
    }else if (guess > randomNumber){
        displayMessage(`The Number is too high!`)  
    }
}

function displayGuess(guess){
    userInput.value = ''
    previousGuess.innerHTML += `${guess}, `
    num++;
    remGuess.innerHTML = `${11-num}`   
}

function displayMessage(message){
    results.innerHTML= `${message}`
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = "<h2 id='newgame'>Start New Game</h2>"
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newgame')
    newGameBtn.addEventListener('click', (e)=>{
    randomNumber = Math.floor(Math.random()*100+1)
    prevGuess =[]
    num = 1
    remGuess.innerHTML = `${11-num}`
    previousGuess.innerHTML = ''
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
    })
}