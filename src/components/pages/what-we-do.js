import React from 'react';
import '../../App.css';
import './what-we-do.css'
import Cards2 from '../Cards2';
import Footer from '../Footer';

function WhatWeDo() {
  return (
    <>
    <div className="what-we-do2"> 
            <h1>What we do</h1>

            <h2>At EFQM, our purpose is to improve the performance of organisations and their ability to manage change and transformation.</h2>

            <p>Addressing the very real issues facing today’s modern organisations, EFQM offers data-driven, analysis-based tools to
                give organisations meaningful insights and stakeholder support, empowering them in their journey towards transformation.  </p>
            
            <p>We provide a looking glass for organisations and individuals to examine where they are and shine a spotlight on where 
                action is required.</p>
                
                <h3>Our Areas of Focus</h3>

            <p>To drive organisational change and performance improvement,
                we connect, facilitate, recognise and inform individuals and 
                organisations alike to progress through innovative thinking, 
                learning and development that – combined – creates sustainable
                outcomes.</p>
                
         </div>
      
      <Cards2 />
      <Footer />
    </>
  );
}

export default WhatWeDo;