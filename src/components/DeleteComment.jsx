import { Component } from "react";

export class DeleteComment extends Component {
  deleteComment = async () => {
    try {
      let postComment = await fetch(process.env.REACT_APP_BASEURL + this.props.cId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_AUTHTOKEN,
        },
      });
      console.log(postComment);
      postComment.ok !== false ? alert("Ho rimosso il tuo comment!") : alert("Qualcosa è andato storto!");
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <>
        <span onClick={this.deleteComment}>❌</span>
      </>
    );
  }
}
