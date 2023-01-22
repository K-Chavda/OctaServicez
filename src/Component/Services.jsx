import React from 'react';
import '../css/services.css';
import web_img from '../Images/web-design.png';
import db_img from '../Images/server.png';
import gfx_img from '../Images/coding.png';

export default function Services() {
  return (
    <>
        <div id="services__Container" className="services__Container">
            <div className="services__Header">
                <div className="headerWrap"><h2 className="service__H2" >Our Services</h2></div>
                <div className="swiperWrap"></div> 
            </div>
            <div className="services__Card">
                <div className="service__detailCard">
                    <div className="card__Header">
                        <div className="card__Icon">
                            <img className="card__Img" src={web_img} alt="" />
                        </div>
                        <div className="card__showDetail">
                        </div>
                    </div>
                    <div className="card__Middle"><h3 className="service__H3" >Web Development</h3></div>
                    <div className="card__Botom"><p className="service__pTag" >We provide with web development support with latest available web application and software. </p></div>
                </div>
                <div className="service__detailCard">
                    <div className="card__Header">
                        <div className="card__Icon">
                            <img className="card__Img" src={db_img} alt="" />
                        </div>
                        <div className="card__showDetail">
                        </div>
                    </div>
                    <div className="card__Middle"><h3 className="service__H3" >Database Services</h3></div>
                    <div className="card__Botom"><p className="service__pTag" >We provide database services to design database and create database queries and optimize query perfomance. </p></div>
                </div>
                <div className="service__detailCard">
                    <div className="card__Header">
                        <div className="card__Icon">
                            <img className="card__Img" src={gfx_img} alt="" />
                        </div>
                        <div className="card__showDetail">
                        </div>
                    </div>
                    <div className="card__Middle"><h3 className="service__H3" >Graphics Designing</h3></div>
                    <div className="card__Botom"><p className="service__pTag" >We provide Graphics designing services like logo making, template designs and social media post templates etc. </p></div>
                </div>
            </div>
        </div>
    </>
  )
}
