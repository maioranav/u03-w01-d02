import { Jumbotron, Container } from "react-bootstrap";
const Welcome = (props) => {
  return (
    <>
      <Jumbotron fluid className={props.className}>
        <Container>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </Container>
      </Jumbotron>
    </>
  );
};
export default Welcome;
