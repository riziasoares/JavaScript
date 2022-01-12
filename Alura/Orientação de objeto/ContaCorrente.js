import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    } //regra de proteção de dados

    get cliente(){
        return this._cliente;
    }//regra de proteção de dados

    agencia = 0;
    
    _saldo = 0;
    get saldo(){
        return this._saldo
    }//regra de proteção de dados

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroContas += 1;
    }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        console.log("Valor do depósito: ", valor);
        this._saldo += valor;
    }

    trasferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}