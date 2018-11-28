import React, { Component } from 'react'
import Book from '../book/book'

const AllBooks = ({ books, searchTerm, addToCart }) => (
    books.filter(book => (
      book.title.includes(searchTerm) || book.author.includes(searchTerm)
    )).map((book, idx) => (
         <Book key={idx} book={book} addToCart={addToCart}/>

    ))
)




export default AllBooks
