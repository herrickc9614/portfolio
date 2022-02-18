import React, { useState, useEffect, Component } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

const numbers = 
[
<img src = "logo192.png"/>, 
2, 
3, 
4, 
7


]


function handleList(num)
{
  if(num < 0)
  {
    num = 4
  }

  if(num > 4)
  {
    num = 0
  }

  return num
}

function Portfolio() { 
  const [count, setCount] = useState(0);
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
          <p>{numbers[count]}</p>
          </div>

          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <button className ="" onClick={() => setCount(handleList(count - 1))} type = 'submit'>&#x2190;</button>
          <button className ="" onClick={() => setCount(handleList(count + 1))} type = 'submit'>&#x2192;</button>
          </div>
        </div>
      </div>
    </section>
 
  </div>  
  ); 
  }  


export default Portfolio