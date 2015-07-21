import React from 'react';
import Example from './components/Example';

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Example />
            </div>
        );
    }
}

export default App;
