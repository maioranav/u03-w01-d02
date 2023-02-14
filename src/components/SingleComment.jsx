import { Component } from "react";
import { DeleteComment } from "./DeleteComment";

export const SingleComment = (props) => {
  return (
    <>
      <li key={props._id}>
        <DeleteComment cId={props._id} update={props.update} /> <span className="valutazione">{props.rate}</span> {props.comment}
      </li>
    </>
  );
};
