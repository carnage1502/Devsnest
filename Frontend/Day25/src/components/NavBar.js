import React, { Component } from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default class NavBar extends Component {
    render() {
        return (
            <Router>
            <div>
             <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home" style={{marginLeft: "-100px"}}>Carnage</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home"} style={{marginLeft: "50px"}}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                </>
            </div>
            <div>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            </div>
            </Router>
        )
    }
}
