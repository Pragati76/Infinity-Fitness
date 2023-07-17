import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" >
						<h2>Infinity Fitness</h2>
					</Link>
					<p>
						VISIT US ON OUR SOCIALS!!
					</p>
					<div className="footer__socials">
					<Link to="/s"><FaLinkedin /></Link>
					<Link to="/s"><FaFacebookF /></Link>
					<Link to="/s"><AiOutlineTwitter /></Link>
					<Link to="/s"><AiFillInstagram /></Link>
						
					</div>
				</article>
				<article>
					<h4>Main</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Pragati Chaudhary </small>
			</div>
		</footer>
	);
};

export default Footer;
