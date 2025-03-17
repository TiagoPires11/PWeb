// 1. Altera o texto do <h1> para "Olá, mundo!" quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("titulo").textContent = "Olá, mundo!";
});

// 2. Adiciona um event listener ao botão que muda a cor de fundo do <h1> para vermelho quando clicado
document.getElementById("botao").addEventListener("click", function() {
    let h1 = document.getElementById("titulo");
    h1.style.backgroundColor = "red";
});

// 3. Cria um campo de texto e adiciona um event handler que imprime o valor do campo na consola ao pressionar Enter
document.getElementById("campoTexto").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("Texto digitado:", event.target.value);
        event.target.value = ""; // Limpa o campo após pressionar Enter
    }
});

// 4. Cria uma lista de elementos e adiciona um event handler que remove o elemento quando clicado
document.getElementById("lista").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

// Adiciona um event listener ao botão que muda o texto do <h1> e a cor de fundo para vermelho
document.getElementById("botao").addEventListener("click", function() {
    let h1 = document.getElementById("titulo");
    h1.textContent = "Botão clicado!"; // Alterar o texto
    h1.style.backgroundColor = "red"; // Alterar a cor de fundo
});


//** Declaração de variáveis e exemplos de tipos de dados **//

// var
var nome = "João";
console.log(nome);

nome = "Maria";
console.log(nome);

// let
let idade = 20;
console.log(idade);

idade = 21;
console.log(idade);

// const
const PI = 3.14;
console.log(PI);

// Tipos de dados
let frase = "Olá, mundo!";
console.log(typeof frase);

let numero = 10;
console.log(typeof numero);

let verdadeiro = true;
console.log(typeof verdadeiro);

let lista = ["banana", "maçã", "laranja"];
console.log(typeof lista);

let pessoa = { nome: "João", idade: 20 };
console.log(typeof pessoa);

let nulo = null;
console.log(typeof nulo);

let indefinido;
console.log(typeof indefinido);

// Criar um array com diferentes tipos de dados e imprimir cada um
let dados = ["João", 25, true, null, { profissao: "Desenvolvedor" }, [1, 2, 3]];
dados.forEach(elemento => console.log(elemento));

// Criar um objeto com diferentes propriedades e imprimir cada propriedade e valor na consola
let pessoa1 = {
    nome: "Carlos",
    idade: 30,
    profissao: "Engenheiro",
    ativo: true
};

for (let chave in pessoa1) {
    console.log(chave + ": " + pessoa1[chave]);
}
