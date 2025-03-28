// Classe base Pokemon com atributos e métodos principais
class Pokemon {
    #hp = 100; // Atributo privado

    constructor(nome, tipo, level) {
        this.nome = nome;
        this.tipo = tipo;
        this.level = level;
    }

    // Getter para acessar o HP
    get hp() {
        return this.#hp;
    }

    // Método para atacar
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    // Método para reduzir o HP ao receber dano
    recebeuDano() {
        this.#hp -= 10;
        console.log(`${this.nome} recebeu dano!`);
    }

    // Método para exibir o HP atual
    exibirHp() {
        console.log(`HP: ${this.#hp}`);
    }
}

// Classe Pikachu que herda de Pokemon e sobrescreve o método atacar
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Electric', 5);
    }

    atacar() {
        console.log(`${this.nome} atacou com Thunderbolt`);
    }
}

// Instância de Pikachu e uso de seus métodos
const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuDano();
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibirHp();

// Instância genérica de Pokemon
const pikachu = new Pokemon('Pikachu', 'Electric', 5);
console.log(pikachu);
console.log(pikachuDoAsh);

// Verificando instâncias
console.log(pikachuDoAsh instanceof Pokemon);
console.log(pikachuDoAsh instanceof Pikachu);