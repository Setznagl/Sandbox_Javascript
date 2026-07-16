import {app} from "../app.js";
import prismaClient from "../db.js";

app.delete("/v2/usuarios/:id", async (req, res) => {
    return res.status(200).send(await prismaClient.usuarios.delete({
        where: {
            id: parseInt(req.params.id)
        }
    }));
});