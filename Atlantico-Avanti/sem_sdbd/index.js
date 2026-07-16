import {usuariosArray} from "./base.js";

import express from "express";

const app = express();
app.use(express.json());

app.listen(3000 , () => {
    console.log("Starting Express Server...");
    console.log(usuariosArray)
} );

app.get("/usuarios", (request, response) => {
    return response.status(200).json(usuariosArray);
});

app.get("/usuarios/:id" , (request, response) => {
    //Exemplo de URL esperada: localhost:3000/usuarios/1
    const usuario = usuariosArray.at(request.params.id - 1);
    return response.status(200).json(usuario);
})

app.post("/usuarios", (request, response) => {
    //const  { id, nome, idade } = request.body; //Parameter must have the same names - Using JSON body
    const  { id, nome, idade } = request.query //Parameter must have the same names - Using JSON Query Pameteres
    usuariosArray.push({id: id , nome: nome, idade: idade});
    return response.status(201).json({nome , idade});
});

app.put("/usuarios/:id" , (request, response) => {
    const { id } = request.params; //Exemplo de URL esperada: localhost:3000/usuarios/1
    const { nome, idade } = request.body; //Evitar URL já que um ou mais dados podem ser atualizados

    const data = usuariosArray.at(id - 1);
    nome != null ? data.nome = nome : data.nome;
    idade != null ? data.idade = idade : data.idade;

    return response.status(200).json(data);
})

app.patch("/usuarios", (request, response) => {
    const {id , nome, idade} = request.query;
    const data = usuariosArray.at(id - 1);

    nome != null ? data.nome = nome : data.nome;
    idade != null ? data.idade = parseInt(idade) : data.idade;

    return response.status(200).json(data);
})

app.delete("/usuarios/:id" , (request, response) => {
    const { id } = request.params; //Exemplo de URL esperada: localhost:3000/usuarios/1
    usuariosArray.splice(id - 1, 1);
    return response.status(200).json({message: "Usuário deletado com sucesso"});
})