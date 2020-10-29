import { listData } from './list-data';

export class Store {

    constructor(initialState) {
        this.state = initialState || {}
    }

    subscribers = []

    setState = (newState) =>  {
        this.state = {
            ...this.state,
            items: [
                ...this.state.items,
                newState,
            ]
        }
        this.notify(this.state);
    }

    getState = () => {
        return this.state
    }

    subscribe = (cb) => {
        this.subscribers.push(cb);
        return () => this.unSubscribe(cb);
    }

    notify = (state) => {
        this.subscribers.forEach(cb => cb(state));
    }

    unSubscribe = (cb) => {
        this.subscribers = this.subscribers.filter(subs => subs !== cb)
    }

}

export const store = new Store({items: listData});

