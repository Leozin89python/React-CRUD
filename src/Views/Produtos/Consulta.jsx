import React from 'react'
import service from '../../App/ProductService'

export default class ConsultaProdutos extends React.Component   {

    state = {
        produtos: []
    }

    constructor()   {
        super()
        this.service = new service()
    }

    componentDidMount() {
        const prod = this.service.obterProd()
        this.setState({
            prod 
        })
    }

    render()    {
        return(

            <div className="card">
                <div    className="card-header">
                    consulta de produtos
                </div>
                <div className="card-body">
          
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>SKU</th>
                        <th>Preço</th>
                        <th>Fornecedor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.produtos.map(    (produto, indice) => {
                            return  (
                                <tr key={indice}>
                                    <th>{produto.nome}</th>
                                    <th>{produto.sku}</th>
                                    <th>{produto.preco}</th>
                                    <th>{produto.fornecedor}</th>
                                    <th></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
     </div>

        )
    }

}