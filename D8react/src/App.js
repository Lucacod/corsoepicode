import { Component } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import ErrorPage from './Components/pages/ErrorPage';
import BookDetails from './Components/pages/BookDetails';


//chiamata async await fetch passando le props
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      error: null
    };
  }


  async getBooks() {
    try {
      this.setState({ isLoading: true });
      const data = await fetch("https://epibooks.onrender.com/")
      const res = await data.json();
      this.setState({ books: res });
      this.setState({ isLoading: false });

    } catch (error) {
      console.log(error);
      this.setState({ error: error })

    }
  }

  //creato rotte per le pagine
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/book/:bookId' element={<BookDetails />} />

             

              
             <Route path='*' element={<ErrorPage/>}  />                
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;



