React Based Web Application - hSenid Mobile Solutions

Selection Assessment - For Internship in Software Engineering

Welcome to my React based web application which shows the New York Times Best Selling Books List. https://developer.nytimes.com/ is used as the Books API. The web app can be able to list the book list, view more details of the selected book and can proceed to purchase from Amazon.

How to Run the application locally

1. Clone Repo
$ git clone ‘https://github.com/Suha1998/hSenid---React-Web-Application.git’

2. Install node modules
$ npm install

3. Run the application
$ npm start

      Runs the app in the development mode.\
      Open (http://localhost:3000) to view it in the browser.



Functionality of the application

• Can view the bestselling books list (including the image of the specific book, title of the book, author, publisher and the Isbn number)
• Contains two buttons in each card view which included details of the books
• View More 
• Buy Now On Amazon
• View More button- can view more details on the selected book
• Buy Now On Amazon – can proceed purchase from Amazon


Books API

https://developer.nytimes.com/ - API URL

The HTTP request that I have used to access the books details: 

https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=9fXXG1PxzkUIik2GozGDY1CniZTJV5Zy

I have used Context API here for this project.
