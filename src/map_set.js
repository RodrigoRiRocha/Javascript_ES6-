// Trabalhando com Map
let meuMap = new Map();
meuMap.set('nome', 'Gian');
meuMap.set('stack', 'JavaScript, React, Node.js');

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

//verifica o numero de itens no map
console.log(meuMap.size);

//verifica se o valor esta presente no map 
console.log(meuMap.has('sobrenome'));

console.log(meuMap.size);

// Iteração sobre chaves e valores do Map
for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave,valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');
console.log(meuMap);

// Trabalhando com Set
const cpfs = new Set();

cpfs.add('01234567890');
cpfs.add('11111111111');
cpfs.add('22222222222');

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
});

// Removendo duplicados de um array usando Set
const array = ['Gian', 'Jose', 'Maria', 'Ana', 'Roberto', 'Gian', 'Jose'];

//o set removeu os duplicados do array
const arrayComoSet = new Set([...array]);

//converte o set pra array
const arraySemDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemDuplicados);