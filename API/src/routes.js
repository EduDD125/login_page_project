const express = require('express');

const routes = express.Router(); 

routes.post('/login', (req, res) => {
    console.log("Post endpoint at /login page");
})

module.exports = routes;