import React from 'react'
import './EventManagement.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const image1 = "https://wallpapers.com/images/hd/corporate-event-1920-x-1080-wallpaper-3aofpuvo59f02ca4.jpg";
const image2 = "https://wallpapercave.com/wp/wp7488228.jpg";
const image3 = "https://wallpapercave.com/wp/wp7488391.jpg";
const image4 = "https://wallpapers.com/images/hd/corporate-event-2048-x-1152-wallpaper-qhcezwggwt82a1f6.jpg"

const EventManagement = () => {
  const images = [
    { src: image1, title: 'Flawless' },
    { src: image2, title: 'Pioneers' },
    { src: image3, title: 'Dynamic' },
    { src: image4, title: 'Organised' },
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
                  Perfection is hidden in the details, where every moment falls into place effortlessly.
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
          <img src='https://elements-resized.envatousercontent.com/elements-video-cover-images/files/43ce8046-5762-4732-bf7c-07b8e30e2c9c/inline_image_preview.jpg?w=500&cf_fit=cover&q=85&format=auto&s=b1cc16c1455ef559743f8b5264b4bcf60170be306c96046fe71d98597b074c55' alt="picture" />
        </div>
        <div className='textOfContainer'>
          <h3>Best Events In Town</h3>
          <div className='textOfContainertext'>
            Every event is managed with a commitment to delivering exceptional quality, ensuring that expectations are not just met but exceeded.
          </div>
          <div className='textOfContainertext'>Whether it’s a corporate event, a wedding, or a private celebration, meticulous attention is given to even the smallest details. This ensures a cohesive and well-thought-out execution.</div>
          <div className='textOfContainertext'>
            Our team has years of experience in planning and executing flawless events, ensuring every detail is meticulously handled.
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
              An Event Managing Company
              that provides specific Services.
            </div>
            <div className='cardHeadingDescription'>
              Memories are timeless treasures of the heart.<br />Let Hype Unlimited help you create yours.
            </div>
          </div>
          <img src='https://i.pinimg.com/736x/f8/b3/6f/f8b36f5a6cb354b9f405e5132907d3ea.jpg' />
        </div>

        <hr className='thinDivider' />

        <div className="cardsOfCardContainer">
          <div className="cardItem">
            <div className="card">
              <img src="https://wallpapers.com/images/featured/corporate-event-g6myc8i808y8llhh.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Corporate Events</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Entertainment Shows</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://media.istockphoto.com/id/1397143960/photo/celebratory-red-wine-toast-between-senior-adult-friends-at-candle-light-social-event-party.jpg?s=612x612&w=0&k=20&c=fNSR-gTQS49WYKJ-ZnOMoUTHjHcUbafyxfyTv_pfKrA=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Social Events</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PFxH7lSmOl3oEDAbVtPcSvaZLm39nQ-ALw&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product Launches</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div class="card">
              <img src="https://www.gl-events.com/sites/default/files/styles/hero_background_image/public/2019-03/exhibitions-gl-events.jpg?itok=NHZzSPwq" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Exhibitions</h5>
              </div>
            </div>
          </div><div className="cardItem">
            <div className="card">
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/2xxM7XwzaMNuxRFoS9IrXh/52ad8a24e0759a6de7d4c70f63e28a23/Events.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Custom Events</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default EventManagement