import React from 'react'
import Prod from '../../App/ProductService'


export default class Cadastro extends React.Component   {

    state = {
        nome:'',
        sku:'',
        descricao:'',
        preco:0.0,
        fornecedor:'',
        sucesso: false,
        errors: []
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


      
       const produto = {
           nome:this.state.nome,
           sku:this.state.sku,
           descricao:this.state.descricao,
           preco:this.state.preco,
           fornecedor:this.state.fornecedor
       }
       try{
           
        this.service.salvar(produto )
       this.setState({
           sucesso: true
     })
     }
     catch(erro){
        const errors = erro.errors
        this.setState({
            errors: errors
        })
     }
    }

    onClean = () => {
       this.setState({
        nome:'',
        sku:'',
        descricao:'',
        preco:0.0,
        fornecedor:'',
        sucesso: false
       })
    }

    render()    {
        return(
            <div className="card">

                <div className="card-header">
                    Cadastro de Produtos
                </div>
 

              {
                  this.state.sucesso ? 
                  (
                    <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                         <strong>OK!</strong>   Cadastro realizado com sucesso!
                    </div>
                  ) :   (
                      <React.Fragment>

                      </React.Fragment>
                  )
              }


              {

                     this.state.errors.length >0 &&
                     this.state.errors.map( msg =>  {
                         return (
                            <div className="alert alert-dismissible alert-danger">
                                 <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Ops!  Ocorreu um erro!</strong> 
                                {msg}
                            </div>
                         )
                     })

              }



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