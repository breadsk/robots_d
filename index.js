
const express = require("express");
const app = express();

const port = 3001;

const { getRobots , getRobotById } = require("./controllers/robots.controller");

//-------------------------------------


app.get("/", getRobots);

app.get("/:id" , getRobotById)



//-------------------------------------

app.listen(port,()=> {    
    console.log(`Conectado correctamenta al puerto ${port}`);
    console.log(`Puerto ${port} disponible`);
});