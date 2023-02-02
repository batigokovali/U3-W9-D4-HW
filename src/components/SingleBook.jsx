import { Card, Col } from "react-bootstrap";
import { Component } from "react";
import CommentsArea from "./CommentsArea";

class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <>
        <Col lg={2} md={3} sm={6}>
          <Card
            onClick={() => {
              if (this.state.selected) {
                this.setState({
                  selected: false,
                });
              } else {
                this.setState({
                  selected: true,
                });
              }
            }}
            className={
              this.state.selected ? "selected-book card-fix" : "card-fix"
            }
          >
            <Card.Img
              variant="top"
              src={this.props.singleBook.img}
              className="image-fix"
            />
            <Card.Title>{this.props.singleBook.title}</Card.Title>
            <Card.Text>
              {this.props.singleBook.category} | {this.props.singleBook.price}€
            </Card.Text>
            {this.state.selected && (
              <CommentsArea asin={this.props.singleBook.asin}></CommentsArea>
            )}
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
