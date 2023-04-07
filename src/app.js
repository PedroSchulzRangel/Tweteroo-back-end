import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

const users = [];

const tweets = [];

let username="";

let avatar =""; 

app.use(cors());

app.use(express.json());


app.post("/sign-up", (req, res) => {
    
    username = req.body.username;

    avatar = req.body.avatar;

    if(!username || !avatar){
        return res.status(422).send("Preencha todos os campos de login");
    }

    users.push({username, avatar});
   
    res.send("OK");
});

app.post("/tweets", (req,res) => {
    
    const isRegistered = users.find((user) => user.username === username);

    if(!isRegistered){
        return res.status(401).send("UNAUTHORIZED");
    }
    
    username = req.body.username;
    
    const tweet = req.body.tweet;

    if(!tweet){
        return res.status(422).send("Preencha o nome do tweet");
    }
    
    tweets.push({username, tweet});

    res.send("OK");

});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));