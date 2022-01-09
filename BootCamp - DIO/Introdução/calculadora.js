function calculadora() {
    const operacao = prompt("Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)");

    let n1 = prompt("Insira o primeiro número: ");
    let n2 = prompt("Insira o segundo número: ");
    let resultado;

    function soma() {
        resultado = Number(n1) + Number(n2);
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function subtracao() {
        resultado = Number(n1) - Number(n2);
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoReal() {
        resultado = Number(n1) / Number(n2);
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira() {
        resultado = Number(n1) % Number(n2);
        alert(`O resto da divisão ${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function potenciacao() {
        resultado = Number(n1) ** Number(n2);
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt(`Deseja fazer outra operação?\n 1 - Sim\n 2 - Não`);

        if (opcao == 1) {
            calculadora();
        }else if (opcao == 2) {
            alert(`Até mais!`);
        }else {
            alert(`Digite uma opção válida!`);
            novaOperacao();
        }
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    }
}

calculadora();