import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
	<Header branding="Contact Manager"/>
  <div className=" container">
  <Contact name="JOhn DOe"
      email="sfdjg@gmail.com"
      phone="7835"/>
      
      <Contact name="shreya"
      email="sfdeejg@gmail.com"
      phone="7dfg5"/>
  
  <Contact name="Rishabh"
      email="ssdfsejg@gmail.com"
      phone="756454g5"/>
  
  </div>
      
</div>
    );
  }
}

export default App;
