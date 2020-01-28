import React, { Component } from "react"
// import the nav information
import { Nav, NavItem, NavLink } from 'reactstrap'
// import the router information
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'

// import the pages
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import LearnMore from './pages/LearnMore'
import './styles.css'

class App extends Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <h1>This is a React Component</h1>
          {/* Getting the instance variable from the controller passed into the component and brought in as props */}
          <Nav className="nav-bar">
            <NavItem>
              <NavLink to="/home" tag={ Link }>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={ Link }>About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/more" tag={ Link }>Learn More</NavLink>
            </NavItem>
          </Nav>
          <Route path="/home" exact component={ Home } />
          <Route path="/about" exact component={ AboutMe } />
          <Route path="/more" exact component={ LearnMore } />
          <p>Hey there, { this.props.name }!</p>
        </React.Fragment>
      </Router>
    );
  }
}

export default App
