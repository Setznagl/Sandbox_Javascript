import {app} from "../app.js";
import {pool} from "../db.js";

app.delete("/usuarios/:id", async (req, res) => {
    await pool.query("DELETE FROM usuarios WHERE id = $1", [req.params.id], (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            return res.status(500).json({error: "Internal server error"});
        } else {
            return res.status(202).json({message: "Usuario deleted successfully"});
        }
    });
});
