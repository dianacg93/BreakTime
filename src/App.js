import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import TriviaPage from "./pages/TriviaPage";
import JokesPage from "./pages/JokesPage";
import FactsPage from "./pages/FactsPage";
import logo from './images/logo/logo.png';

function App() {
  return (

    <Router>
      <nav className="navigat">
        <div className="logo-header">
          <img src={logo} alt="Logo" width="160px" height="85px" />
        </div>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/trivia">Trivia</NavLink>
          <NavLink className="nav-link" to="/jokes">Jokes</NavLink>
          <NavLink className="nav-link" to="/facts">Facts</NavLink>
        </div>
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
  )
}

export default App;