import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#100DaysOfWorkout</h4>
					<h1>Join Fitness World Today</h1>
					<p>
					Welcome to our Infinity Fitness! We are your ultimate online destination for 
					fitness enthusiasts, athletes, and anyone seeking to live a healthy, active lifestyle. 
					Our website is designed to provide you with comprehensive resources, expert guidance, 
					and a vibrant community to support you on your fitness journey.
					</p>
					<Link to="/plans" className="btn lg">
						Let's Go
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
