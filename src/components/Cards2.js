import React from 'react';
import './Cards2.css';
import CardItem2 from './CardItem2';

function Cards2() {
  return (
      <div className="body"> <div className='cards2'>

      
     
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <CardItem2
              src='images/EFQM-connect.png'
              text='As well as the certified foundation course, our portfolio of traning courses and events help develop your skills in the application of the EFQM Model and change leadership.'
              label='TRAINING'
              path='/services' 
              button="TRAINING PORTFOLIO"
            />
            <CardItem2
              src='images/EFQM-facilitate.png'
              text='We look holistically across your entire organisation to deliver sustainable results and create an adaptive culture. We also provide the tools for you to perform self-assessments'
              label='ASSESSMENTS'
              path='/services'
              button="EFQM MEMBERSHIP"
            />
          </ul>

          <ul className='cards__items'>
          <CardItem2
              src='images/EFQM-recognition.png'
              text='By celebrating organisations and individuals which adopt the 
              EFQM philosophy, we provide a global platform for peer recognition 
              and support.'
              label='RECOGNITION'
              path='/services'
              button="EFQM RECOGNITION"
            />
             <CardItem2
              src='images/EFQM-insight.png'
              text='To help organisations continuously build and evolve, we share
               emerging ideas and innovative thinking, leading the conversation 
               through fresh insights and perspectives.'
              label='INSIGHT'
              path='/services'
              button="VIDEO LIBRARY"
            />
          </ul>

        </div>
      </div>
    </div> </div>
    
  );
}

export default Cards2;