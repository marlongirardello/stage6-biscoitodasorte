// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Eventos
cookie.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', toggleScreen)

// funções
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
