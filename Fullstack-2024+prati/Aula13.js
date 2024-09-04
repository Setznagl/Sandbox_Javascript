//Exercício 01

let professor = {
    grades: {
            aluno1: 8,
            aluno2: 7.5,
            aluno3: 7,
            aluno4: 9,
            aluno5: 2,
            aluno6: 6
        }
}

let somaEX1 = 0;
let qtdEX1 = 0;
for (const key in professor.grades){
        console.log(key , professor.grades[key]);
        somaEX1 += professor.grades[key];
        qtdEX1 ++;
    }
let mediaEX1 = somaEX1 / qtdEX1;
console.log(mediaEX1);
mediaEX1 > 6 ? console.log("Professor com indice acima da media!") : console.log("Professor com indice abaixo da media!")

//Exercício 02

let biblioteca = [
    livro1 = {
        titulo : "O Senhor do Anéis o Retorno do Rei",
        dt_publicacao : 1955
    },
    livro2 = {
        titulo : "Essencialismo",
        dt_publicacao : 2015
    },
    livro3 = {
        titulo : "IT",
        dt_publicacao : 2014
    },
    livro4 = {
        titulo : "Memórias Póstumas de Brás Cubas",
        dt_publicacao : 1881
    },
];

for (const livro of biblioteca) {
    livro.dt_publicacao < 2000 ? console.log(`O título é : ${livro.titulo} e a data de publicação é de : ${livro.dt_publicacao}`) : livro;
};

// Exercício 03

let filmes = [
   filme1 = {titulo: "Forrest Gump",genero: "Drama"},
   filme2 = {titulo: "A Espera de Um Milagre",genero: "Drama"},
   filme3 = {titulo: "Resgate do Soldado Ryan",genero: "Histórico"},
   filme4 = {titulo: "Os Fantasmas de Scrooge",genero: "Animação"},
];
let genreCount = {}

filmes.forEach(filme => {
    if(genreCount[filme.genero]){
        genreCount[filme.genero]++
    }else{
        genreCount[filme.genero] = 1;
    }
});

for(let generoObjetoCounter in genreCount){
    console.log(`Existem ${genreCount[generoObjetoCounter]} filmes no genero ${generoObjetoCounter}`)
}