console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; (comentário ctrl + k + c  descomentar ctrl + k + u)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionar um item na lista

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //excluir um item da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]); //mostrar elemento posicionado na lista
