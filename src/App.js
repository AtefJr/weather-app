import "./App.css";
import { SearchBar } from "./components/SearchBar.js";
import { City } from "./components/City.js";
import { Footer } from "./components/Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="top-banner">
          <div className="container">
            <h1 className="heading"> Simple Weather App </h1>
            <Switch>
              <Route exact path="/" render={() => <SearchBar> </SearchBar>} />
              <Route exact path="/city/:city/:Name/:Country" component={City} />
            </Switch>
          </div>
        </header>{" "}
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
