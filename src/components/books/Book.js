import React from 'react';
import { Link } from 'react-router-dom';

 const Book = (props) => {
     const { book } = props;

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                
                <div className="card-body">
                <center>
                    <img src= {book.book_image} alt="" width="150px" height="250px"></img>
                    <br/><br/>
                   <h5>{book.title}</h5>
                   </center>
                   <p className="card-text">
                       <br/>
                     <strong>
                        <i className="fas fa-user-edit"></i>  Written By
                     </strong>: {book.author}
                     <br/> 
                     <strong>
                     <i className="fas fa-book-open"></i>  Description
                     </strong>: {book.description}
                     <br/> 
                     <strong>
                        <i className="fas fa-user"></i>  Publisher
                     </strong>: {book.publisher}
                     <br/> 
                     <strong>
                        <i className="fas fa-user"></i>  Isbn
                     </strong>: {book.primary_isbn10}
                     <br/>
                   </p>
                    <center>
                    <Link to={`/books/${book.primary_isbn10}`} 
                    className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i>  View More
                    </Link>
                    <br/><br/>
                    <a href = {book.amazon_product_url}
                    className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i>  Buy Now On Amazon
                    </a>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Book;