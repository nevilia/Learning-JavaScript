let ac1 = document.getElementById("rock")
let ac2 = document.getElementById("paper")
let ac3 = document.getElementById("scissors")
let playbutton = document.getElementById("submit")


let ans = document.querySelectorAll('.choice')
timesClicked = {'rock':0, 'paper':0, 'scissors':0}
ans.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})

playbutton.onclick = () => ans.forEach((square, index) => square.innerText = ['Rock', 'Paper', 'Scissors'][index]) 
// alt way for better explanation: let arr = ['Rock', 'Paper', 'Scissors'] and index will be 0,1,2 so it means arr[0], arr[1 etc]


