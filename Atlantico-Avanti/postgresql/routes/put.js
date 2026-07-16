import {app} from "../app.js";
import {pool} from "../db.js";

app.put("/usuarios/:id", async (req, res) => {
    const {nome, idade} = req.body;
    await pool.query("UPDATE usuarios SET nome = $1, idade = $2 WHERE id = $3 RETURNING *", [nome, idade, req.params.id], (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            return res.status(500).json({error: "Internal server error"});
        } else {
            return res.status(200).json(results.rows[0]);
        }
    });
});
