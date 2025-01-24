import React, {useState} from 'react';

function CounterApp(){
    //initialize state
    const [count, setCount] = useState(0);

    //increment function
    const increment = () => {
        setCount(count + 1)
    };

    //decrement
    const decrement = () => {
        setCount(count - 1);
    };

        return(
            <div style={{textAlign: 'center'}}>
            <p>Count: {count}</p>
            <button onClick={increment} className='btn btn-primary mr-5'>Increment</button>
            <button onClick={decrement} className='btn btn-primary'>Decrement</button>
            </div>
        )
    }
export default CounterApp;