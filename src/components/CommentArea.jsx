import { AddComment } from "./AddComment";
import { CommentsList } from "./CommentsList";
import { useState } from "react";

export const CommentArea = (props) => {
  const [needUpdate, setneedUpdate] = useState(false);

  return (
    <>
      <h3>Comments Section:</h3>
      {props.asin !== null && (
        <>
          <AddComment
            asin={props.asin}
            update={() => {
              setneedUpdate(true);
            }}
          />
          <CommentsList
            asin={props.asin}
            needUpdate={needUpdate}
            update={() => {
              setneedUpdate(true);
            }}
            updated={() => {
              setneedUpdate(false);
            }}
          />
        </>
      )}
    </>
  );
};
