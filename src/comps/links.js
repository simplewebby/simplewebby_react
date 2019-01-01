import React from 'react';
import { Nav, NavItem } from 'react-bootstrap'

const Links = ()=>
    {   
    return(
        <div className = "links">
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
            
            

export default Links;