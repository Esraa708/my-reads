import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import Search from './Search';


class BooksApp extends Component {
  state = {

    books: []

  }
  componentDidMount = () => {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ books: myBooks })
    })
  }


  manageChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter(ele => ele.id !== book.id).concat([book])
      }))
    })
  }



  render() {
    return (

      <div className="app">
        <Route exact path='/' render={({ history }) => (
          <BookShelves books={this.state.books} updateChange={(book, shelf) => { this.manageChange(book, shelf) }}
          />

        )}
        />
        <Route path='/search' render={({ history }) => (
          <Search
            updateChange={(book, shelf) => { this.manageChange(book, shelf) }}
            shelfBooks={this.state.books} />
        )}
        />


        )}
      </div>

    );
  }
}


export default BooksApp
