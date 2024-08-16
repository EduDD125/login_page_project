const express = require('express');
const fs = require('fs');
const path = require('path');

const routes = express.Router(); 


routes.post('/login', (req, res) => {
    const {email, password} = req.body

    fs.readFile(path.join(__dirname,'../users.json'), 'utf8', (err, data) => {
        if(err){
            return res.status(500).json({message: 'Erro ao ler arquivo'});
        }

        const savedUser = JSON.parse(data);

        if(savedUser.email == email && savedUser.password == password) {
            return res.status(200).json(savedUser);
        }
        return res.status(401).json({message: "Credenciais inválidas!"});
    })
})


routes.post("/create", (req, res) => {
    const {name, email, password} = req.body;
    const newUser = {
        name: name,
        email: email,
        password: password
    };
    if (!name || !email || !password ) return res.status(400).json({message:`Parametros de criação estão alsentes`})  
    fs.writeFile('users.json', JSON.stringify(newUser), (err) => {
        if(err) {
            return res.status(500).json({
                status: 500,
                error: err.message || 'Internal server error'
            });
        } 
        else {
            return res.status(201).json({
                message: `User ${name} created`
            });
        }
    })
})

module.exports = routes;