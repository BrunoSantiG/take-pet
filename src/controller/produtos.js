const GatoFile = '../mock-data/produtos-cat.json'
const CachorroFile = '../mock-data/produtos-dog.json'
 
export function getProdutos(req,res){
    const pet=req.params.animal
    let arquivo
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