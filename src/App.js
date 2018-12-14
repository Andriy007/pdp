import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router'
import PropTypes from 'prop-types'
import routes from './routes'
import Layout from './components/Layout/'
import {store} from './store'
import {initSession} from './actions/actionCreators';

/** initializate session **/
/** set the session id into cookies by making simple request to the server **/
store.dispatch(initSession());

class App extends Component {

  render() {
    return (
      <Layout>
        <ConnectedRouter history={this.props.history}>
          {routes}
        </ConnectedRouter>
      </Layout>
    )
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
