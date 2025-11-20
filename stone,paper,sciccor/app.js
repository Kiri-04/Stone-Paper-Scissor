let userscore = 0;
let compscore = 0;

// const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");
const drawgame = () => {
    msg.textContent = "DRAW ! "
    msg.style.backgroundColor = "#f7c948";
};

const showwinner = (userwin, userChoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorePara.textContent = userscore;
        msg.textContent = `YOU WIN ! YOUR ${userChoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "#4caf50";
    } else {
        compscore++;
        compscorePara.textContent = compscore;
        msg.textContent = `YOU LOSE!YOUR${compchoice}beats${userChoice}.`
        msg.style.backgroundColor = "#f44336";
    }
};

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}
const playgame = (userChoice) => {
    console.log("userchoice = ", userChoice)
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice);
    if (userChoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userChoice, compchoice);
    }
}

// choices.forEach((choice) => {
//     choice.addEventListener("click",() =>{
//     const userChoice=choice.getAttribute("id");
//     playgame(userChoice)
//     });
// });


const choices = document.querySelectorAll(".choice img");

choices.forEach((img) => {
    img.addEventListener("click", () => {
        const userChoice = img.id;
        playgame(userChoice);
    });
});



