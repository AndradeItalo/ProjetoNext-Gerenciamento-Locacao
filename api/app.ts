import {Request, Response} from 'express';

const express = require('express');
const app = express();

const db = require('./models/db');

app.get("/", async (req: Request, res: Response) => {
    res.send("Pagina inicial");
});

app.post("/cadastrar", async (req: Request, res: Response) => {
    res.send("cadastro");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});