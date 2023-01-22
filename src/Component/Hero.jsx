import React from 'react';
import '../css/hero.css';
export default function hero() {
  
  return (
    <>  
        <section id="hero">
            <div className="hero container">
            <div className='hero__header'>
                <h1 className='hero__H1'>Hello,<span></span></h1>
                <h1 className='hero__H1'>Welcome To <span></span></h1>
                <h1 className='hero__H1'>Octa Servicez <span></span></h1>
                <a href="#services__Container" type="button" className="cta">Services</a>
            </div>
            </div>
        </section>
    </>
  )
}
