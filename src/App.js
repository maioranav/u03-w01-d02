import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import fantasy from "./jsonlib/fantasy.json";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome"
import MyFooter from "./components/MyFooter"
import { BookList } from './components/BookList';
import { Row, Col, Container } from 'react-bootstrap';
import { CommentArea } from './components/CommentArea';
import { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(null)

  const handleState = (value) => {
    if (value !== selected) {
      setSelected(value)
    } else {
      setSelected(null);
    }
  };

  return (
    <div className="App">
      <MyNav brand="EpiBooks" />
      <Welcome title="Epicode's Bookshelf" subtitle="Your Epicode Books at a glance!" className="mt-5" />
      <Container>
        <Row>
          <Col className="order-1 order-md-0">
            <BookList booklist={fantasy} handleState={handleState} selected={selected} />
          </Col>
          {selected !== null && <> <Col xs={10} md={6} lg={4} className="order-0 order-md-1 mb-5">
            <CommentArea asin={selected} />
          </Col></>}
        </Row>
      </Container>
      <MyFooter content="Made with ❤️ by Vincenzo Maiorana" />
    </div>
  )
};

export default App;
