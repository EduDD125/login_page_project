const express = require('express');

const routes = express.Router(); 

const users = [{
    id:1,
    nome:'User',
    email:'user@gmail.com',
    password:'123456'
}]

routes.post('/login', (req, res) => {
    const {email, password} = req.body

    user = users.find(user => user.email == email && user.password == password)
    
    if(user) return res.status(200).json(user);
    else return res.status(401).json({message: 'Credencial Inválida'});
    
})

module.exports = routes;