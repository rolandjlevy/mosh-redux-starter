import store from './store';

store.dispatch({
  type: 'BUG_ADDED',
  payload: {
    description: 'bug_1'
  }
});

const state = store.getState();

console.log({state});