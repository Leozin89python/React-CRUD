import React from 'react'
import Prod from '../../App/ProductService'


export default class Cadastro extends React.Component   {

    state = {
        nome:'',
        sku:'',
        descricao:'',
        preco:0.0,
        fornecedor:''
    }

    constructor()   {
        super()
         this.service = new Prod()
    }

    onChange = (e) => {
        const valor = e.target.value
        const nomeDoCampo = e.target.name
        this.setState({
                [nomeDoCampo] : valor 
        })
    }

    onSubmit = (e) =>   {
        console.log(this.state) 
    }

    onClean = () => {
       this.setState({
        nome:'',
        sku:'',
        descricao:'',
        preco:0.0,
        fornecedor:''
       })
    }

    render()    {
        return(
            <div className="card">

                <div className="card-header">
                    Cadastro de Produtos
                </div>

                <div className="card-body">

                    <div className="row"> 
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: * </label>  
                                    <textarea  
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.onChange}
                                    className="form-control" />
                                </div>
                            </div>
                        
                       
                        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU: * </label>
                                        <textarea 
                                        name="sku"
                                        value={this.state.sku} 
                                        onChange={this.onChange}
                                        className="form-control" />
                                    </div> 
                                </div>  
                            </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição</label>
                                        <textarea 
                                        name="descricao"
                                        value={this.state.descricao}
                                        onChange={this.onChange}
                                        className="form-control" />
                                </div>
                            </div>
                        </div>
                
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço</label>
                                        <textarea 
                                        name="preco"
                                        value={this.state.preco}
                                        onChange={this.onChange}
                                        className="form-control" />
                                </div>
                            </div>
                    
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor</label>
                                    <textarea 
                                    name="fornecedor"
                                    value={this.state.fornecedor}
                                    onChange={this.onChange}
                                    className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.onClean} className="btn btn-primary">Limpar</button>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}