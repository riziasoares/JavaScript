import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233344);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233300;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;

const cliente2 = new Cliente("Aline", 22233344405);
// cliente2.nome = "Aline";
// cliente2.cpf = 22233344405;
// cliente2.agencia = 1001;
// cliente2.saldo = 0;

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 101);
// contaCorrenteCliente1.agencia = 101;
// contaCorrenteCliente1.cliente = cliente1;
// contaCorrenteCliente1.depositar(100);

const contaCorrenteCliente2 = new ContaCorrente(cliente2, 102);
// contaCorrenteCliente2.agencia = 102;
// contaCorrenteCliente2.cliente = cliente2;

// contaCorrenteCliente1.trasferir(50, contaCorrenteCliente2);
// console.log(contaCorrenteCliente1, contaCorrenteCliente2);
console.log("Total de contas: " + ContaCorrente.numeroContas);

// console.log("CONTA CORRENTE:", cliente1.nome);
// console.log("EXTRATO:\n")

// contaCorrenteCliente1.depositar(100);
// contaCorrenteCliente1.depositar(50);
// console.log("\nSaldo: ", contaCorrenteCliente1.saldo);


// const valorSacado = contaCorrenteCliente1.sacar(50); 
// console.log("\nValor do saque", valorSacado);
// console.log("\nSaldo:", contaCorrenteCliente1.saldo);



