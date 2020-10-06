import React from 'react';
import './Home.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import FooterHome from '../Footer-home';

function Home() {
  return (
    <><div className='all'>
      
    <HeroSection />
    <span className="what-we-do">  
       <h2>Driving organisational change and performance improvement</h2>
      <p>EFQM offers data-driven, analysis tools to give organisations meaningful insights and stakeholder support. empowering transformation We connect, facilitate, recognise and inform individuals and organisations alike to progress through innovative thinking, learning and development that - combined- creates sustainable outcomes.</p>
      
      <p> With offices in London, Brussels and Dubai, we operate in 40 countries from Columbia to Germany and onto China and Australia. Our model and training are available in 25 languages and we work with more than 200 partners. <br/><br/> Our customers range from the supra-nationals such as the UN, EBRD and EIB to iconic brands such as BMW and Bosch. And, of course, we have customers from the public sector as well as charities and not-for-profits.</p></span>
   </div>
   <Cards />
    <FooterHome />
      
    </>
  );
}

export default Home;