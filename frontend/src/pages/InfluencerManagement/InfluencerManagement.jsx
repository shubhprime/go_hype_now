import React from 'react'
import './InfluencerManagement.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const image1 = "https://api.educationpost.in/s3-images/1727432694838-ra.jpg";
const image2 = "https://media.vogue.in/wp-content/uploads/2020/11/kusha-kapila-1920x1080.jpg";
const image3 = "https://www.baltana.com/files/wallpapers-21/Actor-Ashish-Chanchlani-HD-Desktop-Wallpaper-50503.jpg";
const image4 = "https://www.baltana.com/files/wallpapers-16/Avneet-Kaur-Wallpaper-HD-40144.jpg"

const InfluencerManagement = () => {
  const images = [
    { src: image1, title: 'Exciting' },
    { src: image2, title: 'Glamour' },
    { src: image3, title: 'Youth' },
    { src: image4, title: 'Ingenuity' },
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
                Creativity is the essence that transforms ordinary into extraordinary. It’s the ability to craft unforgettable experiences that captivate and leave a lasting impression.
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
          <img src='https://assets.entrepreneur.com/content/3x2/2000/1681391086-Untitleddesign40.png?format=pjeg&auto=webp&crop=1:1' alt="picture" />
        </div>
        <div className='textOfContainer'>
          <h3>Trending Influencers In Town</h3>
          <div className='textOfContainertext'>
            Discover the power of today’s most influential voices, as we bring together the trendsetters who shape conversations and define culture.
          </div>
          <div className='textOfContainertext'>From lifestyle to fashion, tech to entertainment, we ensure your brand is represented by the most relevant influencers, creating unforgettable experiences and maximizing exposure.</div>
          <div className='textOfContainertext'>
            Our influencer management events offer brands the opportunity to collaborate with top influencers who can authentically connect with their target audience and drive impactful results.
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
            A company that connects brands with top influencers to boost visibility and engagement.
            </div>
            <div className='cardHeadingDescription'>
            Create unforgettable connections, amplify your brand’s voice. <br />Let Hype Unlimited bring the right influencers to your audience.
            </div>
          </div>
          <img src='https://www.kalkifashion.com/blogs/wp-content/uploads/2023/04/10-Male-Influencers-Who-Rocked-the-Desi-Look-in-Style.jpg' />
        </div>

        <hr className='thinDivider' />

        <div className="cardsOfCardContainer">
          <div className="cardItem">
            <div className="card">
              <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/06/DSC00977-scaled-1.webp?fit=2560%2C1708&ssl=1" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Finance Influencers</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/01/15090757/Raj-Shamani-2-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Podcast Stars</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://www.kalakarhouse.com/wp-content/uploads/2024/02/Kabita-Singh.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Food Influencers</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://confluencr.com/wp-content/uploads/2024/08/290357534_1436168880159085_6619252813912139292_n.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fashion Influencers</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div class="card">
              <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/12/1000x650.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Travel Influencers</h5>
              </div>
            </div>
          </div><div className="cardItem">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMVNc0N_Bf9LhlUGkpCslQNNJQwilbEH4xQ&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lifestyle Influencers</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default InfluencerManagement