import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl,HelpBlock, Button, Col } from "react-bootstrap"
import { connect } from 'react-redux';

import { registration, addUserInfo } from "../../actions/actionCreators";


class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      },
      firstNameValid: false,
      LastNameValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    },
    () => { this.validateField(name, value) });
  }

  handleSubmit(event) {
    console.log("HHHH")
    event.preventDefault();
    const { user } = this.state;

    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(registration(user));
    }
  }
  validateField(name, value) {
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let LastNameValid = this.state.LastNameValid;

    switch(name) {
      case "firstName":
        firstNameValid = value.length > 0;
        break;
      case "lastName":
        LastNameValid = value.length > 0;
        break;
      case "password":
        passwordValid = value.length >= 6;
        break;
      default:
        break;
    }
    this.setState({
      passwordValid: passwordValid, firstNameValid:firstNameValid, LastNameValid: LastNameValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.passwordValid && this.state.LastNameValid});
  }


  render() {
    let passErorr = null;
    let nameError = null;
    if (!this.state.passwordValid) {
      passErorr = (
        <p style={{color: "red"}}>Password should be 6 characters</p>
      )
    }
    if (!this.state.firstNameValid || !this.state.LastNameValid) {
      nameError = (
        <p style={{color: "red"}}>Fields required</p>
      )
    }
    const { user } = this.state;
    return (
      <Col md={3} mdOffset={5}>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              name="firstName"
              type="text"
              value={user.firstName}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>{nameError}</HelpBlock>
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              name="lastName"
              type="text"
              value={user.lastName}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>{nameError}</HelpBlock>
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              name="username"
              type="text"
              value={user.username}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"
              type="password"
              value={user.password}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>{passErorr}</HelpBlock>
            <Button disabled={!this.state.formValid} onClick={this.handleSubmit} className="btn btn-primary">Register</Button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </FormGroup>
        </form>
      </Col>
    );
  }
}

const mapStateToProps = state => state.registration;

export default connect(mapStateToProps)(RegisterPage);
