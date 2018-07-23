import React, { Component } from 'react';

class Book extends Component {
    processChange(value){
        this.props.updateChange(this.props.book,value)
    }
    render() {
        let bookCover;
        if(!! this.props.book.imageLinks){
            bookCover = this.props.book.imageLinks.thumbnail;
        } else {
            bookCover = "url('http://via.placeholder.com/170*122')"
        }
        return (
            
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})`}}></div>
                <div className="book-shelf-changer">
                  <select
                  value={this.props.book.shelf || 'none'}
                  onChange={(e) => this.processChange(e.target.value)}>
                 
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}
              </div>
            </div>
          
        );
    }
}

export default Book;
