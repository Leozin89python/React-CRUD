const produtos = '_PRODUTOS'


export default class ProductService  {
 
    salvar = (produto) =>  {
        let prod = localStorage.getItem(produtos)

        if(!prod){
            prod = []
        }else{
            prod = JSON.parse(prod)
        }

        prod.push(produto)


        localStorage.setItem(produtos, JSON.stringify(prod) )
    }
}