import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export const AddComment = (props) => {
  const [state, setState] = useState({ comment: "", rate: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    SubmitComment();
  };

  const SubmitComment = async () => {
    try {
      let postComment = await fetch(process.env.REACT_APP_BASEURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_AUTHTOKEN,
        },
        body: JSON.stringify({ ...this.state, elementId: props.asin }),
      });
      postComment.ok !== false ? alert("Grazie per il tuo commento!") : alert("Qualcosa è andato storto!");
      props.update();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          id="commentInput"
          placeholder="Inserisci commento"
          value={state.comment}
          onChange={(e) => {
            setState({ ...state, comment: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Control
        as="select"
        className="mb-3"
        onChange={(e) => {
          setState({ ...state, rate: e.target.value });
        }}
        style={{ marginRight: "20px", display: "inline-block", width: "30%" }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};
