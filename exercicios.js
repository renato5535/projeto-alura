//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.
const frase = 'esta é uma frase de exemplo.';


//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const valorNull = null;
let valorUndefined;



//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const Numero = 42;
const Texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;


//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const numero = 42;
const texto = '10';

const numeroConvertido = String(numero);
const textoConvertido = Number(texto);



//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const texto1 = 'Javascript é incrível!';

const maiusculas = texto1.toUpperCase();
const minusculas = texto1.toLowerCase();
const parteDaString = texto1.slice(0, 10);

console.log('Texto em maiúsculas: ' , maiusculas);
console.log('Texto em minúsculas: ' , minusculas);
console.log('Parte da string: ' , parteDaString);