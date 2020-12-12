import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        book_list: [],
        heading: 'Best Selling Books'
    };

    componentDidMount(){
        axios.get(
            'https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=9fXXG1PxzkUIik2GozGDY1CniZTJV5Zy'
            )

          .then(res => { 
              this.setState({book_list: res.data.results.books});
          })
          .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;