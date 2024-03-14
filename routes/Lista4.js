const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {

  const numeros = [1, 20, 17, 9]

  numeros.sort((a, b) => a - b)

  for (i=0; i<numeros.length; i++){
        console.log(numeros[i]);
  }
  
  // for(let n of numeros){
  //     console.log(n);
  // }
    retorno = {
      numeros,
    };
  
    res.json({ retorno });
  });

  module.exports = router