import React from "react";
import { connect } from "react-redux";
import { deleteGroup } from "../../actions/actionCreators";

const ConnectedList = (props) => (
  <ul className="list-group list-group-flush">
    {props.group.map(el => (
      <li className="list-group-item" style={{display: "flex", justifyContent: "space-between"}} key={el.id}>
        <span>{el.title}</span>
        <button onClick={(e) => props.deleteGroup(el.id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { group: state.group };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteGroup: id => dispatch(deleteGroup(id))
  };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
