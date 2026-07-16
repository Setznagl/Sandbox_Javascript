import {app} from "../app.js";
import prismaClient from "../db.js";

app.put("/v2/usuarios/:id", async (req, res) => {
    const {nome , idade , email , password} = req.body;
    res.status(202).send(
        await prismaClient.usuarios.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome,
                idade,
                email,
                password
            }
        })
    )
})