import React, { Component} from 'react';   
import Header from './Header';  
import Footer from './Footer';
import Title from './Title' ;
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio' ;
import Contact from './Contact';

import {
    Route,
    BrowserRouter as Router,
    NavLink,
    HashRouter,
    Routes
  } from "react-router-dom";

export class Layout extends Component {  
    render() {  
        return ( 
    

        <div>
        <Header />
        <Title />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        </div>
        )  
    }  
}  
  
export default Layout  