import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { logout } from "../../actions/actionCreators"
import List  from "./List"
import Form from "./Form"
import { Col, Row } from "react-bootstrap"

import "./styles.scss"

 const HomePage = (props) => (
      <Row>
        <Col smOffset={11} sm={12}>
          <Link to="/authenticate" onClick={(e) => props.logout()}>Logout</Link>
        </Col>
        <Col className="invitation">
          <h1>Hi {props.user.firstName}!</h1>
          <p>You're logged!!!</p>
        </Col>
        <Col mdOffset={1} md={4}>
          <h2>Groups</h2>
          <List />
        </Col>
        <Col mdOffset={1} md={4}>
          <h2>Add a new group</h2>
          <Form />
        </Col>
      </Row>
)

const mapStateToProps = state => state.authentication;

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
