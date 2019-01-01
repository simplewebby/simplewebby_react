import React, { Component } from 'react';
import Navbar from './comps/navbar'
import Main from './comps/main';
import Process from './comps/process'
import './App.css';
import Gallery from './comps/gallery';
import MyFooter from './comps/footer';
import Links from './comps/links';
import Services from './comps/services';




class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Navbar />
       <Main/>
       <Services/>
       <Process/>
       <Gallery/>
      <MyFooter/>
      <Links/>
      
      </div>
    );
  }
}

export default App;
