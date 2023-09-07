import React, { Component } from 'react'

export class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid bg-light mt-5">
      <div class="container">
        <h1>Benvenuto nel nostro sito</h1>
        <p>Scopri in nostri prodotti e immergiti nel mondo fantasy...</p>
        <button class="btn btn-primary mb-5">Scopri di più</button>
      </div>
    </div>
      
    )
  }
}

export default Jumbotron