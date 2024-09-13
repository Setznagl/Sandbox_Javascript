// Callback functions, passando funções como parâmetro

function showFunction(sucessCallback, errorCallback) {
    if (true) { sucessCallback("Sucesso na requisição"); }
    else { errorCallback("Falha na requisição"); };
};

let sucessCallback = function (message) {
    console.log(message)
};

let errorCallback = function (message) {
    console.error
};

showFunction(sucessCallback, errorCallback);

//Funções pré mapeadas
console.log("Gabriel".length);
console.log("Gabriel".charAt(0));

let testeEspacoBranco = "TEspEmBranco      ";
let nomeGato = "Lilith";
let nomeGato2 = "MedeiaGataGorda"
console.log(nomeGato.replace('Lilith', 'Medeia'));
console.log(nomeGato2.replace('Mede', 'Dormede'));

/* Cria uma nova string cortando a que já existe
A partir do caractere 0 busca os 10 seguintes */
console.log(nomeGato2.substring(0, 10));

console.log(nomeGato.toUpperCase());
console.log(nomeGato.toLowerCase());

console.log("Antes da remocao com trim");
console.log(testeEspacoBranco.length);
console.log(testeEspacoBranco.trim());
//Length com o trim
console.log("Após tratamento com o trim para remocao de espaco em branco");
console.log(testeEspacoBranco.trim().length);


//Matemáticos

//Arredonda pra cima
console.log(`Número arredondamento > ${Math.ceil(100.73)}`);

//Arredonda pra baixo
console.log(`Número arredondamento < ${Math.floor(100.73)}`);

//Arredonda pra cima acima de 5 e pra baixo abaixo de 5
console.log(`Número arredondamento >5 ou <5 ${Math.round(100.73)}`);

//Raiz quadrada
console.log(`Número raiz ${Math.sqrt(100)}`);

//Potênciação com expoente
console.log(`Número potenciado ${Math.pow(100 , 2)}`);

//Aleatório entre maiores que 0,0 e menores que 1
console.log(`Numero randomico ${Math.random()}`);

//Limitado a casas decimais
console.log(`Numero 100.25466 limitado em 2 numeros de casas apos a virgula ${100.25466.toFixed(2)}`);



//Formatação de datas

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.toString());

date.setDate(date.getDate() + 720);
console.log(date);

//Data convertida em milisegundos
console.log(date.getTime());