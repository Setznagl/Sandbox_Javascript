import {Pool} from "pg";

export const pool = new Pool({
    user: "p",
    password: "p",
    host: "localhost",
    port: 5432,
    database: "psql_sgbd",
});