import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import missTeenIndia from '../../assets/missteenindia.jpg';

const image1 = missTeenIndia;
const image2 = "https://images.marc-cain.com/cms/1920_1080/50-Jahre-MarcCain-Fashion-Show-KarolinaKurkova-HelmutSchlotterer-2.webp";
const image3 = "https://wallpapers.com/images/hd/corporate-event-1920-x-1080-wallpaper-3aofpuvo59f02ca4.jpg";
const image4 = "https://newindian.in/wp-content/uploads/2022/05/Can-pic_05.jpg"

const Home = () => {
  const images = [
    { src: image1, title: 'Miss Teen India' },
    { src: image2, title: 'Inspiring Shows' },
    { src: image3, title: 'Class-A Events' },
    { src: image4, title: 'Best Organizers' },
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

      <div className='homeContainer'>
        <div className='homeContainerHeader'>
          <div className='homeContainerHeaderImage'>
            <img src='https://s1.r29static.com/bin/entry/2fb/720x480,85/1936248/image.webp' alt="picture" />
          </div>
          <div className='homeContainerHeaderDescription'>
            <h3>Welcome To Hype</h3>
            <div className='homeContainerHeaderDescriptionText'>
              Welcome! Here, you'll find a space where your needs are understood, and your vision is brought to life with care. We’re committed to making your experience smooth, enjoyable, and truly memorable. <span>We're excited to have you with us!</span>
            </div>
            <br />
            <div className='homeContainerHeaderDescriptionText'>
              Step into a world where your ideas come to life effortlessly. With thoughtful planning and a personal touch, we create experiences that leave you feeling valued and inspired. Let’s make every moment count, together.
            </div>
          </div>
        </div>

        <hr className='homeDivider' />

        <div className='homeContainerOngoingEvents'>
          <div className='homeContainerOngoingEventsDescription'>
            <h3>Join The Exciting Journey</h3>
            <br />
            <div className='homeContainerOngoingEventsDescriptionText'>
              Get ready for a glamorous and exciting journey at Miss Teen India, a premier fashion show that celebrates beauty, talent, and individuality! This event brings together the best in fashion, where young talent from all over the country will take the stage to showcase their unique style and grace. Whether you're passionate about fashion or looking to make your mark in the industry, Miss Teen India offers an incredible platform to shine.
            </div>
            <br />
            <div>
              Take the next step and be part of the excitement! This is your chance to participate in our upcoming event and showcase your unique fashion sense. Whether you're an emerging designer, a trendsetter, or someone with a passion for style, we offer you a platform to express yourself and stand out. Let your creativity shine and join us in making this event unforgettable—your moment to shine is just around the corner!
            </div>
            <br />
            <div>
              <span>Click the button</span> below to book your spot in the event or to enquire about it.
            </div>

          </div>

          <div className='homeContainerOngoingEventsImage'>
            <img src={missTeenIndia} alt="Description" />
          </div>
        </div>

        <br /> <br />

        <div className='contactUs'>
          <button type='button' className='button'>
            <Link to="/contact" className="buttonText">
              Get A Quote
            </Link>
          </button>
        </div>

        <hr className='homeDivider' />

        <div className='homeContainerHeader'>
          <div className='homeContainerHeaderImage'>
            <img src='https://th-i.thgim.com/public/incoming/l7o5aj/article68588922.ece/alternates/LANDSCAPE_1200/17_mn%20Shreya%20Goshal%201.JPG' alt="picture" />
          </div>
          <div className='homeContainerHeaderDescription'>
            <h3>Partner with the Stars: Bringing Celebrities and Influencers to You</h3>
            <div className='homeContainerHeaderDescriptionText'>
              At Hype, we understand the power of influence. Whether you're looking to elevate your brand, launch a new product, or create a buzz around your event, we connect you with the perfect celebrities and influencers to bring your vision to life. Our extensive network of high-profile personalities ensures that you get the right match to captivate your audience and amplify your message.
            </div>
            <br />
            <div className='homeContainerHeaderDescriptionText'>
              With our expert management and personalized approach, we make it easy for you to collaborate with top celebrities and influencers who align with your brand values and goals. From high-impact campaigns to exclusive partnerships, we handle all the details, allowing you to focus on what matters most—seeing your brand shine with the power of celebrity influence.
            </div>
          </div>
        </div>

        <hr className='homeDivider' />

        <div className='homeContainerOngoingEvents'>
          <div className='homeContainerOngoingEventsDescription'>
            <h3>Uniting Exceptional Events & Powerful PR</h3>
            <br />
            <div className='homeContainerOngoingEventsDescriptionText'>
            At Hype, we don’t just organize events—we craft experiences that captivate and inspire. From intimate gatherings to large-scale productions, we handle every detail, ensuring your event is nothing short of extraordinary.
            </div>
            <br />
            <div>
            Our PR expertise amplifies your brand’s voice, connecting you with the right audience and elevating your presence in the media. With us, your story reaches new heights, creating lasting impressions and meaningful connections.
            </div>

            <br />

          </div>

          <div className='homeContainerOngoingEventsImage'>
            <img src='https://www.epicteam.com.au/wp-content/uploads/2021/02/PublicEvents.jpg' alt="Description" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home