import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal, logout } from "../../../actions/actionCreators";
import * as types from "../../../actions/actionTypes";
import { bindActionCreators } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this)
  }

  showLoginModal = () => {
    this.props.showModal(types.MODAL_TYPE_LOGIN, {
      onReset: () => {
        this.props.showModal(types.MODAL_TYPE_PASSWORD_RESET, {
          successSend: () => {
            this.props.showModal(types.MODAL_TYPE_SUCCESS);
          }
        });
      },
    });
  };

  onLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  /*Deсides what to present to the client - Login or logout*/
  toggleLogin() {
    let loginOrLogout;
    if (this.props.login) {
      loginOrLogout = <span onClick={this.onLogout}>Déconnexion</span>
    } else if (this.props.title) {
      loginOrLogout = <span onClick={this.showLoginModal}>{this.props.title}</span>
    }
    return loginOrLogout
  }

  render() {
    return (
      <div>{this.toggleLogin()}</div>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  login: session.login,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showModal,
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
