import { Component } from "react";
import { AddComment } from "./AddComment";
import { GetComments } from "./GetComments";

export class Comments extends Component {
  state = {
    asin: this.props.asin,
  };
  render() {
    return (
      <>
        <AddComment asin={this.state.asin} />
        <GetComments asin={this.state.asin} />
      </>
    );
  }
}
