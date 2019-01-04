import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FormGroup, Button, Col, ControlLabel, FormControl, HelpBlock } from "react-bootstrap"
import "./styles.scss"


class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      formValid: false,
      validatePass: false,
      validateUserName: false,
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

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(this.props.login(username, password));
    }
  }
  validatePass() {
    const passwordLength = this.state.password.length;
    if (passwordLength >= 6) return 'success';
    else if (passwordLength >= 3) return 'warning';
    else if (passwordLength > 0) return 'error';
    return null
  }
  validateUserName() {
    const userNameLength = this.state.username.length;
    if (userNameLength >= 3) return 'success';
    else if (userNameLength >= 2) return 'warning';
    else if (userNameLength > 0) return 'error';
    return null
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password } = this.state;
    return (
      <Col md={2} mdOffset={5} className="login-container">
          <h2>Login</h2>
            <form name="form" onSubmit={this.handleSubmit}>
              <FormGroup
                validationState={this.validateUserName()}
              >
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  name="username"
                  type="text"
                  value={username}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Can't be empty</HelpBlock>
              </FormGroup>
              <FormGroup
                validationState={this.validatePass()}
              >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Can't be empty</HelpBlock>
              </FormGroup>
              <FormGroup>
                <Col sm={10} style={{ display: "flex"}}>
                  <Button type="submit" disabled={!this.state.username || !this.state.password}>Log in</Button>
                  <Link to="/register" className="btn btn-link">Register</Link>
                </Col>
              </FormGroup>
            </form>
        </Col>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
