const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

    // res.json(req.body)

    const numeros = req.body.nota

    // for(i=0; i<=numeros.length; i++){
    //     console.log(numeros[i]);
    // }
    
    let soma = 0
    for(let n of numeros){
        soma += n
    }

    const media = soma / numeros.length

    res.json({media})
})

module.exports = router