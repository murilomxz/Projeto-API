const express = require('express')



const autenticar = (req, res, next) => {
    const token = req.headers['authorization']
    if (token === 'senai123') {
        next()
    } else {
        res.status(401).send('Acesso negado!')
    }
}

module.exports = autenticar