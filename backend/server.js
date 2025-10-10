const express = require('express')
const app = express()
const port = 3000
const rotasProdutos = require ('./rotas/rotasProdutos')
const rotasAdmin = require ('./rotas/rotasAdmin')
const rotaslogger = require ('./middlewares/logger')



app.use(express.json())
app.use(rotaslogger)
app.use('/produtos', rotasProdutos)
app.use('/Admin', rotasAdmin)

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})