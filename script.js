let userScore = 0;
let computerScore = 0;
const scoreBoard_div = document.querySelector(".scoreboard")
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function convertToWord(choice) {
    if (choice === "r") return "Rock"
    if (choice === "p") return "Paper"
    return "Scissor"
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!!`
    scoreBoard_div.classList.add("green-glow")
    setTimeout(() => scoreBoard_div.classList.remove("green-glow"), 300)
}

function lose(userChoice, computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You Lose!!`
    scoreBoard_div.classList.add("red-glow")
    setTimeout(() => scoreBoard_div.classList.remove("red-glow"), 300)
}

function draw() {
    result_p.innerHTML = `DRAWWWW!!!!`
    scoreBoard_div.classList.add("gray-glow")
    setTimeout(() => scoreBoard_div.classList.remove("gray-glow"), 300)
}

function getComputerChoice() {
    const choices = ["r", "p", "s"]
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw()
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game('r')
    })

    paper_div.addEventListener("click", function() {
        game('p')
    })

    scissor_div.addEventListener("click", function() {
        game('s')
    })
}

main()