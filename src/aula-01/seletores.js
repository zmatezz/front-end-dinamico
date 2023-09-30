/* var nome = "Matheus";
let nome1 = "Matheus";
const nome3 = "Matheus";

const idade = 18;
idade = 20; */

/* Desestruturar objetos em arrays */
/* const endereço = {
  nome : "Av. Paulista",
  numero : 1000,
  eRua: true,
  complemento:{
    linha1: "",
    linha2: "",
  }
} */

/* const { nome, complemento: { linha1} } = endereço; */

/* Require é um metodo dentro do node */
/* Bundle é o arquivo final de produção, que é minimizado de produção */
/* Algumas dependencias precisam usam outras dependencias */

/* const {} = require("fs"); */
/* Possibilita ler arquivos, acessar pastas */


/* class Pessoa {
  constructor(nome){
    this.nome = nome;
  }
} */

/* function pessoa1(nome){
  return {
    nome
  }
}

const pessoa = new Pessoa("Victor");
const pessoaTeste = pessoa1 ("Teste"); */

const { JSDOM } = require("jsdom");

const dom = new JSDOM(`!DOCTYPE html <p><span>Teste 123</span></p>
<p id="paragrafo">meu id de paragrafo</p>
`);

const document = dom.window.document;

const paragrafo = document.querySelector("p");
const paragrafos = document.querySelectorAll("p");


console.log(paragrafo);
console.log(paragrafos);

console.log(paragrafo.innerHTML);

paragrafo.textContent = "Hello World";

console.log(paragrafo.innerHTML);



/* Quando tem um constructor, tem que passar new para instaciar a classe */
/* Template string, em vez de aspas é uma crases duplas e nela voce consegue ter quebras de linha que nao sejam possiveis */

/* QUerySelector pega o primeiro elemento que ele encontrar conforme ele recebe parametro */
/* QuerySelectorAll pega todos os elementos que ele encontrar conforme ele recebe parametro */

/* sempre que apertamos . no js ela disponibiliza metodos e atributos por exemplo*/
const numeros = [1, 2, 3]

/* for each é uma funcao que percorre um array e executa uma função por vez */

numeros.forEach((numero) => {
  console.log(numero);
})

numeros.forEach(function(item){
  console.log("numero: ",  item);
});

for (let i = 0; i < numeros.length ; i++){
  console.log("numeros:", numeros[i]);
  
}
numeros.length; 


/* GetElementById, Class é outra forma de pegar o elemento pelo id */

const paragrafoID = document.getElementById("paragrafo");

/* sempre uma coisa pode ser nula, é bom colocar ? antes de acessar o atributo, para caso nao encontre nao lançar uma excessao no codigo*/
console.log(paragrafoID?.textContent)

/* GetElementsByClassName, pega mais de um elemento com a classe */

console.log(paragrafoClass[0].textContent);

/* get attribute pega os elementos da tag, por exemplo o href de um link */