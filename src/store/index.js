import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import rootReducer from './reducers';

const customMiddleware = store => next => action => {
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;
