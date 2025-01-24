import React, {Component} from 'react';

class CounterApp extends Component{
    constructor(props){
        super(props);

        //initalize
        this.state = {
            count: 0
        }
    }

    //increment
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment} className='btn btn-primary mr-5'>Increment</button>
                <button onClick={this.decrement} className='btn btn-primary'>Decrement</button>
            </div>
        )
    }
}

export default CounterApp;