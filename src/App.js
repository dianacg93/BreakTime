import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import TriviaPage from "./pages/TriviaPage";
import JokesPage from "./pages/JokesPage";
import FactsPage from "./pages/FactsPage";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">
          Home
      </NavLink>
        <NavLink to="/trivia">
          Trivia
      </NavLink>
        <NavLink to="/jokes">
          Jokes
      </NavLink>
        <NavLink to="/facts">
          Facts
      </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/trivia">
          <TriviaPage />
        </Route>
        <Route exact path="/jokes">
          <JokesPage />
        </Route>
        <Route exact path="/facts">
          <FactsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;