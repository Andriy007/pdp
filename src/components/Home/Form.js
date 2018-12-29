import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { Col, Button } from "react-bootstrap";
import { addArticle, deleteArticle } from "../../actions/actionCreators";

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  handleDelete = (e) => {
    // this.props.deleteArticle({ id: id })
  };
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Col className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </Col>
        <Button type="submit" className="btn btn-success btn-lg">
          SAVE
        </Button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    deleteArticle: article => dispatch(deleteArticle(article))
  };
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
