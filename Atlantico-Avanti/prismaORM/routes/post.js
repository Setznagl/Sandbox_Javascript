import {app} from "../app.js";
import prismaClient from "../db.js";

app.post("/v2/usuarios", async (req, res) => {
    const {nome, idade, email, password} = req.body;
    return res.status(201).send(await prismaClient.usuarios.create({
        data: {
            nome,
            idade,
            email,
            password
        }
    }));
});