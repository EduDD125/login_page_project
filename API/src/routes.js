const express = require('express');
const fs = require('fs')

const routes = express.Router(); 

const users = [{
    nome:'User',
    email:'user@gmail.com',
    password:'123456'
}]

routes.post('/login', (req, res) => {
    const {email, password} = req.body

    const user = users.find(user => user.email == email && user.password == password)
    
    if(user) return res.status(200).json(user);
    else return res.status(401).json({message: 'Credencial Inválida'});
    
})


routes.post("/create", (req, res) => {
    const {name, email, password} = req.body;
    const body = {
        name: name,
        email: email,
        password: password
    };

    if (true) { // fazer lógica de criação de usuários únicos

        fs.writeFile('users.json', JSON.stringify(body), (err) => {
            if(err) {
                res.status(500).json({
                    status: 500,
                    error: err.message || 'Internal server error'
                });
            } else {
                res.status(201).json({
                    status: 201,
                    message: `User ${name} created`
                });
                console.log('The file has been saved!');
            }
        })
    }
})

module.exports = routes;