const GatoFile = require('../mock-data/produtos-cat.json')
const CachorroFile = require('../mock-data/produtos-dog.json')
 

module.exports = { 
    
    getProdutos:(req,res)=>{
        const pet=req.params.animal
        let produtos
        if(pet==='cachorro'){
            produtos = CachorroFile.produtos
        }else if(pet==='gato'){
            produtos = GatoFile.produtos
        }

        const produtos_filter = produtos.filter((value)=>{
            return produtos.nome.toLowerCase().include(req.params.pesquisa.toLowerCase())
        })

        return res.status(200).json({
            produtos_filter
        })

    }
}