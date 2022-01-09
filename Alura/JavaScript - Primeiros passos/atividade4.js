console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionar um item na lista

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: \n");
console.log(listaDeDestinos);

// if (idadeComprador >= 18){
//     console.log("Comprador apto para efetivar a compra");
//     listaDeDestinos.splice(1,1);
// } else if (estaAcompanhada == true) {
//     console.log("Comprador acompanhado : apto para efetivar a compra")
//     listaDeDestinos.splice(1,1);
// }
// else {
//     console.log("Comprador não possui idade suficiente para efetivar a compra.");
// }

if (idadeComprador >= 18){
    console.log("Comprador apto para efetivar a compra");
    listaDeDestinos.splice(1,1);
} else if (estaAcompanhada == true) {
    console.log("\nComprador acompanhado : apto para efetivar a compra")
    listaDeDestinos.splice(1,1);
} else {
    console.log("\nComprador não possui idade suficiente para efetivar a compra.");
}

console.log("\nEmbarque: \n");
if((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada){
    console.log("Boa viagem!\n");
} else {
    console.log("Você não pode embarcar, por algum dos motivos abaixo: \n\n - Não tem idade suficiente;\n - Não tem passagem.\n");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

