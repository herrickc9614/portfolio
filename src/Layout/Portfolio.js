import React, { useState, useEffect, Component } from 'react'

function sayHello() {
  alert('You clicked me!');
}



class Portfolio extends Component { 
  render(){ 
    return(  
  <div className="Portfolio">

    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        
        <div className="row">

          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">

          </div>

          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <button className ="" onClick={sayHello} type = 'submit'>&#x2190;</button>
          <button className ="" onClick={sayHello} type = 'submit'>&#x2192;</button>
          </div>
        </div>
      </div>
    </section>
 
  </div>  
  ); 
  }  
}


  
export default Portfolio