import React from 'react';
import './Contact-us.css';
import Footer from '../Footer';

export default function ContactUs() {
  return (
    <>
      <div className='all'>
        <div className="contact-intro"> <h1>Contact us</h1></div>
       

        <div class="row">
          <div class="column" >
            <h2>London</h2>
            <br/>
            <p>+3227753511</p>
            <br/>
            <p>London HQ, King’s Cross, 344 Grays Inn Road, London WC1X 8BP</p>
            <br/>
            <p>info@efqm.org</p>
            <br/>
            <p>www.efqm.co.uk</p>
          </div>
          <div class="column" >
            <h2>Brussels</h2>
            <br/>
            <p>+3227753511</p>
            <br/>
            <p>Avenue des Olympiades 2, 1140 Brussels</p>
            <br/>
            <p>info@efqm.org</p>
            <br/>
            <p>www.efqm.org</p>
          </div>
          <div class="column" >
          <h2>Dubai</h2>
            <br/>
            <p>+97143658170</p>
            <br/>
            <p>Dubai Knowledge Park, Block 2B Office G03A</p>
            <br/>
            <p>www.efqmmiddleeast.org.</p>
          </div>
        </div>

        <div className="furtherInfo">
          <h1>For further information, feel free to contact us at:</h1>
          <ul>
            <a href="https://www.efqm.org/index.php/trainings-and-events/"><li>Training: training@efqm.org</li></a>
            <a href="https://www.efqm.org/index.php/membership/"> <li>Membership: membership@efqm.org</li></a>
            <a href="https://www.efqm.org/index.php/efqm-partners/"><li>Partners: partnerships@efqm.org</li></a>
            <a href="https://www.efqm.org/index.php/efqm-recognition/"><li>Assessment & Recognition: recognition@efqm.org</li></a>
            <a href="https://shop.efqm.org/"><li>Publications and Webshop: orders@efqm.org</li></a>
            <a href="https://www.efqm.org/index.php/download/assessbase-information-leaflet/"> <li>AssessBase: assessbase@efqm.org</li></a>
            <a href="https://www.efqm.org/index.php/download/knowledgebase-information-leaflet/"><li>KnowledgeBase: knowledgebase@efqm.org</li></a>
          </ul>
        </div>

      </div>


      <Footer />
    </>
  );

}