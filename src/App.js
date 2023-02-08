import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import fantasy from "./jsonlib/fantasy.json";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome"
import MyFooter from "./components/MyFooter"
import { BookList } from './components/BookList';

function App() {
  return (
    <div className="App">
      <MyNav brand="EpiBooks" />
      <Welcome title="Epicode's Bookshelf" subtitle="Your Epicode Books at a glance!" className="mt-5" />
      <BookList booklist={fantasy} />
      <MyFooter content="Made with ❤️ by Vincenzo Maiorana" />
    </div>
  );
}

export default App;
