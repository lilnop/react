import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
    words = ["one","two","three"];

    render(){
        return(
            <div className="container">
                <h2> {this.words} </h2>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));