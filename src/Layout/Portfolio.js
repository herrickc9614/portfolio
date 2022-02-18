import React, { useState} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Project1 from './Routers/Project1';
import Project2 from './Routers/Project2';
import Project3 from './Routers/Project3';


const items = 
[
'/', 
'/project2',
'/project3'
]

function handleList(num)
{
  const itemsUsed = items.map((n) => n)
  
  if(num < 0)
  {
    num = itemsUsed.length - 1
  }

  if(num > itemsUsed.length - 1)
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
          <div className="wrapper">
      <BrowserRouter>
        <div className="Help">
        <Link to={items[count]}>
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <button className ="" onClick={() => setCount(handleList(count - 1))} type = 'submit'>&#x2190;</button>
          <button className ="" onClick={() => setCount(handleList(count + 1))} type = 'submit'>&#x2192;</button>
          </div>
          </Link>
        <Routes>
          <Route path="/" element={<Project1 />}></Route>
          <Route path="/project2" element={<Project2 />}></Route>
          <Route path="/project3" element={<Project3 />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
          </div>

        </div>
      </div>
    </section>
 
  </div>  
  ); 
  }  


export default Portfolio