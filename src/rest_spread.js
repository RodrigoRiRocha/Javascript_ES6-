// Função para somar números usando argumentos
function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments);
    // // return a + b + c;
}

console.log(somar(10, 20, 30));

// Função para somar números usando o operador rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return soma;
}

console.log(somarComRest(10,20,30));

// Spread operator em arrays
const numeros = [1,2,3,4]
console.log(...numeros);

const timesDeSaoPaulo = ['São Paulo', 'Palmeiras', 'Corinthians', 'Santos'];
const timesDeMinas = ['Cruzeiro', 'Atlético', 'América'];

const times = [...timesDeSaoPaulo, ...timesDeMinas];
console.log(times);

// Spread operator em objetos
const carroDaJulia = {
    cor: 'Rosa',
    portas: 4,
    ano: 2020,
    modelo: 'Civic',
    marca: 'Honda',
}

const carroDaAna = {
    ...carroDaJulia,
    cor: 'Roxo',
    ano: 2022
}

console.log(carroDaAna);

// Desestruturação de objetos
const motorDoCarro = carroDaAna.modelo;
const {modelo: modeloDoCarroDaAna} = carroDaAna;  
const {modelo: modeloDoCarroDaJulia} = carroDaJulia; 

console.log(modeloDoCarroDaAna);
console.log(modeloDoCarroDaJulia);

// Desestruturação de arrays
const[item1,item2,item3, ...outrosTimes] = times;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);