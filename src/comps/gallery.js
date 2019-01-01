import React from 'react';
import {   Row, Col, Image, Button } from 'react-bootstrap'
import img1 from './imgs/img1.jpeg'
import img4 from './imgs/img4.jpeg'
import img2 from './imgs/img2.jpeg'



const Gallery = ()=>
    {   
    return(
        <div className = "Gallery container" id="gallery">
           
            <Row>
            <hr></hr>
             <h2> Our Work </h2>
             <hr></hr>
                <Col className = "col-sm-6 col-md-4">
                    <div className = "thumbnail" >
                        <Image src={img4} thumbnail responsive />
                            <div className = "caption">
                                <h3>Employee Management System </h3>
                                    <p>Vue.JS project employee Management System</p>
                                <Button><a href="https://polar-reef-56085.herokuapp.com/#/" className="btn btn-info" >See Project </a></Button>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "thumbnail" >
                        <Image src={img1} thumbnail responsive />
                            <div className = "caption">
                                <h3>WordPress Website</h3>
                                 <p>Website for my friend using wordpress platform</p>
                               <Button><a href="http://teamoliveirabjj.com/" className="btn btn-info" >See Project </a></Button>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "thumbnail" >
                        <Image src={img2} thumbnail responsive />
                            <div className = "caption">
                                <h3>MEAN Stack Web Application</h3>
                                    <p> MEAN Stack Web Application "Yammy Tummy" </p>
                                <Button><a href="https://arcane-retreat-83737.herokuapp.com/" className="btn btn-info" >See Project </a></Button>
                            </div>
                    </div>
                </Col>
            </Row>
              
        </div>      
            
        )
    }
            
            

export default Gallery;