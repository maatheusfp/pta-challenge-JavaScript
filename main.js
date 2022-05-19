const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];
// Eles retornam os elementos das classes e colocam como um vetor 

const VELOCITY = 10;
//uma const para definir a velocidade em que Roberto anda (a posição que será adicionada ou retirada) 

const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

let xPosition = 500;
let yPosition = 300; // Os let demarcam a posição inicial de Roberto 

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] 
// array com strings que definem quais os comandos que podem ser utilizados 
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];
// array com strings que definem as direções possiveis 
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key; // essa função será ativada sempre que algum comando da const keysAvaible for acionado. Propriedade do some()
    })
    
    if(!keyPressedAvaiable) return; // Se o comando selecionado não estiver dentro da const, tomará um null

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    // os if's abaixo identificam o comando acionado e adicionam / retiram a const velocity da posição atual, direcionando assim para a posição desejada
    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`; 
    containerCharacter.style.left = `${xPosition}px` // Essa propriedade vai colocar o valor das const Position para o respectivo lado, top e left
});
