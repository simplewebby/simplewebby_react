import React from 'react';
import { Row, Col } from 'react-bootstrap'



const Process = ()=>
    {   
    return(
        <div className = "Process container" id="process">
           
            <Row>
            <hr></hr>
            <h2> The Process </h2>
             <br></br>
             <hr></hr>
                <Col className = "col-sm-6 col-md-4">
                    < div className = "card" >
                        <span className = "glyphicon glyphicon-phone"> </span>
                            <div className = "caption">
                                <h3>Meet </h3>
                                    <p>The first step is to know more about you and your business. This is where
                                    we will get an idea how to create a custom strategy to achieve project's goal</p>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "card" >
                        <span className="glyphicon glyphicon-calendar"></span>
                            <div className = "caption">
                                <h3>Plan</h3>
                                    <p>Following the initial meetup, we will outline your project. Now, we have a strategic
                                    plan in place that will help us to accomplish your vision </p>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "card" >
                        <span className="glyphicon glyphicon-console"></span>
                            <div className = "caption">
                                <h3>Design and Develop </h3>
                                    <p>Once is plan is finalized, a sketch of the project will be created. We will review
                                    and revise the material to meet your goal</p>
                            </div>
                    </div>
                </Col>



                <Col className = "col-sm-6 col-md-4">
                    <div className = "card" >
                        <span className="glyphicon glyphicon-heart-empty"></span>
                            <div className = "caption">
                                <h3>Your Feedback </h3>
                                    <p>The first step is to know more about you and your business. This is where
                                    we will get an idea how to create a custom strategy to achieve project's goal</p>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "card" >
                        <span className="glyphicon glyphicon-wrench"></span>
                            <div className = "caption">
                                <h3>Testing</h3>
                                    <p>Following the initial meetup, we will outline your project. Now, we have a strategic
                                    plan in place that will help us to accomplish your vision </p>
                            </div>
                    </div>
                </Col>
            
                <Col className = "col-sm-6 col-md-4">
                    <div className = "card" >
                        <span className="glyphicon glyphicon-ok"></span>
                            <div className = "caption">
                                <h3>Launch The Website! </h3>
                                    <p>Once is plan is finalized, a sketch of the project will be created. We will review
                                    and revise the material to meet your goal</p>
                            </div>
                    </div>
                </Col>
            </Row>
              
        </div>      
            
        )
    }
            
            

export default Process;