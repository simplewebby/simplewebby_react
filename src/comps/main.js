import React from 'react';
import { Button } from 'react-bootstrap';

const Main = ()=>
    {   
        return(
            <div className="Main" >
               <div className="intro">
                    <div className="centered">
                        <h1> Welcome to simplewebby.com </h1>
                        <h4>We Create Simply Awesome Websites!</h4>
                        <Button><a href="#gallery" className="btn btn-info" >See Projects </a></Button>
                    </div>   
                </div>  
            </div>      
            
        )
    }
            
            

export default Main;