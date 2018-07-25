import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book'

class Search extends Component {
    state = {
        books: []
    }
    updateChange(book, shelf) {
        this.props.updateChange(book, shelf)
    }
    bringBooks(query) {

        if (!!query) {

            BooksAPI.search(query).then(info => {
                if (!!info.error) {
                    this.setState({
                        books: []
                    });
                } else {
                    let examineShelves = info.map(book => {
                        for (var i = 0; i < this.props.shelfBooks.length; i++) {
                            if (this.props.shelfBooks[i].id === book.id) {
                                book.shelf = this.props.shelfBooks[i].shelf;
                            }

                        }
                        return book;
                    })
                    this.setState({
                        books: examineShelves
                    })
                }

            })

        } else {
            this.setState({ books: [] })
        }

    }


    render() {
        return (

            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/">Close search</Link>                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author"
                            onChange={(e) => { this.bringBooks(e.target.value) }} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.length !== 0 &&
                            this.state.books.map((book, index) => (
                                <Book
                                    key={index}
                                    book={book}
                                    updateChange={(book, shelf) => { this.updateChange(book, shelf) }}


                                />
                            ))
                        }
                    </ol>
                </div>
            </div>


        );
    }
}

export default Search;
