import { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { SingleComment } from "./SingleComment";

export const CommentsList = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchComment = async (asin) => {
    try {
      let results = await fetch(process.env.REACT_APP_BASEURL + asin, {
        headers: {
          Authorization: process.env.REACT_APP_AUTHTOKEN,
        },
      });
      let data = await results.json();
      await setComments(data);
      await setLoading(false);
      props.updated();
    } catch (e) {
      setError(true);
      setLoading(false);
      props.updated();
    }
  };

  useEffect(() => {
    fetchComment(props.asin);
  }, [props.needUpdate]);

  useEffect(() => {
    fetchComment(props.asin);
  }, [props.asin]);

  return (
    <>
      <h6 className="mt-3">Commenti: </h6>
      {isLoading && <Spinner animation="border" variant="danger" />}
      {error && <Alert variant="danger"> C'è stato un errore nell'elaborare la richiesta!</Alert>}
      <ul className="elencoCommenti p-0">
        {error === false && isLoading === false && comments.length < 1 && <li>Non ci sono commenti su questo libro.</li>}
        {comments.length > 0 && comments.map((c) => <SingleComment {...c} key={c._id} update={props.update} />)}
      </ul>
    </>
  );
};
