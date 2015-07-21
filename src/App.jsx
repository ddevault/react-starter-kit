import React from 'react';
import _ from 'underscore';
import TodoStore from './stores/TodoStore';
import TodoItem from './components/TodoItem';

export class App extends React.Component {
    constructor() {
        super();

        this.state = {};

        this.computeState = this.computeState.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);

        TodoStore.subscribe(this.computeState);
    }

    componentWillMount() {
        this.computeState();
    }

    computeState() {
        TodoStore.fetchIfNecessary();
        this.setState({ todos: TodoStore.Todos });
    }

    render() {
        let todos = [];
        if (this.state.todos !== null) {
            todos = _.map(this.state.todos, (t) => <TodoItem key={t.id} task={t} />);
        }

        return (
            <div>
                <h1>Todo list</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default App;
