import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
    // i declared a constructor
    constructor(props){
        super(props)

        this.state = {
            words: ["one","two","three"],
            newquote: 'Quote will start changing after 2 seconds'
        }

        this.displayquotes = this.displayquotes.bind(this);
    }

    displayquotes(){

        setInterval(() => {
            
            let quote = this.state.words[Math.floor(Math.random() * this.state.words.length)];

            this.setState({newquote: quote})

        },3000)

        return <h1> {this.state.newquote } </h1>
    } 


    render(){
        return(
            <div className="container">
                <h2> {this.displayquotes() } </h2>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));