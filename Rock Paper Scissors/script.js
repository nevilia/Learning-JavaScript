// // Practice
// let ac1 = document.getElementById("rock")
// let ac2 = document.getElementById("paper")
// let ac3 = document.getElementById("scissors")
// let playbutton = document.getElementById("submit")

const totalScores = {computerScore:0, playerScore:0}

function getComputerChoice(){
    const rpsChoice = ['rock', 'paper', 'scissors'] 
    let index = Math.floor(Math.random() * 3)
    let computerChoice = rpsChoice[index]
    return computerChoice
    
}
function getResult(playerChoice, computerChoice){
    let score = 0 // 0, 1, -1 only
    // draw
    if (playerChoice == computerChoice){
        score = 0
    }
    // player wins
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        score = 1
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        score = 1
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        score = 1
    }
    // player loses
    else{
        score = -1
    }

    return score
}

function showResult(score, playerChoice, computerChoice){
    const resultDev = document.getElementById('result')
    const handsDev = document.getElementById('hands')
    const playerScoreDev = document.getElementById('player-score')
    
    if (score == 1) {
        resultDev.innerText = 'You Win'
    }
    else if (score == -1) {
        resultDev.innerText = 'You Lose'
    }
    else {
        resultDev.innerText = 'Draw'
    }

    handsDev.innerText = `person: ${playerChoice} vs computer: ${computerChoice}`
    playerScoreDev.innerText = `Your Score: ${totalScores['playerScore']}`
}

function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    console.log({score})
    totalScores['playerScore']+=score
    console.log(totalScores)
    

    showResult(score, playerChoice,computerChoice)
}

function playGame(){
    const rpsButtons = document.querySelectorAll('.choice')
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
    
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('submit')
    endGameButton.onclick = () => endGame(totalScores)
}

function endGame(totalScores){
    totalScores['playerScore'] = 0
    totalScores['computerScore'] = 0

    const resultDev = document.getElementById('result')
    const handsDev = document.getElementById('hands')
    const playerScoreDev = document.getElementById('player-score')
    
    resultDev.innerText = ''
    handsDev.innerText = ''
    playerScoreDev.innerText = ''
}

playGame()




// // This is just practice part
// let ans = document.querySelectorAll('.choice')
// timesClicked = {'rock':0, 'paper':0, 'scissors':0}
// ans.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerText = timesClicked[square.value]
//     }
// })

// playbutton.onclick = () => ans.forEach((square, index) => square.innerText = ['Rock', 'Paper', 'Scissors'][index]) 
// // alt way for better explanation: let arr = ['Rock', 'Paper', 'Scissors'] and index will be 0,1,2 so it means arr[0], arr[1 etc]
