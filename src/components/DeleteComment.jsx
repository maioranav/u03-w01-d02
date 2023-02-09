import { Component } from "react";

export class DeleteComment extends Component {
  deleteComment = async () => {
    try {
      let postComment = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.cId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZTQ1N2EyNDc4ZDAwMTNhMDU3ZjQiLCJpYXQiOjE2NzU5NDc0NDcsImV4cCI6MTY3NzE1NzA0N30.dLC47vqDLv1wEm6K_Y7ks50t-3s-_Z2EABONKbknvvA",
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
