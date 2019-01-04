import React, { Component } from "react";
import List  from "./List"
import Form from "./Form"
import {Col, Row} from "react-bootstrap"
// import "./styles.scss"


class HomePage extends Component  {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Row className="row mt-5">
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
  }

}
export default HomePage;
