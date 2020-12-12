import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Book from '../books/Book';

class Books extends Component {
    render() {
        return (
           <Consumer>
               {value => {
                   const { book_list, heading } = value;

                   if(book_list === undefined || book_list.length === 0) {
                     return <Spinner/>
                   }else{
                     return (
                      <React.Fragment>
                        <h2 className="text-center mb-4">{heading}</h2>
                            <div className="row">
                              {book_list.map(item => (
                                  <Book key={item.results} book={item}/>
                              ))}
                            </div>
                      </React.Fragment>
                      
                     );
                   }
               }}
           </Consumer>
        );
    }
}

export default Books;