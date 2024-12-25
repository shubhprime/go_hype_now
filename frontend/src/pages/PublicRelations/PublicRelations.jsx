import React from 'react'
import './PublicRelations.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const image1 = "https://www.eventbrite.com/blog/wp-content/uploads/2022/08/USEditorsPicks_Inspiring-Event-Themes.jpg";
const image2 = "https://www.eui.eu/Images/ServicesAdmin/Communications/Images2012-CommunicationsService/CommunicationsService/PublicRelationsAndSpecialEvents/049.jpg";
const image3 = "https://jonbradley.co.uk/wp-content/uploads/2022/09/PR-EVENTS-PHOTOGRAPHY-SLIDER-1-1024x683.jpg";
const image4 = "https://dw-images.com/wp-content/uploads/2022/03/feature-image-5-Types-of-Photographs-to-Take-at-Your-PR-Event.jpg"

const PublicRelations = () => {
  const images = [
    { src: image1, title: 'Prestige' },
    { src: image2, title: 'Professional' },
    { src: image3, title: 'Elevate' },
    { src: image4, title: 'Impact' },
  ];

  const [itemActive, setItemActive] = useState(0);

  const nextSlide = () => {
    setItemActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setItemActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setItemActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <div className="slider">
      {/* Slider list */}
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${itemActive === index ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.title} />
            <div className="content">
              <p>Design</p>
              <h2>{image.title}</h2>
              <p>
              A reputation defined by elegance, exclusivity, and unmatched expertise. Where every detail is crafted to captivate and elevate, creating an aura of sophistication that leaves a lasting impression.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrows">
        <button onClick={prevSlide} id="prev">
          {'<'}
        </button>
        <button onClick={nextSlide} id="next">
          {'>'}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${itemActive === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image.src} alt={image.title} />
            <div className="content">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <hr className='divider' />

    <div className='descriptionContainer'>
      <div className='imageOfContainer'>
        <img src='https://www.therightcateringcompany.com/wp-content/uploads/2020/09/PR-Events-Catering-1.jpg' alt="picture" />
      </div>
      <div className='textOfContainer'>
        <h3>Top-tier PR Solutions</h3>
        <div className='textOfContainertext'>
        Unmatched PR strategies craft compelling stories that captivate audiences and drive meaningful engagement. With a focus on creativity and precision, every campaign is designed to make a lasting impression.
        </div>
        <div className='textOfContainertext'>Authentic communication builds strong relationships, ensuring brands shine in the spotlight.</div>
        <div className='textOfContainertext'>
        Hype Unlimited brings expertise and innovation to the world of PR, transforming ideas into impactful campaigns. With a deep understanding of the industry, the company excels in crafting personalized strategies that amplify brand voices and create unforgettable experiences.
        </div>
      </div>
    </div>

    <hr className='divider' />

    <div className='contactUs'>
      <div className='contactUsText'>
        <h2>Interested In Organising An Event?</h2>
        <h3>Get A Quote From Us</h3>
      </div>
      <button type='button' className='button'>
        <Link to="/contact" className="buttonText">
          Get A Quote
        </Link>
      </button>
    </div>


    <hr className='divider' />

    <div className='cardContainer'>
    <div className='descriptionOfCardContainer'>
          <div className='leftDescriptionOfCardContainer'>
            <h2 className='cardHeading'>
              WHAT WE DO
            </h2>
            <div className='cardHeadingDescription'>
            From media relations to event management, we offer tailored solutions that enhance visibility and strengthen brand presence.
            </div>
            <div className='cardHeadingDescription'>
            We craft impactful PR strategies that elevate brands and create meaningful connections. <br />Our approach focuses on telling compelling stories that resonate with audiences, ensuring lasting engagement.
            </div>
          </div>
          <img src='https://highlight.id/wp-content/uploads/2022/11/jenis-acara-public-relations-pr-event-marketing-2.jpg' />
        </div>

    </div>

  </>
  );
};

export default PublicRelations