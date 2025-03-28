// Exemplos de funções arrow
const minhafuncao = () => "arrow function";

const retornaUmCarro = () => ({
    marca: "Ford",
    modelo: "Fiesta"
});

console.log(minhafuncao());
console.log(retornaUmCarro());

// Trabalhando com o objeto carro
const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this);
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);