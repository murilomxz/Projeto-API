const express = require('express')
const app = express()
const port = 3000
const rotasProdutos = require ('./rotas/rotasProdutos')
const rotaslogger = require ('./middlewares/logger')



app.use(express.json())
app.use(rotaslogger)
app.use('/produtos', rotasProdutos)


app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})