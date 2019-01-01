import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';

const MyFooter = ()=>
    {   
        return(
            <div className="Footer" >
                <h5>Handmade by simplewebby.com &copy; 2019 </h5>
                    <div className="socialmedia">
                        <Nav>
                            <NavItem href="https://www.linkedin.com/in/tsagan-g-599473157/" class="fa fa-linkedin fa-lg"></NavItem>
                            <NavItem href="https://github.com/simplewebby" class="fa fa-github fa-lg"></NavItem>
                            <NavItem href="mailto:simplewebby@outlook.com" target="_self" class="fa fa-envelope fa-lg"></NavItem>
                        </Nav>
                    </div> 
            </div>      
            
        )
    }
            
            

export default MyFooter;