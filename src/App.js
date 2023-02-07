import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <div className="App">
      <MyNav brand="EpiBooks" />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
