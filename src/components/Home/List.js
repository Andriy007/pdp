import React from "react";
import { connect } from "react-redux";



const ConnectedList = ({ article }) => (

  <ul className="list-group list-group-flush">
    {article.map(el => (
      <li className="list-group-item" key={el.id} onClick={() => this.props.actions.deleteArticle(el)}>
        {el.title}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { article: state.article };
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;
