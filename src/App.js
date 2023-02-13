import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import fantasy from "./jsonlib/fantasy.json";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome"
import MyFooter from "./components/MyFooter"
import { BookList } from './components/BookList';
import { Row, Col, Container } from 'react-bootstrap';
import { CommentArea } from './components/CommentArea';
import { Component } from 'react';

class App extends Component {
  state = {
    selected: null
  }

  handleState = (value) => {
    if (value !== this.state.selected) {
      this.setState({ ...this.state, selected: value });
    } else {
      this.setState({ ...this.state, selected: null });
    }
  };

  render() {
    return (
      <div className="App">
        <MyNav brand="EpiBooks" />
        <Welcome title="Epicode's Bookshelf" subtitle="Your Epicode Books at a glance!" className="mt-5" />
        <Container>
          <Row>
            <Col>
              <BookList booklist={fantasy} handleState={this.handleState} selected={this.state.selected} />
            </Col>
            {this.state.selected !== null && <>  <Col>
              <CommentArea asin={this.state.selected} />
            </Col></>}
          </Row>
        </Container>
        <MyFooter content="Made with ❤️ by Vincenzo Maiorana" />
      </div>
    )
  };
}

export default App;
