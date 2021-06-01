// import configureStore from './store/configureStore';
// import * as actions from './store/actions';

import configureStore from './store/bugs-configureStore';
import * as actions from './store/bugs-with-dux-and-toolkit';

const store = configureStore();

// This gets called every time the state of the store changes
// UI components subscribe to the store so they get notofied when the store's state changes
const unsubscribe = store.subscribe(() => {
  console.log('store changed', store.getState());
});

// When we dispatch an action our store calls a reducer which returns the updated state
// Then all the subscribers get notified

store.dispatch(actions.bugAdded({ description: 'This is bug 1' }));
store.dispatch(actions.bugAdded({ description: 'This is bug 2' }));
store.dispatch(actions.bugAdded({ description: 'This is bug 3' }));
store.dispatch(actions.bugResolved({ id: 1 }));
store.dispatch(actions.bugRemoved({ id: 2 }));

// unsubscribe();

const state = store.getState();

console.log({state});