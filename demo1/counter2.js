import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
        this.onIncrement=this.onIncrement.bind(this);
        this.onDecrement=this.onDecrement.bind(this)
    }
    onIncrement(){
        this.setState(prevState => ({
            count: prevState.count+1
        }));
        console.log(this.state.count)
    }
    onDecrement(){
        this.setState(prevState=>({
            count:prevState.count-1
    }))
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Counter/>,
    document.getElementById('root2')

);




