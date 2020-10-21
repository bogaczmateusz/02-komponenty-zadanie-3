import React, { Fragment, Component } from 'react';
import ClassTimer from './components/ClassTimer';
import FunctionalTimer from './components/FunctionalTimer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <ClassTimer />
                <FunctionalTimer />
            </Fragment>
        )
    }
}

export default App;
