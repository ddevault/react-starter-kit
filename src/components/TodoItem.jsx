import React from 'react';
import TodoStore from '../stores/TodoStore';

export class TodoItem extends React.Component {
    constructor() {
        super();

        this.changed = this.changed.bind(this);
    }

    changed(event) {
        TodoStore.updateTodo(this.props.task.id, event.target.checked);
    }

    render() {
        return <li>
            <label>
                <input type="checkbox" checked={this.props.task.done} onChange={this.changed} />
                {this.props.task.title}
            </label>
        </li>;
    }
}

export default TodoItem;
