import React, { PureComponent } from 'react';
import '../css/about.css';
import aboutImg from '../Images/3323619.jpg'

export default class About extends PureComponent {
  
  render() {
    
    return (
      <div id="aboutMainContainer" className="aboutMainContainer">
        <div className='about__mainContainer'>
          <div className="about__container">
            <div className="about__imgContainer">
              <div className="about__imgDiv">
                <img className='about__img' src={aboutImg} alt="img" />
              </div>
            </div>
            <div className="about__rightContainer">
              <h1>About Us</h1>
              <p className='about__pTag'> Octa Servicez is an Indian company providing mainly software designing services to the SME's to ease their day-to-day operations. We are using most trending technologies to meet the client requirement. We are transforming these industries to the digital world for that ease. </p>
              <h3>Our Vision</h3> 
              <p className='about__pTag'>We want to take the Octa Servicez to the highest for achieving the best digital solution provider at the local & PAN India level. In our work culture we are doing all the operations very intenlligently and in in a focused manner. We always give optimum priority to the client requirement. At Octa Servicez we are always look for providing masterpiece in everything.</p>
              <h3>Currently Serving Industries</h3> <ul className='navbarUL'><li>Commercial</li><li>SME's</li></ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
