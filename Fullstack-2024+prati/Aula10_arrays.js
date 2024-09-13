let thingList = Array();

thingList = ['hardware', 'gadgets', 'pessoas'];

thingList['hardware'] = Array();
thingList['gadgets'] = Array();
thingList['pessoas'] = Array();

thingList['hardware'][0] = 'Notebook';
thingList['hardware'][1] = 'Mouse';
thingList['hardware'][2] = 'Bateria';
thingList['gadgets'][0] = 'Carregador';
thingList['gadgets'][1] = 'Organizador de cabos';
thingList['pessoas'][0] = 'Aristóteles';

console.table(thingList);
// ordernar   .sort()  irá reordenar os índices de 'hardware' array em ThingList
console.table(thingList['hardware'].sort());

//Para arrays com índices nomeados utilizar foreach e demais 

let numberList = Array();

numberList[0] = 112;
numberList[1] = 20;
numberList[2] = 15.2;
numberList[3] = 235;
numberList[4] = 5;

console.log(numberList.sort((a, b) => a - b));

console.log(`Para obter o valor dentro do índice se usa por exemplo
     numberList.indexOf(235) que resulta ${numberList.indexOf(235)} `);

console.log(`Se o elemento não existir = ${numberList.indexOf(500)} `);     