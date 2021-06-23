import React, { Component } from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faHome,faPlus,faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default class NavbarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Restaurant List</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />  Home</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />  List</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} />  Create</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />  Search</Link></Nav.Link>
                                {
                                    localStorage.getItem('login')?
                                    <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} />  Logout</Link></Nav.Link>
                                    :<Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />  Login</Link></Nav.Link>           
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
