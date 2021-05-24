import store from './store';

import { 
  bugAdded, 
  bugRemoved,
  bugResolved
 } from './actions'

// This gets called every time the state of the store changes
// UI components subscribe to the store so they get notofied when the store's state changes
const unsubscribe = store.subscribe(() => {
  console.log('store changed', store.getState());
});

// When we dispatch an action our store calls a reducer which returns the updated state
// Then all the subscribers get notified
store.dispatch(bugAdded('This is bug 1'));

// unsubscribe();

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));

const state = store.getState();

console.log({state});