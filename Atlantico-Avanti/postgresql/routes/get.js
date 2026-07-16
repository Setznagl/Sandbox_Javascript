import {app} from "../app.js";
import {pool} from "../db.js";


app.get("/usuarios", async (req, res) => {
    await pool.query("SELECT * FROM usuarios", (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            return res.status(500).json({ error: "Internal server error" });
        } else {
            return res.status(200).json(results.rows);
        }
    });
});

app.get("/usuarios/:id", async (req, res) => {
    await pool.query("SELECT * FROM usuarios WHERE id = $1", [req.params.id], (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            return res.status(500).json({ error: "Internal server error" });
        } else {
            return res.status(200).json(results.rows);
        }
    })
})