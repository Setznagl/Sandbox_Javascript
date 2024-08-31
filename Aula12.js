let serie = {
    nome: "Arcane",
    generos: {
        genero_1: "Drama",
        genero_2: "Fantasia",
        genero_3: "Steampunk"
    },
    nrTemporadas: 2,
    status: "Em andamento",
    classificacao: 18,
    nrEpisodios: {
        temp_1: 12,
        temp_2: 15,
        temp_3: 18
    }
}

console.log(serie);
console.log(serie.nome);
console.log(" ")

//for in , for of , foreach (Iteração em array em objetos)

//For in
let carros = {
    modelo : "Buggati",
    ano: 2010,
    cor: "Laranja"
}
for(let key in carros){
    console.log(`${key}:${carros[key]}`)
}

console.log(" ")
//For of
const jogadores = ['Jogador 1' , 'Jogador 2']

for(let jogador of jogadores){
    console.log(jogador);
}

