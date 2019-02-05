import React, { PureComponent }   from "react";

import "./style.scss"

class Modal extends PureComponent {

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.hide()
    }, 6000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  closeResponse = () => {
    this.props.hide()
  };

  render () {
    return (
      <div className="modal-container">
        <div className="modal-body">
          <span className="error-text">{this.props.message}</span>
          <button className="button-close" onClick={this.closeResponse}>Close</button>
        </div>
      </div>
    )
  }
}

export default Modal
