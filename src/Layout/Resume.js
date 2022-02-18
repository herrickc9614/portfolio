import React, { Component } from 'react'
  
function Resume(){ 
    return(  
  <div className="Resume">  
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Calvin Herrick</h4>
              <p><em>Video Game Designer with over 5 years of training and experience, specilizing in scripting. Have been involved with many
aspects of video game development, beginning with work in game conception, producing an arena style game as an
intern, and worked on a few year long projects for school. Specialized experience with character design, world design,
and coding of video games.</em></p>
              <ul>
                <li>319 Saint James Ave,Wallingford, IA</li>
                <li>712</li>
                <li>herrickcalvin@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Game Design</h4>
              <h5>2018 - 2021</h5>
              <p><em>Dakota State University, Madison, South Dakota</em></p>
            </div>
            <div className="resume-item">
              <h4>Associate in Applied Science Game Design &amp; Development</h4>
              <h5>2016 - 2018</h5>
              <p><em>Iowa Lakes Community College, Estherville Iowa</em></p>
            </div>
          </div>
          <div className="col-lg-6">
            
          </div>
        </div>

      </div>
    </section>
 
  </div>  
  ); 
  }  

export default Resume