console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//listaDeDestinos.push(`Curitiba`) //adicionar um item na lista

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis: \n");
console.log(listaDeDestinos);

if (idadeComprador >= 18){
    console.log("\nComprador apto para efetivar a compra");
    //listaDeDestinos.splice(1,1); excluir um item da lista
} else if (estaAcompanhada == true) {
    console.log("\nComprador acompanhado : apto para efetivar a compra")
    //listaDeDestinos.splice(1,1);
} else {
    console.log("\nComprador não possui idade suficiente para efetivar a compra.\n");
}

let contador = 0;
let destinoExistente = false;

while(contador <3) {
    if(listaDeDestinos[contador] == destino){
        //console.log("Destino existente.");
        destinoExistente = true;
        break;
    } 
    //else {
    //     console.log("Destino indisponível.");
    //     destinoExistente = false;
    // }
    contador += 1;
}

console.log("Destino existente: ", destinoExistente);


// console.log("\nEmbarque: \n");
// if((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada){
//     console.log("Boa viagem!\n");
// } else {
//     console.log("Você não pode embarcar, por algum dos motivos abaixo: \n\n - Não tem idade suficiente;\n - Não tem passagem.\n");
// }

//for(let i = 0 ; i < 3 ; i++){
//     if(listaDeDestinos[i] == destino){
//         destinoExistente = true;
//     }
// }


