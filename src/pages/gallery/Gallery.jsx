import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";

function Gallery() {
	const galleryLength = 15;
	const images = [];
	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}
	// console.log(images); //Array of image/

	return (
		<>
			<Header title="Our Gallery" image={HeaderImage}>
			Welcome to our Gym Photo Gallery! Here, we invite you to explore and witness
			 the vibrant and dynamic world of fitness through captivating visuals. We believe 
			 that a picture is worth a thousand words, and our photo gallery is a testament to 
			 the incredible energy and dedication that our gym community embodies.
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Gallery;
