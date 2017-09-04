import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
class Counter extends Component {
    render() {
        return (
        <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
        </div>
        )
    }
}
const reducer = (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
    }
};

const store = createStore(reducer);
console.log(store.getState());

const  render=()=>ReactDOM.render(
    <Counter value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})} onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>,
    document.getElementById('root')

);

render();
store.subscribe(render);


