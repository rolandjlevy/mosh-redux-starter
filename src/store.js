import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// devToolsEnhancer({ trace: true })
import reducer from './reducer';

// Redux devtools is a store enhancer

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  reducer, 
  devTools && devTools()
);

export default store;