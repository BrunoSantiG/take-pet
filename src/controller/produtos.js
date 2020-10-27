const GatoFile = require('../mock-data/produtos-cat.json')
const CachorroFile = require('../mock-data/produtos-dog.json')
 

module.exports = { 
    
    getProdutos:(req,res)=>{
        const pet=req.query.animal
        let produtos
        if(pet==='cachorro'){
            produtos = CachorroFile.produtos.filter((value)=>{
                return value.nome.toLowerCase().includes(req.query.pesquisa.toLowerCase())
            })
        }else if(pet==='gato'){
            produtos = GatoFile.produtos.filter((value)=>{
                return value.nome.toLowerCase().includes(req.query.pesquisa.toLowerCase())
            })
        }

        

        return res.status(200).json({
            produtos
        })

    }
}