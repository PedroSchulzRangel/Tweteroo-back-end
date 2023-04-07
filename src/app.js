import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

const users = [];

app.use(cors());

app.use(express.json());


app.post("/sign-up", (req, res) => {
    
    const {username, avatar} = req.body;

    if(!username || !avatar){
        return res.status(422).send("Preencha todos os campos de login");
    }

    users.push({username, avatar});
   
    res.send("OK");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));