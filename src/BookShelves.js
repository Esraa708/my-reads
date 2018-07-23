import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf';
class BookShelves extends Component {
    state =
        {
            books: []
        }
    manageChange = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(item => item.id !== book.id).concat([book])
                }))
            })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                    <Shelf title='Currently reading'
                        books={this.props.books.filter(element => element.shelf === 'currentlyReading')}

                        updateChange={(book, shelf) => { this.manageChange(book, shelf) }}
                    />
                    <Shelf title='Read'
                        books={this.props.books.filter(element => element.shelf === 'read')}
                        updateChange={(book, shelf) => { this.manageChange(book, shelf) }}
                    />
                    <Shelf title='Wants to read'
                        books={this.props.books.filter(element => element.shelf === 'wantToRead')}
                        updateChange={(book, shelf) => { this.manageChange(book, shelf) }}
                    />

                </div>
                <div className="open-search">
                    <Link to='/search'> Add a book </Link>
                </div>
            </div>
        );
    }
}

export default BookShelves;
