import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      book: []
    }
  }

  findBook = (e) => {
    e.preventDefault()
    const searchTerm = e.target.value
    const { onSearchBook } = this.props

    this.setState({
      ...this.state,
      input: searchTerm
    })
    onSearchBook(searchTerm)
  }

  render(){
    return(
      <div>
        <input type="search" id="book-search" onChange={this.findBook} />
        <button>Search</button>
      </div>
    )
  }




}
export default SearchBar
