import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='aboutContainer'>
        <div className='aboutContainerHeader'>
          <div className='aboutContainerHeaderImage'>
            <img src='https://www.virrgonetwork.com/public/frontend/images/owner/paras-sharma.jpg' alt="picture" />
          </div>
          <div className='aboutContainerHeaderDescription'>
            <h3>Hype Unlimited</h3>
            <div className='aboutContainerHeaderDescriptionText'>
              Welcome to <span>Hype Unlimited</span> – the ultimate platform where creativity, innovation, and influence collide. We are a forward-thinking company that specializes in curating exceptional experiences, connecting brands with the power of celebrity influence, creating unforgettable events and exceptional public relations that leave lasting impressions.
            </div>
            <br />
            <div className='aboutContainerHeaderDescriptionText'>
              Step into a world where your ideas come to life effortlessly. With thoughtful planning and a personal touch, we create experiences that leave you feeling valued and inspired. Let’s make every moment count, together.
            </div>

            <br />

            <h3>Our Story</h3>
            <div className='aboutContainerHeaderDescriptionText'>
              Founded by a team of industry veterans and led by the founder and CEO, Paras, Hype Unlimited was born from a desire to break the mold and bring fresh, creative solutions to the world of brand elevation, events, and influencer marketing. Our journey began with a simple mission: to create authentic, powerful connections that amplify messages and create meaningful experiences.
            </div>
            <br />
            <div className='aboutContainerHeaderDescriptionText'>
              With years of experience in entertainment, PR, and event management, we understand what it takes to deliver high-quality results. Over the years, we’ve worked with some of the biggest names in fashion, entertainment, and lifestyle, earning a reputation for being a go-to partner for brands seeking to make their mark.
            </div>
          </div>
        </div>

        <hr className='aboutDivider' />

        <div className='aboutContainerHeader'>
          <div className='aboutContainerHeaderDescription'>
            <h3>Our Vision</h3>
            <div className='aboutContainerHeaderDescriptionText'>
              At <span>Hype Unlimited</span>, our vision is to empower brands, creators, and individuals to reach their fullest potential by harnessing the power of creativity and celebrity influence. We believe in building connections that inspire, engage, and create moments that resonate.
            </div>
          </div>
        </div>

        <hr className='aboutDivider' />

        <div className='aboutContainerHeader'>
          <div className='aboutContainerHeaderDescription'>
            <h3>Our Approach</h3>
            <div className='aboutContainerHeaderDescriptionText'>
              At <span>Hype Unlimited</span>, we understand that every project is unique, and that’s why we take a personalized approach to every collaboration. Our team works closely with you to understand your goals and objectives, ensuring that each partnership, event, or campaign is tailor-made to deliver the best results.
            </div>
            <br />
            <div className='aboutContainerHeaderDescriptionText'>
              We thrive on creativity, attention to detail, and a passion for bringing bold ideas to life. With our extensive network, expertise in event production, and strategic PR know-how, we are here to help you make your mark.
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
