import React from 'react';
import './who-we-are.css';
import Footer from '../Footer';

export default function WhoWeAre() {
  return(
    <>
    <div className="all">
    <div className="intro">
    <h1>Who we are</h1>
    <h3>We are the UK subsidiary of EFQM, 
  the owner of the world’s leading management framework. EFQM is an innovative, 
  not-for profit organisation, fusing data-driven insights, curated learning and development
   and networking opportunities for the benefit of organisations worldwide.</h3>

    <div className="para1">
    <p>Through our integrated and carefully designed portfolio of products and services, 
      we work side by side with leaders as they manage cultural change and digital transformation
      to deliver positive performance and meaningful benefits for all their key stakeholders.</p>
      <br/>
      <p>And by becoming a successful partner to organisations around the world (helping land effective change, 
        manage transformation and deliver performance improvement), we can deliver our own ambition – to
        build a better future for people, for communities and for organisations themselves.</p>
    </div>

    <div className="traits">
        <br/><br/>
        <h2>Our special traits</h2>
        <br/><br/>
        <h3>Collaborative</h3>
        <p>EFQM is a collaborative community - facilitating conversations to create a network of empowered individuals,
          organisations and partnerships that generate mutual benefit for all</p>

          <br/><br/>
        <h3>Trustworthy</h3>
        <p>We act in your interests, with no hidden agenda. We are open and transparent, creating trust and acting with 
          integrity in all that we do. We are committed to doing our best for our members, customers and the people we employ.</p>

          <br/><br/>
        <h3>Independent</h3>
        <p>Independent of any EU institution or political movement, we adopt the UN Sustainable Development Goals as a shared 
          blueprint to focus on improvement and making citizens lives better. We have a sound governance framework, aaccountable to our
          Members and any profit we generate is reinvested into our portfolio</p>

          <br/><br/>
        <h3>Empowering</h3>
        <p>Everything we do is designed to equip organisations to manage with contemporary and challenging good practice reference points. 
          As such, we inspire individuals and organisations alike to advance through innovative thinking, learning and development.</p>
          
          <br/><br/>
          <h3>Inclusive</h3>
        <p>Through a unique mis of product, technology, people and networks, we are committed to creating and promoting a diverse and 
          inclusive environment where everyone can thrive - constantly pushing the boundaries, seeking out megatrends and always looking forward to whats next. </p>
    </div>

    <div className="how-we-do-it">
    
    <h2>How we do it</h2>
    <br/><br/>
    <h3>Our Priorities</h3>
    <p>Acknowledged by leaders as a key partner to success, EFQM is an organisation that is known for being curious and excited. As different organisations battle with
      change and transformation on different fronts, we understand what is important, helping them to articulate a clearly understood purpose and nurture a valuable and
      rewarding culture</p>

      <ul>
        <li>INSTIL a culture of improvement by helping to assess and implement plans and strategies; discover and create good practices; develop their people.</li>
        <li>DISTIL insights, knowledge, data and content that will help organisations to achieve and sustain outstanding levels of performance</li>
        <li>IDENTIFY good practices and know what good looks like – helping our network to deploy and refine this data, making it fit for purpose within their own organisation and culture</li>
        <li>SHARE our rapidly developing knowledge base, networking opportunities and experiences, using this learning to generate new, innovative approaches</li>
        <li>ENCOURAGE organisations to seek external recognition using our rigorous assessment process.</li>
      </ul>
    </div>

    <div className="why">
      <h2>Why we do it </h2>
      <p>Founded in 1989 to create a platform where organisations can learn from each other, EFQM believes in a world where organisations share their ideas, 
        experiences and learnings for the greater good.</p>
        <br/> <br/>
        <p>Through increased access to good practice (business exemplars / role models and what impact that they are having right now, 
          not five years ago), we seek to help achieve sustainable economic growth and development, drive improvement, develop culture, 
          leadership and – ultimately – sustainable success.</p> <br/><br/>
    </div>

    </div>

  </div> 
  <Footer />
    </>
  );
    
}