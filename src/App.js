import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router'
import PropTypes from 'prop-types'
import routes from './routes'
import Layout from './components/Layout/'



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
