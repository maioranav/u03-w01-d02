import { Container } from "react-bootstrap";
const MyFooter = (props) => {
  return (
    <>
      <footer className="fixed-bottom bg-dark text-light">
        <Container>
          <h6 className="text-center mt-2">{props.content}</h6>
        </Container>
      </footer>
    </>
  );
};
export default MyFooter;
