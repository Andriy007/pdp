import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal } from "../../../actions/actionCreators";
import * as types from "../../../actions/actionTypes";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

class Register extends Component {

  showRegister = () => {
    this.props.showModal(types.MODAL_TYPE_REGISTER, {
      successSend: () => {
        this.props.showModal(types.MODAL_TYPE_SUCCESS);
      }
    });
  };

  toggleUserRegistration(){
    let message;
    if(this.props.title){
      message = <span className="link-register" onClick={this.showRegister}>{this.props.title}</span>;
    } else {
      message = <Button onClick={this.showRegister}>Register</Button>
    }
    return message;
  }

  render() {
    return (
      <div>{ this.toggleUserRegistration() }</div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  showModal
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Register)
