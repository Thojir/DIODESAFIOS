// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let adicionar = document.getElementById('adicionar')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal = 0;

limparSaldo();

function adicionarAoSaldo(soma:number) 
{
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    resetarValorParaAdicionar();
}

function limparSaldo() {
    campoSaldo.innerHTML = "";
}

function resetarValorParaAdicionar(){
    adicionar.value = "";
}

botaoAtualizar.addEventListener('click', function () 
{
    adicionarAoSaldo(Number(adicionar.value));
});

botaoLimpar.addEventListener('click', function () 
{
    limparSaldo();
});


/**
 * HTML
    <h4>Valor a ser adicionado: <input id="adicionar"> </h4>

    <button id="atualizar-saldo">Atualizar saldo</button>

    <button id="limpar-saldo">Limpar seu saldo</button>

    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
