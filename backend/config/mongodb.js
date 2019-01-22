const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(error => {
        const msg = 'Erro! Não foi possível conectar com o MongoDB'
        console.log(msg)
    })