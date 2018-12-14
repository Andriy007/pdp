import React from 'react'
import {Form, Button, Col, Grid} from "react-bootstrap"
import "./styles.scss"


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // this.setState({ submitted: true });
    // const { username, password } = this.state;
    // const { dispatch } = this.props;
    // if (username && password) {
    //   dispatch(userActions.login(username, password));
    // }
  }

  render() {
    // const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <Col md={2} mdOffset={5} className="login-container">
          <h2>Login</h2>
            <Form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                {submitted && !username &&
                <div className="help-block">Username is required</div>
                }
              </div>
              <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                {submitted && !password &&
                <div className="help-block">Password is required</div>
                }
              </div>
              <div className="form-group">
                <Button bsStyle="primary">Login</Button>

                {/*<Link to="/register" className="btn btn-link">Register</Link>*/}
              </div>
            </Form>
        </Col>
    );
  }
}
export default LoginPage;

// function mapStateToProps(state) {
//   const { loggingIn } = state.authentication;
//   return {
//     loggingIn
//   };
// }
//
// const connectedLoginPage = connect(mapStateToProps)(LoginPage);
// export { connectedLoginPage as LoginPage };
