// Função síncrona que realiza uma operação muito pesada
function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

// Promessa que simula a execução de uma função muito pesada
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    }
    catch (erro) {
        reject('Deu erro na iteração dos números');
    }
});

// Promessa com parâmetros para simular login
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Usuário ${login} logado com sucesso!`);
        }, 3000);
    });
}

// Função assíncrona principal que executa as promessas
async function execucaoPrincial() {
    console.log('Início');
    // Execução da promessa com parâmetros
    promiseComParametros('gian@gmail.com', 123456).then(resultado => console.log(resultado));
    try {
        // Execução da promessa pesada com await
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
    console.log('Fim');
}

// Chamada da função principal
execucaoPrincial();


