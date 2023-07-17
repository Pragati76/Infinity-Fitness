import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
			Welcome to Infinity Fitness, your premier destination for fitness and well-being! 
		    We are dedicated to helping individuals of all ages and fitness 
			levels achieve their health and wellness goals. Our state-of-the-art facility, 
			experienced trainers, and diverse range of programs make us the ultimate fitness destination
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
						We take pride in our team of certified trainers and instructors who are passionate 
						about helping you succeed.  
						</p>
						<p>
						They are experts in their respective fields, offering 
						personalized attention, customized workout plans, and professional advice to ensure 
						you reach your goals safely and efficiently.
						</p>
						<p>
						Our group fitness classes cater to a 
						variety of interests and fitness levels, providing a fun and energetic atmosphere for
						 you to sweat it out and connect with like-minded individuals.
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						Whether you're a fitness enthusiast or just starting your fitness journey, 
						Infinity Fitness is here to support and inspire you every step of the way. 
						Join our thriving fitness community and experience the positive impact of regular 
						exercise and a healthy lifestyle. Take the first step towards a better version of yourself today!
						</p>
						
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						Your safety is our top priority, and we maintain the highest standards of cleanliness 
						and hygiene. Our facility is regularly sanitized, and we have implemented strict safety 
						protocols to ensure a safe and comfortable environment for all our members.
						</p>
						
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
