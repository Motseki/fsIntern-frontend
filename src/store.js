// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Make sure you have the root reducer in a separate file

const store = createStore(rootReducer);

export default store;
