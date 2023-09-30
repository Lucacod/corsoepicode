import React, { Component } from 'react'
import './jumbotron.css'









export class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron bg-light mt-5">
        <div className="container text-center">
          <h1>Benvenuto nel nostro sito</h1>
          <p>Scopri in nostri prodotti e immergiti <br /> nel mondo fantasy...</p>

        </div>
      </div>


    )
  }
}

export default Jumbotron;