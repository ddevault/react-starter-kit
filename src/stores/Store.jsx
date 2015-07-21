import Dispatcher from '../Dispatcher';
import _ from 'underscore';

export class Store {
    constructor(name) {
        this.storeName = name;
        this.subscribers = [];
        this.handlers = {};

        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.notify = this.notify.bind(this);
        this.handle = this.handle.bind(this);
        this.handleAction = this.handleAction.bind(this);

        this.dispatchToken = Dispatcher.register(this.handleAction);
    }

    notify() {
        _.each(this.subscribers, (s) => s(arguments));
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback) {
        this.subscribers = _.filter(this.subscribers, (s) => s !== callback);
    }

    handle(name, callback) {
        this.handlers[name] = callback;
    }

    handleAction(action) {
        const handler = this.handlers[action.action];
        if (_.isFunction(handler)) {
            handler(action);
        }
    }

    dispatch(action, payload) {
        payload.action = action;
        Dispatcher.dispatch(payload);
    }
    
    static get(url) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                let result = JSON.parse(xhr.responseText);
                resolve(result);
            };
            xhr.onerror = () => {
                let result = JSON.parse(xhr.responseText);
                reject(result);
            };
            xhr.send();
        });
    }

    static post(url, data) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                let result = JSON.parse(xhr.responseText);
                resolve(result);
            };
            xhr.onerror = () => {
                let result = JSON.parse(xhr.responseText);
                reject(result);
            };
            xhr.send(data);
        });
    }
}

export default Store;
