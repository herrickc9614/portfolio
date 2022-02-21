import React, { Component } from 'react'

function About(){ 
      return(  
    <div className="About"> 
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>About</h2>
            <p>Some Information About Myself</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4">
              <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Java Developer.</h3>
              <p className="fst-italic">
                Years of experience with various programming languages and software ranging from C++ to Java
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>12 Sept 1997</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>712-380-0164</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Wallingford, USA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachellors</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>herrickcalvin@gmail.com</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
  
        </div>
      </section>
      
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Skills</h2>
            <p>Some skills that I have and how proficient I am in each</p>
          </div>
  
          <div className="row skills-content">
  
            <div className="col-lg-6">
  
              <div className="progress">
                <span className="skill">CPP <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">C# <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">JavaScript <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-6">
  
              <div className="progress">
                <span className="skill">Java <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">HTML <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">CSS <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    </div>  
    ); 
    }  
  
  
    
  export default About