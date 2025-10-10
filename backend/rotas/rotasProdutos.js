const express = require('express')
const fs = require('fs')
const router = express.Router()
const Autenticar = require('../middlewares/autenticador')

router.get('/', (req, res) => {
    try {
        fs.readFile('./dados/produtos.json', 'utf8', (err, data) => {
            if (err) return res.status(500).send("Erro ao ler arquivo")
            const dados = JSON.parse(data)
            res.json(dados);
        })
    } catch {
        res.status(500).send('Erro ao ler arquivo')
    }
})

router.get('/:id', (req, res) => {
    try {
        fs.readFile('./dados/produtos.json', 'utf8', (err, data) => {
            if (err) return res.status(500).send("Erro ao ler arquivo")
            const conteudo = JSON.parse(data)
            const id = parseInt(req.params.id)
            const ProdutoEncontrada = conteudo.find((Produto) => Produto.id === id)

            if (!ProdutoEncontrada) {
                return res.status(404).send("Produto não encontrada")
            }

            res.json(ProdutoEncontrada)
        })
    } catch {
        res.status(500).send('Erro ao ler arquivo')
    }
})

router.post('/', Autenticar, (req, res) => {
    try {
        fs.readFile('./dados/produtos.json', 'utf8', (err, data) => {
            let produtos = JSON.parse(data)
            const descricao = req.body.descricao
            const status = req.body.status
            if (isNaN(id)) {
                res.status(400).send("Id precisa ser um número");
            }
            else if(!req.body){
                res.status(400).send("O Produto precisa de informações!");
            }
            else if (req.body.descricao == '') {
                res.status(400).send("Descrição vazia");
            }
            else if (typeof req.body.descricao != "string") {
                res.status(400).send("Descrição precisa ser do tipo string");
            }
          
            else{
            produtos.push({
                id: produtos.length + 1,
                descricao: descricao,
                status: status
            })
           
                fs.writeFile('./dados/produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                    res.status(201).send("Produto adicionado com sucesso!")
                })}
            })
           }   catch {
                    res.status(500).send('Erro ao processar solicitação')
                }
            })
            

router.delete('/:id', Autenticar, (req, res) => {
    try {
        fs.readFile('./dados/produtos.json', 'utf8', (err, data) => {
            if (err) return res.status(500).send("Erro ao ler arquivo")
            let produtos = JSON.parse(data)
            const id = parseInt(req.params.id)
            const index = produtos.findIndex((Produto) => Produto.id === id)
         
            if (index == -1) {
                return res.status(404).send("Produto não encontrado! Verifique o ID.")
            }
            else{
         
            produtos.splice(index, 1)
            

            fs.writeFile('./dados/produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                if (err) return res.status(500).send("Erro ao escrever arquivo")
                res.status(200).send("Produto removido com sucesso!")
            })}
        })
    } catch {
        res.status(500).send('Erro ao processar solicitação')
    }
})

router.put('/:id', Autenticar, (req, res) => {
    try {
        fs.readFile('./dados/produtos.json', 'utf8', (err, data) => {
            if (err) return res.status(500).send("Erro ao ler arquivo")
            let produtos = JSON.parse(data)
            const id = parseInt(req.params.id)
            const index = produtos.findIndex((Produto) => Produto.id === id)
            if (isNaN(id)) {
                res.send("Id precisa ser um número");
            }
            else if(!req.body){
                res.status(400).send("O Produto precisa de informações!");
            }
            else if(index == -1){
                res.status(400).send("Produto não foi encontrada! Insira o ID Certo!");
            }
            else if (req.body.descricao == '') {
                res.status(400).send("Descrição vazia");
            }
            else if (typeof req.body.descricao != "string") {
                res.status(400).send("Descrição precisa ser do tipo string");
            }
        
             else{
            produtos[index] = {
                id: id,
                descricao: req.body.descricao,
                status: req.body.status
            }

            fs.writeFile('./dados/produtos.json', JSON.stringify(produtos, null, 2), (err) => {
                if (err) return res.status(500).send("Erro ao escrever arquivo")
                res.status(200).send("Produto atualizado com sucesso!")
            })}
        })
    } catch {
        res.status(500).send('Erro ao processar solicitação')
    }
})

router.options('/', (req, res) => {
    res.header('Allow', 'POST,OPTIONS,GET')
    res.status(204).send()
})

router.options('/:id', (req, res) => {
    res.header('Allow', 'OPTIONS,GET,DELETE,PUT')
    res.status(204).send()
})



module.exports = router