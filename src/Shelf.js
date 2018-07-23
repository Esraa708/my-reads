import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    updateChange = (book, shelf) => {
        this.props.updateChange(book, shelf);
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title"> {this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.length > 0 && this.props.books.map((element, index) => (
                                <li key={index}>
                                    <Book book={element}
                                        updateChange={(book, shelf) => { this.updateChange(book, shelf) }} />
                                </li>
                            ))

                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;
