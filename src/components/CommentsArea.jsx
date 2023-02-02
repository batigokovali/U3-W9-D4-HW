import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentsArea extends Component {
  state = {
    comments: [],
  };
  fetchComments = async () => {
    try {
      let response = await fetch(url + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzJjMDUwMWZlODAwMTU2MGMyMzUiLCJpYXQiOjE2NzUzNDY2MjQsImV4cCI6MTY3NjU1NjIyNH0.L9TWAnkkI6V95MFjHRHarcB_cj1rJo5fo-QWNsZgByE",
        },
      });
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return this.state.comments.map((comment) => {
      return (
        <CommentsList key={comment._id} singleComment={comment}></CommentsList>
      );
    });
  }
}

export default CommentsArea;
