import React from 'react'
import {HashRouter, Switch ,Route} from 'react-router-dom'

import Home from './Views/Home'
import Cadastro from './Views/Produtos/CadastroProdutos'
import Consulta from './Views/Produtos/Consulta'


export default () =>    {
    return  (
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/cadastro" component={Cadastro}/> 
                <Route exact={true} path="/consulta" component={Consulta} />
            </Switch>
        </HashRouter>
    )
}