import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal } from "../../../actions/actionCreators";
import * as types from "../../../actions/actionTypes";
import { bindActionCreators } from "redux";

class CreateBuildingObject extends Component {
  constructor(props) {
    super(props);

    this.showAddBuildingObjectModal = this.showAddBuildingObjectModal.bind(this);
  }

  showAddBuildingObjectModal(e){
    e.preventDefault();
    this.props.showModal(types.MODAL_TYPE_ADD_BUILDING_OBJECT);
  };

  render() {
    return (
      <span onClick={this.showAddBuildingObjectModal}>{this.props.title}</span>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  showModal,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CreateBuildingObject);
