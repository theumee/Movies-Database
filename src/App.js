import "./App.css";
import Header from "./components/Header";
import Genres from "./components/Genres";
import Movies from "./components/Movies";
import AllLatest from "./components/AllLatest";
import AllTopRated from "./components/AllTopRated";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Genres} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/Latest" component={AllLatest} />
          <Route exact path="/TopRated" component={AllTopRated} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
