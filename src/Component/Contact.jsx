import React, { PureComponent } from 'react';
import '../css/contact.css';

export default class Contact extends PureComponent {
  
  render() {
    return (
      <>
        <div id="contactMainContainer" className="contactMainContainer">
          <div class="contact-container">
            <div class="left-col">
              {/* <img class="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" alt=""/> */}
            </div>
            <div class="right-col">
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input className='contact-input' type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
                <div class="description">Dark Mode</div>
              </div>

              <h1 className='contact-h1'>Contact us</h1>
              <p className='contact-pTag'>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

              <form id="contact-form" method="post">
                <label for="name">Full name</label>
                <input className='contact-input' type="text" id="name" name="name" placeholder="Your Full Name" required/>
                <label for="email">Email Address</label>
                <input className='contact-input' type="email" id="email" name="email" placeholder="Your Email Address" required/>
                <label for="message">Message</label>
                <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
                <button type="submit" id="submit" name="submit">Send</button>
              </form>
              <div id="error"></div>
              <div id="success-msg"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
