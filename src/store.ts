import { createStore } from 'redux';
import { counterReducer } from './reducers/counter';

export const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));
