import React from 'react';
import { Row, Col, NavItem, Nav} from 'react-bootstrap'



const Services = ()=>
    {   
    return(
        <div className = "Services container" id="services">
           
            <Row>
            <hr></hr>
            <h2> Our Services </h2>
             <br></br>
             <hr></hr>
                 <Col className = "col-sm-6 col-md-3">
                    <div className = "card">
                        <Nav>
                         <NavItem class="fa fa-paint-brush fa-5x"></NavItem>
                            <h3>Web and Logo Design</h3> 
                         </Nav>
                    </div>
                </Col>
                <Col className = "col-sm-6 col-md-3">
                    <div className = "card">
                        <Nav>
                         <NavItem class="fa fa-laptop fa-5x"></NavItem>
                            <h3>Web Development</h3> 
                         </Nav>
                    </div>
                </Col>
                <Col className = "col-sm-6 col-md-3">
                    <div className = "card">
                        <Nav>
                         <NavItem class="fa fa-globe fa-5x"></NavItem>
                            <h3> Search Engine Optimization </h3>
                        </Nav>
                    </div>
                </Col>
                <Col className = "col-sm-6 col-md-3">
                    <div className = "card">
                        <Nav>
                         <NavItem class="fa fa-cogs fa-5x"></NavItem>
                            <h3> Website Maintenance </h3>
                        </Nav>
                    </div>
                </Col>
                
            </Row>
              
        </div>      
            
        )
    }
            
            

export default Services;