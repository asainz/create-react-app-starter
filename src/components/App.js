import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { add, addAsync } from '../actions/counter';

class App extends Component {
    constructor(props) {
        super(props);

        this.addNumber = this.addNumber.bind(this);
        this.addNumberAsync = this.addNumberAsync.bind(this);
    }

    addNumber() {
        this.props.add(Math.random());
    }

    addNumberAsync() {
        this.props.addAsync('Async ' + Math.random());
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <p>Cargando</p> : <p>Num: {this.props.num}</p>}
                <button onClick={this.addNumber}>Add number</button>
                <button onClick={this.addNumberAsync}>Add number async</button>
            </div>
        );
    }
}

export default connect((state) => ({
    num: state.counter.get('num'),
    isFetching: state.counter.get('isFetching')
}), (dispatch) => ({
    add: add(dispatch),
    addAsync: addAsync(dispatch)
}))(App);
