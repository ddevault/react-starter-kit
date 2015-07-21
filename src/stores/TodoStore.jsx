import Store from './Store';
import _ from 'underscore';

export class Todo {
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.done = json.done;
    }
}

export class TodoStore extends Store {
    constructor() {
        super("Todo");
        this._todos = null;
        this._state = "not-loaded";

        this.fetchIfNecessary = this.fetchIfNecessary.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateTodo = this.updateTodo.bind(this);

        super.handle("Update", this.handleUpdate);
    }

    get Todos() {
        return this._todos;
    }

    async fetchIfNecessary() {
        if (this._state === "not-loaded" || this._state === "errored") {
            this._state = "loading";
            try {
                let data = await Store.get("/todos.json");
                this._todos = data["todos"];
                this._state = "loaded";
                super.notify();
            } catch (error) {
                this._state = "errored";
            }
        }
    }

    updateTodo(id, done) {
        super.dispatch("Update", { id, done });
    }

    handleUpdate(payload) {
        let todo = _.find(this._todos, (t) => t.id === payload.id);
        if (_.isUndefined(todo)) {
            return;
        }
        todo.done = payload.done;
        super.notify();
        // Note: this could also handle things like letting the server know what's happened
        // todo.indeterminate = true;
        // super.notify();
        // let result = await super.post(`/api/todos/${todo.id}`, { todo.done });
        // todo.done = done;
        // todo.indeterminate = false;
        // super.notify();
    }
}

let store = new TodoStore();
export default store;
