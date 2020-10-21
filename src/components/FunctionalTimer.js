import React, { useState, useEffect } from 'react';

function FunctionalTimer() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevScore => prevScore + 1);
        }, 1000);

        // componentWillUnmount
        return () => clearInterval(interval);
    }, []);

    return <h2>This is a function-based timer, that shows, that you are here for: <span style={{color: '#f00'}}>{counter}</span> seconds.</h2>
}

export default FunctionalTimer;