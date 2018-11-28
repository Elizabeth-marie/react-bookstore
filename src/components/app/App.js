import React, { Component } from 'react';
import Header from '../header-footer/header'
import AllBooks from '../all-books/all-books'
import SearchBar from '../search-bar/search-bar'
import Cart from '../cart/cart'

class App extends Component {
  constructor(){
    super()
    this.state = {
     books: [],
     searchTerm: ''
  }
 }

 async componentDidMount() {
   const response = await fetch('http://localhost:8082/api/books')
   const json = await response.json()
   if(!json[0]) return
   this.setState({
     ...this.state,
     books: json
   })
 }


onSearchBook = (searchTerm) => {
  this.setState({
    ...this.state,
    searchTerm
  })
}

addToCart = (id) => {
  this.setState({
    ...this.state,
    books: this.state.books.map(book => {
      if(book.id === id) book.inCart = true
      return book
    })
  })
}

  render() {
    return (
      <div className="container">
      <Header />
      <SearchBar onSearchBook={this.onSearchBook}/>
      <AllBooks books={this.state.books} searchTerm={this.state.searchTerm} addToCart={this.addToCart}/>

      <div>
        <h2>Cart</h2>
        <ul>
          <Cart books={this.state.books} total={this.state.books.filter(book => book.inCart).reduce((acc, book) => { return acc + parseInt(book.price) }, 0).toFixed(2)}/>
        </ul>
      </div>

    </div>
    )
  }
}

export default App
