import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>

     
      
     
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/EFQM-connect.png'
              text='As well as the certified foundation course, our portfolio of traning courses and events help develop your skills in the application of the EFQM Model and change leadership.'
              label='TRAINING'
              path='/services' 
            />
            <CardItem
              src='images/EFQM-facilitate.png'
              text='We look holistically across your entire organisation to deliver sustainable results and create an adaptive culture. We also provide the tools for you to perform self-assessments'
              label='ASSESSMENTS'
              path='/services'
              
            />
              <CardItem
              src='images/EFQM-recognition.png'
              text='By celebrating organisations and individuals which adopt the 
              EFQM philosophy, we provide a global platform for peer recognition 
              and support.'
              label='RECOGNITION'
              path='/services'
            />
             <CardItem
              src='images/EFQM-insight.png'
              text='To help organisations continuously build and evolve, we share
               emerging ideas and innovative thinking, leading the conversation 
               through fresh insights and perspectives.'
              label='INSIGHT'
              path='/services'
            />
          </ul>

        

        </div>
      </div>
    </div>
  );
}

export default Cards;