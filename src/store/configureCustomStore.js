import { createStore } from 'redux';

import reducer from './reducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

export default function configureStore() {
  const store = createStore(reducer, devTools && devTools());
  return store;
};