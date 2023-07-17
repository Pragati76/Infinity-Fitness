import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import "./trainers.css";

const Trainers = () => {
	return (
		<>
			<Header image={HeaderImage} title="Our Trainers">
			Welcome to our Trainers Section! At our gym, we take great pride in our team of dedicated 
			and highly qualified trainers who are committed to helping you reach your fitness goals. 
			Our trainers are not just experts in their fields; they are passionate individuals who are driven
			 to inspire, educate, and empower you on your fitness journey.
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <BsInstagram />, link: socials[0] },
									{ icon: <AiOutlineTwitter />, link: socials[1] },
									{ icon: <FaFacebookF />, link: socials[2] },
									{ icon: <FaLinkedinIn />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
