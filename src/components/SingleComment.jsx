import { Component } from "react";
import { DeleteComment } from "./DeleteComment";

export class SingleComment extends Component {
  render() {
    return (
      <>
        <li key={this.props._id}>
          <DeleteComment cId={this.props._id} /> <span className="valutazione">{this.props.rate}</span> {this.props.comment}
        </li>
      </>
    );
  }
}
