import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import persistReducer from './reducers'
import mySaga from './sagas'
import { persistStore } from 'redux-persist'

export const history = createHistory();
const enhancers = [];

/** create the saga middleware **/
const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(
  connectRouter(history)(persistReducer),
  composedEnhancers,
);
export const persistor = persistStore(store);

window.store = store;

/** then run the saga **/
sagaMiddleware.run(mySaga);
