import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

const Plans = () => {
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
			Welcome to our Gym Membership Plans! We believe that your journey to a healthier and 
			fitter lifestyle starts with finding the perfect membership plan that suits your needs and goals.
			 Our gym offers a range of membership options designed to accommodate individuals of all fitness levels,
			  schedules, and preferences.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`Rs. ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Select</button>
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
