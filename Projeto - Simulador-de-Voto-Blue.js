const prompt = require("prompt-sync")();
// Contador;
var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var votoNulo = 0;
var votoBranco = 0;
// Introdução;
console.log ("Seja bem vindo a eleição da Blue!!!");
console.log ();
console.log ("Vamos validar o seu voto!");
console.log();
let validaVoto = + prompt("Digite o Ano do seu Nascimento: ");
console.log();
var dataAtual = new Date ();
var ano = dataAtual.getFullYear ();
var anoNascimento = ano - validaVoto;

// Função Autoriza Voto;
function autorizaVoto (anoNascimento)  {
     
    if  (anoNascimento >= 18 && anoNascimento <= 70) {        
        return "obrigatorio";
    } 
   
    else if (anoNascimento >= 16 && anoNascimento <= 17 || anoNascimento > 70) {
        return "opcional";
    }

    else {
        return "negado";
    } 
    
}
// Loop;
    reset = "SIM";

while (reset == "SIM") {

    let autorizacao = autorizaVoto (anoNascimento);

    var candidato = console.log ("Vamos votar, vou te apresentar as suas opções:\n\n1 - Profº Gabis (Gosto de abacate e jurassic park e sou campeão em esquecer as coisas !!!)\n2 - Profª Duda (Tenho 1,53 e o Palmeiras tem mundial !!!)\n3 - Profº Molina (Vamos revisar e revisar !!!)\n4 - Voto Nulos\n5 - Voto em Branco");
    console.log();
    // Função votação;
    function votacao (autorizacao)  {
     
        if  (autorizacao === "obrigatorio") {        
            return candidato;                
        } 
   
        else if (autorizacao === "opcional") {
            return candidato;
        }

        else {
            return "Você não pode votar";
        } 
    
    }

    let voto = +prompt("Digite o número correspondente ao seu voto: ");
    console.log();

    if (voto == 1) {
        candidato1 ++;
    }
    
    else if (voto == 2) {
        candidato2 ++;
    }
    
    else if (voto == 3) {
        candidato3 ++;
    }
    
    else if (voto == 4) {
        votoNulo ++;
    }
    
    else if (voto == 5) {
        votoBranco ++;
    }

    var reset = prompt("Digite SIM para votar novamente: ").toUpperCase();
    console.log();
}

// Função Exibir Resultado;
function exibirResultado (resultado)  {
    console.log(`O total de votos para os candidatos foi:\n\nProfº Gabis  = ${candidato1}\nProfª Duda   = ${candidato2}\nProfº Molina = ${candidato3}`);
    console.log();
    console.log(`O total de votos nulos = ${votoNulo}`);
    console.log();
    console.log(`O total de votos Brancos = ${votoBranco}`);
    console.log();
    if (candidato1 > candidato2 || candidato3){
        console.log(`Profº Gabis teve ${candidato1} voto(s) e foi Eleito !!!`);
    }
    else if (candidato2 > candidato3 || candidato1){
        console.log(`Profª Duda teve ${candidato2} voto(s) e foi Eleita !!!`);
    }
    else if (candidato3 > candidato1 || candidato2){
            console.log(`Profº Molina teve ${candidato3} voto(s) e foi Eleito !!!`);
    }
      else {
        console.log("EMPATOU VAMOS TER 2º TURNO !!");
        }
}

let resultado = exibirResultado();
console.log (resultado);