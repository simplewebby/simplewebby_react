import React from 'react';
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import TG from './imgs/TG.jpg'
const Navigation = ()=>
    {   
        return(
            <div className="Navigation" >
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#simplewebby.com"><Image src={TG} alt="logo image" responsive/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={1} href="#services">
                            Services
                        </NavItem>
                        <NavItem eventKey={2} href="#gallery">
                            Our Work
                        </NavItem>
                        
                        </Nav>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="mailto:simplewebby@outlook.com" target="_self">
                            Contact Us
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>      
            
        )
    }
            
            

export default Navigation;