import React, { Component } from 'react'
import CartItem from '../cart-item/cart-item'

class Cart extends Component {

  render() {
    const books = this.props.books
    .filter(book => book.inCart)
    .map((book, idx) => {
      return <CartItem key={idx} book={book}/>
    })
    return <div>
      {books}
      <p>Total: ${this.props.total}</p>
    </div>
  }
}

export default Cart
