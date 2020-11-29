import React from 'react';
import Nav from './Components/NavBar/NavBar'
import Rotas from './Rotas'
import { HashRouter } from 'react-router-dom'

export default class App extends React.Component  {

    render(){
      return  (
        <React.Fragment>
          <div className="container">
             
              <HashRouter>
                <Nav />
                <Rotas />
              </HashRouter>
            
          </div>
            
      </React.Fragment>
    )
  }
} 
