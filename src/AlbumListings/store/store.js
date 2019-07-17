import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore as createReduxStore,
} from 'redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import requestData from './epics';
import {albums} from './reducers';

const createStore = () => {
  const rootEpic = combineEpics(requestData);
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];

  const enhancers = [];
  let composeEnhancers = compose;

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createReduxStore(
    combineReducers({albums}),
    composeEnhancers(applyMiddleware(...middleware), ...enhancers),
  );
  
  epicMiddleware.run(rootEpic);
  
  return store;
};

export default createStore;
