import { listData } from './list-data';

export class Store {

    constructor(initialState) {
        this.state = initialState || {}
    }

    subscribers = []

    setState = (newState) =>  {
        this.state = {
            ...this.state,
            ...newState,
        }
    }

    getState = () => {
        return this.state
    }

    subscribe = (cb) => {
        this.subscribers.push(cb);
    }

    notify = (state) => {
        this.subscribers.forEach(cb => cb(state));
    }

}

export const store = new Store({items: listData});

