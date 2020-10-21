import React, { Component } from 'react';

class ClassTimer extends Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        this.count = setInterval(() => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter + 1
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.count);
    }

    render() {
        return <h2>This is a class-based timer, that shows, that you are here from: <span style={{color: '#f00'}}>{this.state.counter}</span> seconds.</h2>;
    }
}

export default ClassTimer;
