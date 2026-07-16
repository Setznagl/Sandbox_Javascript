import {app} from "../app.js";
import {pool} from "../db.js";

app.post("/usuarios", async (req, res) => {
    const {nome, idade} = req.body;
    await pool.query("INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *", [nome, idade], (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            return res.status(500).json({error: "Internal server error"});
        } else {
            return res.status(201).json(results.rows[0]);
        }
    });
});