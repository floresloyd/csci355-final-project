import React, { useState, useEffect } from 'react';
import AIChatbot from '../components/AIChatbot'; // Import the AIChatbot component
import image1 from '../assets/carousel/carouselimage1.jpg';
import image2 from '../assets/carousel/carouselimage2.jpg';
import './About.css';

function About() {
    const images = [
        image1,
        image2,
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="main-content">  {/* This is the updated part */}
            <div className="about-container">
                <h1>About Us</h1>
                <p className="mission-statement">
                    Our mission at JobDoc is to streamline the job application process for all job seekers.
                    As college students, we understand that applying to multiple positions can be overwhelming, which is why
                    we've created a solution to help you organize and track every job you apply for in one
                    convenient platform. By simplifying documentation and providing actionable insights
                    into your job search journey, JobDoc empowers you to approach your career goals systematically
                    and with confidence.
                </p>
            </div>
            <div className="image-carousel">
                <img src={images[index]} alt="Carousel Slide" />
            </div>
            <AIChatbot />
        </div>
    )
}

export default About;
