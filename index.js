//Declaração do Modulo Readline. Há outras formas de fazê-lo

const readline = require('readline')
const rl = readline.createInterface({ //nesta linha cria-se a constante rl que servirá para acessar o readline
    input: process.stdin,
    output: process.stdout
})

//Função com a primeira pergunta via readline

function definirNome(){
    return new Promise( ( resolve, reject ) => { //Estabelecida a Promisse que lida com a assincronia 
        rl.question( 'Qual seu nome? ', ( nome ) => { //Pergunta via readline, resposta armazenada na variável
            resolve( nome )//'resolve'é o comando de retorno da função caso ela seja atendida positivamente
            })
        })
    }

function bomDia(nomeDefinido){ //Função 
    console.log("bom dia " + nomeDefinido)
    rl.close()
}


definirNome().then( nomeExibido => { 
    bomDia(nomeExibido)
    rl.close()
})

