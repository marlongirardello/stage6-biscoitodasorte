// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")



// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// funções



function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao

    let randomNumber = Math.round(Math.random() * 10)

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {

    const randomNumber = Number(Math.round(Math.random() * 5));
    let phraseLuck = "Você terá sorte em tudo que fizer hoje";

    switch (randomNumber) {
        case 0:
            phraseLuck = "Os defeitos são mais fortes quando o amor é fraco";
            break;
        case 1:
            phraseLuck = "A vida trará coisas boas se tiver paciência";
            break;
        case 2:
            phraseLuck = "Siga os bons e aprenda com eles";
            break;
        case 3:
            phraseLuck = "Uma bela flor é incompleta sem as suas folhas";
            break;
        case 4:
            phraseLuck = "O riso é a menor distância entre duas pessoas";
            break;
        case 5:
            phraseLuck = "Sem o fogo do entusiasmo, não há o calor da vitória";
            break;  
        default:      
           phraseLuck = `Algo aconteceu de errado ${randomNumber}`;
    }    
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

    screen2.querySelector("h2").innerText = phraseLuck;


}