const readlineSync = require('readline-sync')

const nome = readlineSync.question("Digite seu nome: ");

let level = 0
let xp = 0
let timeout = 2000

function derrota(){
    console.log("Fim de jogo")
}

function subiuDeLevel(){
    console.log(`O Herói, de nome ${nome}, está no nível ${level}`);
    console.log("você é um heroi ferro")
    console.log("pois se seu XP for menor do que do que 1.000 você é classificado como ferro")
    console.log(`xp atual: ${xp}`)
}

function fight(){
    setTimeout(() => {
        console.log("Inimigos à espreita...")
        setTimeout(() => {
            console.log("É uma alcateia faminta...")
            setTimeout(() => {
                let batalhar = readlineSync.question("Deseja lutar contra eles?: ");
                
                if(batalhar === "sim"){
                    console.log("Você os enfrenta e fica ferido")

                    // Laço de repetição enquanto o nível for menor ou igual a 10
                    while (level < 10) {
                        level += 2;
                        xp += 10
                        console.log("Os inimigos ainda estão vivos");

                        // Pergunta ao jogador se deseja continuar lutando
                        batalhar = readlineSync.question("Deseja lutar contra eles novamente?: ");
                        
                        if(batalhar !== "sim"){
                            console.log("Você desistiu da luta e fugiu...")
                            derrota();
                            return; // Encerra a função se o jogador desistir da luta
                        }
                    }
                    
                    // Se o nível atingir 10, jogador vence
                    console.log("Vitória!!!");
                    subiuDeLevel();
                } 
                else{
                    console.log("Você desistiu da luta e fugiu...")
                    derrota();
                }
            }, timeout);
        }, timeout);
    }, timeout);
}

function iniciar(){
    console.log("Você acordou em uma floresta...");
    setTimeout(() => {
        fight()
    }, timeout);
}

function main(){
    iniciar()
}

main()
