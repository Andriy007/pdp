import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../../actions/actionCreators";

const ConnectedList = (props) => (
  <ul className="list-group list-group-flush">
    {props.article.map(el => (
      <li className="list-group-item" style={{display: "flex", justifyContent: "space-between"}} key={el.id}>
        <span>{el.title}</span>
        <button onClick={(e) => props.deleteArticle(el.id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { article: state.article };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteArticle: id => dispatch(deleteArticle(id))
  };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
