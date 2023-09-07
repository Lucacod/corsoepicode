import React, { Component } from 'react'
import Navigation from './Components/navbar/Navigation'
import Main from './Components/main/Main'
import Jumbotron from './Components/welcome/Jumbotron'
import Footer from './Components/footer/Footer'



export class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Jumbotron />
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App