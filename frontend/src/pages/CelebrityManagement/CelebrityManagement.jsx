import React from 'react'
import './CelebrityManagement.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const image1 = "https://assets.vogue.in/photos/5ce40bea4a30b3356412b0e2/master/pass/All-the-Bollywood-celebrities-at-ht-most-stylish-awards-2019.jpg";
const image2 = "https://www.eventfaqs.com/Uploads2018/00Uploads%202021/Feb/05Feb/Arjit%20concert.jpg";
const image3 = "https://cdn1.img.sputniknews.in/img/07e7/05/0b/1913678_0:160:3072:1888_1920x0_80_0_0_b54fccea5c1aca38a3ce341d7447be1d.jpg";
const image4 = "https://newindian.in/wp-content/uploads/2022/05/Can-pic_05.jpg"

const CelebrityManagement = () => {
  const images = [
    { src: image1, title: 'Exhilerating' },
    { src: image2, title: 'Spotlight' },
    { src: image3, title: 'Elevate' },
    { src: image4, title: 'Legacy' },
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
                  A celebration of boundless energy and creativity, where every moment leaves a lasting impression.
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
          <img src='https://s1.r29static.com/bin/entry/2fb/720x480,85/1936248/image.webp' alt="picture" />
        </div>
        <div className='textOfContainer'>
          <h3>Top Celebs In House</h3>
          <div className='textOfContainertext'>
            With expertise in coordinating appearances, performances, and endorsements, we handle the intricate details behind the scenes. Our goal is to create genuine connections that resonate with audiences.
          </div>
          <div className='textOfContainertext'>From start to finish, we work closely with all parties to maintain professionalism and authenticity. Together, we craft moments that stand out and create a lasting impact.</div>
          <div className='textOfContainertext'>
            We connect you with some of the most prominent figures in entertainment, fashion, sports, and beyond. Our celebrity management service ensures every collaboration is smooth and meaningful.
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
            We set the standard in celebrity management, expertly handling every detail from scheduling to high-profile appearances with precision and excellence.
            </div>
            <div className='cardHeadingDescription'>
            We create unparalleled partnerships, aligning the most influential celebrities with brands to amplify their reach and impact.
            </div>
          </div>
          <img src='https://www.dissdash.com/wp-content/uploads/2018/04/pritam-live-in-concert-in-washington-dc-2.png' />
        </div>

        <hr className='thinDivider' />

        <div className="cardsOfCardContainer">
          <div className="cardItem">
            <div className="card">
              <img src="https://static.timesprism.com/thumb/imgsize-703372,msid-97554323,width-1280,height-853,resizemode-1,webp-1/97554323.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bollywood Stars</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpSJA8S3xdjY_wvFpVxjWqj66LHJOnaqIRA&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Artists</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://images.mykhel.com/img/2017/09/virat-kohli-speaking-at-an-event-09-1504940215.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sport Stars</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHducTHQpXZbLvPLYCSArHMRme9yYY08VbQ&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Comedians</h5>
              </div>
            </div>
          </div>
          <div className="cardItem">
            <div class="card">
              <img src="https://dtnext-prod.s3.ap-south-1.amazonaws.com/imported/import/Images/Article/201606291546566704_Chetan-Bhagats-next-novel-from-a-womans-point-of-view_SECVPF.gif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Authors</h5>
              </div>
            </div>
          </div><div className="cardItem">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquKtwwoPF1ncr6-YvRCUqrYbDxdBCpY8ZFwW5GC_NH8pg6jPtukmoOrNJCrb4inTURWI&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">More</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default CelebrityManagement