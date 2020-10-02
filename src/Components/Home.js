import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookcases: [
                {
                    id: 1,
                    genre: "History",
                    books: [
                        {name: "Roman History"}
                    ]
                },
                {
                    id: 2,
                    genre: "Sci-Fi",
                    books: [
                        {name: "Foundation Series"}
                    ]
                }
            ],
        };
    }

    renderBookCases() {
        return this.state.bookcases.map(bookcase => {
                return(
                    <div className="bookcase" key={bookcase.id}>
                        <h2>{bookcase.genre}</h2>
                        {bookcase.books.map(book => {
                          return (
                            <div>
                                <h3>{book.name}</h3>
                            </div>
                          );  
                        })}
                    </div>
                );
            });
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Library</h1>
                <h2>Books are sorted into genres by bookcase</h2>
                {this.renderBookCases()}
            </div>

        );
    }
}



export default Home;