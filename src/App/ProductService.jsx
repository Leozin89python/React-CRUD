const produtos = '_PRODUTOS'

export function valideerro (errors)  {
    this.errors = errors
}

export default class ProductService  {
 

    validar = (produto) => {
        const errors = []


        if(!produto.nome)    {
            errors.push('O campo Nome é obrigatório!')
        }
        if(!produto.sku) {
            errors.push('O campo sku é obrigatório!')
        }
        if(!produto.descricao)  {
            errors.push('O campo descrição é obrigatório!')
        }
        if(!produto.preco || produto.preco <= 0)  {
            errors.push('O campo preço deve ser maior que zero! ')
        }
        if(!produto.fornecedor) {
            errors.push('O campo fornecedor é obrigatório!')
        }


        if(errors.length > 0){
            throw new valideerro( errors)
        }
    }

    salvar = (produto) =>  {
        this.validar(produto)

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