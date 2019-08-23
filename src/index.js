import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
    // i declared a constructor
    constructor(props){
        super(props)

        this.state = {
            words: ["one","two","three",'Quote', 'will', 'start', 'changing', 'after 5', 'second'],
            newquote: 'Quote will start changing after 2 seconds'
        }


        setInterval(() => {
            
            let quote = this.state.words[Math.floor(Math.random() * this.state.words.length)];
 
             this.setState({newquote: quote})
         },2000)
    }


    render(){
        
        return(
            <div className="container">
                <h2> {this.state.newquote } </h2>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));