import React from 'react'
import './assets/sass/index.scss'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store, persistor, history} from './store'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App history={history}>
      </App>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
