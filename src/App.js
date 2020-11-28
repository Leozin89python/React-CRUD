import React from 'react';
import Nav from './Components/NavBar/NavBar'
import Rotas from './Rotas'

export default class App extends React.Component  {

    render(){
      return  (
        <React.Fragment>
          <div className="container">
              <Nav />
              <Rotas />
            </div>
            
      </React.Fragment>
    )
  }
} 
