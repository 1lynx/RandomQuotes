import React, { Component } from 'react';
import quotes from './quotes.json';

import './App.css';

class App extends Component {

    state = {};

    componentWillMount() {
        this.genererCitation();
    };

    genererCitation = event => {
        const keyArray = Object.keys(quotes);
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if(this.state.quotes === quotes[randomKey]) {
            this.genererCitation();
            return;
        }
        this.setState(quotes[randomKey]);
    };


    render() {
        return (
            <div>
                <p>
                    {this.state.quoteText}
                    <span>- {this.state.quoteAuthor}</span>
                </p>
                <button onClick= {e => this.genererCitation(e)} >Une autre !</button>
            </div>
        );
    };
}

export default App;
