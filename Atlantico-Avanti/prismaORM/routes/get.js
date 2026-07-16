import {app} from "../app.js";
import prismaClient from "../db.js";

app.get("/v2/usuarios", async (req, res) => {
    res.status(200).send(await prismaClient.usuarios.findMany());
})

app.get("/v2/usuarios/:id", async (req, res) => {
    res.status(200).send((await prismaClient.usuarios.findUnique(
        { where: { id: parseInt(req.params.id) }},
    )))
})