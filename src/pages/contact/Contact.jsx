import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
			To learn more about our membership options, programs, and special offers.
			 We can't wait to welcome you to the Infinity Fitness family and help you achieve your fitness goals!
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						
						<Link to="/s"><MdEmail /></Link>
						<Link to="/s"><BsMessenger /></Link>	
						<Link to="/s"><IoLogoWhatsapp /></Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
