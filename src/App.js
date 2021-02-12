import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import TriviaPage from "./pages/TriviaPage";
import JokesPage from "./pages/JokesPage";
import FactsPage from "./pages/FactsPage";
import logo from './images/logo/logo.png';
// import Nav from 'react-bootstrap/Nav';


function App() {
  return (

    <Router>

      {/* I wanted to have an icon as the button for the nav */}
      <nav className="navigat">
        <div className="logo-header">
          <img src={logo} alt="Logo" width="160px" height="85px" />;
    </div>
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

// I'd like to have the drop down menu like this

// <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>

export default App;