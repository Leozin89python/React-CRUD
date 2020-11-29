import React from 'react'
import {Link} from 'react-router-dom'

export default function Home()    {

    return(

        
        <div className="jumbotron">
            <h1 className="display-3">Log&Cia&copy;</h1>
            <p className="lead">Sistema Logístico</p>
         <hr className="my-4"/>
            <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/cadastro" role="button">Cadastro</Link>
         </p>
        </div>
    )
 }