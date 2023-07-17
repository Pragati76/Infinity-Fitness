import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2> Error! Page not found </h2>
				<Link to="/" className="btn">
					Return Home
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
