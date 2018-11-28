import React, { Component } from 'react'

// class Book extends Component {
//   constructor(props){
//     super(props)
//   }
//
// render() {
// const { book: { id, title, author, price }, addToCart }  = this.props
//
// return (
//   <div>
//     <li>{title} by {author}
//     <button onClick={() => addToCart(id)}>Buy for:${price}</button>
//     </li>
//   </div>
// )
//   }
// }



const Book = ({ book: { id, title, author, price }, addToCart }) => (
    <li id={id}>
        {`${title}, By: ${author}`}
        <button onClick={() => addToCart(id)}>Buy for ${price}</button>
    </li>
)

export default Book
