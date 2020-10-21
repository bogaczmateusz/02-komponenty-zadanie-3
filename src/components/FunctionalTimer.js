import React, {Fragment, useState, useEffect} from 'react';

function FunctionalTimer() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        window.setInterval(() => {
            setCounter(prevScore => prevScore + 1);
        }, 1000);
    }, []);

    return (
        <div>
            <Fragment>
                <h2>This is a function-based timer, that shows, that you are here for: <span style={{color: '#f00'}}>{counter}</span> seconds.</h2>
            </Fragment>
        </div>
    )
}

export default FunctionalTimer;