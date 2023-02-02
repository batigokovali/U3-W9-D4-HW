import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentsArea extends Component {
  render() {
    return (
      <>
        <Card.Text>lorem :D</Card.Text>
      </>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }
}

export default CommentsArea;
