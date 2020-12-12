import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';


 class Details extends Component {
     state ={
         books: {}
     };

     componentDidMount(){
        axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=9fXXG1PxzkUIik2GozGDY1CniZTJV5Zy`
            )

          .then(res => { 
              this.setState({ books: res.data.results.books });
          })
          .catch(err => console.log(err))
     }

    render() {
        const { books } = this.state;
        console.log(books);
       if( books === undefined || Object.keys(books).length === 0 ) 
       {
             return <Spinner/>
       }else
       {
           return (
               <React.Fragment>
                  <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                  <div className="card">
                  <h5 className="card-header">
                      {books.title}
                  </h5>
                   <div className="card-body">
                       <p className="card-text">
                       {books.title} by {' '} <span className="text-secondary">
                          {books.author}
                      </span>
                       </p>
                    </div>
                    </div>
                        <ul className="list-group mt-3">
                            <li className="list-group-item">
                               <strong>Description</strong>: {books.description}
                            </li>
                            <li className="list-group-item">
                               <strong>ISBN 10</strong>: {books.primary_isbn10}
                            </li>
                            <li className="list-group-item">
                               <strong>ISBN 13</strong>: {books.primary_isbn13}
                            </li>
                            <li className="list-group-item">
                               <strong>Publisher</strong>: {books.publisher}
                            </li>
                            <li className="list-group-item">
                               <strong>Book URI</strong>: {books.book_uri}
                            </li>
                        </ul>
                   
               </React.Fragment>
           );
       }
    }
}


export default Details;

