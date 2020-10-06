import React from 'react';
import './Cards3.css';
import CardItem3 from './CardItem3';

function Cards3() {
  return (
      <div className="body"> <div className='cards3'>

      
     
      <div className='cards__container3'>
        <div className='cards__wrapper3'>
          <ul className='cards__items3'>
            <CardItem3
              src='images/Russ.jpg'
              text='Russell Longmuir
              CHIEF EXECUTIVE OFFICER
              Chief Executive Officer.'
              label='Russell Longmuir'
              path='/services' 
              job="Read more"
              more=''
           
            />
            <CardItem3
              src='images/Gail.jpg'
              text='DIRECTOR OF TRAINING
              In charge of Training'
              label='Gail Tutcher'
              path='/services'
              job="Read more"
              more="Gail’s early career was as a senior manager in the IT and automotive industries. In 1989 she moved into TQM / Excellence training and consultancy with the Industrial Society and then TQMI. She was the Director with responsibility for training and consultancy services at BQF for nearly 4 years before joining EFQM as Director of Training in September 2019. She has extensive experience of training and supporting organisations to use the EFQM Model and RADAR and has delivered projects throughout Europe, the Middle East, Asia and USA. She has a degree in Industrial Labour Studies from the University of Birmingham and has been a guest lecturer at the University of Warwick on the MSc in Quality & Reliability."
             
            />
             <CardItem3
              src='images/Geert.jpg'
              text='CHIEF FINANCIAL OFFICER & HR DIRECTOR
              In charge of corporate services'
              label='Dr. Geert  Opdenbosch'
              path='/services'
              job="Read more"
              more='Russell started out as a banker in London and New York before moving into Management Consultancy where he spent 20 years working as a Partner at IBM, KPMG and the German strategy consultancy Zeb. In 2015, he became the CEO of BQF. Along the way he has also worked with several start-ups as a Board Advisor or CEO coach, which are now flourishing, such as Infrascale in the US and Temporall in the UK – a really exciting company that is trying to enable organisations to continuously measure their culture and the financial return it brings. In November 2018, Russell joined EFQM as Chief Executive Officer.  - Tel + 32 2 775 35 11'
            />
          </ul>

          

        </div>
      </div>
    </div> </div>
    
  );
}

export default Cards3;