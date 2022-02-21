import React, { Component } from 'react'
  
function Footer(){ 
    return(  
  <div className="Footer">
  <footer id="footer">
    <div className="container">
      <h3>Calvin Herrick</h3>
      {/* <p>A direct link to my linkedin</p> */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/calvin-herrick-52b904206/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>  
  </div>  
  ); 
  }  


  
export default Footer