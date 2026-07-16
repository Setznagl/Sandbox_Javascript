import {app} from "./app.js";
import "./routes/get.js";
import "./routes/post.js";
import "./routes/put.js";
import "./routes/delete.js";

app.listen(3000 , () => {
    console.log("Starting Express Server...");
} );




