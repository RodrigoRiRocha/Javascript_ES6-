// Iteração sobre um array de redes sociais
const redesSocias = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSocias.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSocias[i]} `);
}

redesSocias.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice}# Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);

});

// Trabalhando com o método map
const alunos = ['João', 'Maria', 'José', 'Pedro', 'Ana'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'JavaScript'
    }
});

console.log(alunos2);

// Trabalhando com o método find e findIndex
const paula = alunos2.find(function (item) {
    return item.nome === 'Maria';
});

console.log(paula);

const paulaIndice = alunos2.findIndex(function (item) {
    return item.nome === 'Maria';
});

console.log(paulaIndice);

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
});

// Trabalhando com métodos every e some
const todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
    return item.curso === 'JavaScript';
});

console.log(todosAlunosSaoDeFrontEnd);

const existeAlguemDeBackEnd = alunos2.some(function (item) {
    return item.curso === 'Backend' && item.curso === 'JavaScript';
});

console.log(existeAlguemDeBackEnd);

// Trabalhando com o método filter
function filtrarPorBackend(item) {
    return item.curso === 'Backend';
}

const filtrarPorBackend2 = item => item.curso === 'Backend';

const alunoDeBackEnd = alunos2.filter(filtrarPorBackend);

console.log(alunoDeBackEnd);

// Trabalhando com o método reduce
const nums = [10, 20, 30, 10]

const soma = nums.reduce(function (acumulador, itemAtual) {
    return acumulador += itemAtual;
}, 0);

console.log(soma);

const nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
    return acumulador += `${itemAtual.nome} || `;
    return acumulador;
}, '');

console.log(nomesDosAlunos);





