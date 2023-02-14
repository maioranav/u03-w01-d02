import { Card, Button } from "react-bootstrap";

export const SingleBook = (props) => {
  return (
    <Card className={props.selected === props.asin ? "cardselezione" : ""} style={{ width: "10rem", marginBottom: "2rem" }} key={props.asin}>
      <Card.Img className="w-100" variant="top" src={props.img} onClick={() => props.selState(props.asin)} />
      <Card.Body className="d-flex flex-column h-100 justify-content-between">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>ASIN: {props.asin}</Card.Text>
        <Button variant="danger">{props.price} €</Button>
      </Card.Body>
    </Card>
  );
};
