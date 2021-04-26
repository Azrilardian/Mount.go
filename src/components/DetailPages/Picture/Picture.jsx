import React from "react";
import HeadingDetail from "../../Utility/HeadingDetail/HeadingDetail";
import Button from "../../Utility/Button/Button";
import PictThree from "../../../assets/img/picture-3.jpg";
import PictTwo from "../../../assets/img/jumbotron-pict-2.webp";
import PictOne from "../../../assets/img/favourite-one.webp";
import PictFour from "../../../assets/img/bg-contact.webp";
import PictFive from "../../../assets/img/jumbotron-pict-1.webp";
import PictSix from "../../../assets/img/favourite-two.webp";
import dotPatternImage from "../../../assets/img/dot.png";
import "../../../style/css/picture.css";

const Picture = () => {
	return (
		<section className="position-relative picture">
			<div className="container">
				<HeadingDetail>Picture</HeadingDetail>
				<div className="row px-3 picture__images">
					<div className="picture__images__image one">
						<picture loading="lazy" dicoding="async">
							<img src={PictOne} alt="jumbotron-pict-1" />
						</picture>
					</div>
					<div className="picture__images__image two">
						<picture loading="lazy" dicoding="async">
							<img src={PictTwo} alt="jumbotron-pict-1" />
						</picture>
					</div>
					<div className="picture__images__image three">
						<picture loading="lazy" dicoding="async">
							<img src={PictThree} alt="jumbotron-pict-1" />
						</picture>
					</div>
					<div className="picture__images__image four">
						<picture loading="lazy" dicoding="async">
							<img src={PictFour} alt="jumbotron-pict-1" />
						</picture>
					</div>
					<div className="picture__images__image five">
						<picture loading="lazy" dicoding="async">
							<img src={PictFive} alt="jumbotron-pict-1" />
						</picture>
					</div>
					<div className="picture__images__image six">
						<picture loading="lazy" dicoding="async">
							<img src={PictSix} alt="jumbotron-pict-1" />
						</picture>
					</div>
				</div>
				<div className="row mt-5 pt-5">
					<div className="col d-flex justify-content-center align-items-center">
						<Button>CONTACT US</Button>
					</div>
				</div>
			</div>
			<img src={dotPatternImage} alt="dot.png" className="position-absolute picture__dot-img picture__dot-img--left" />
			<img src={dotPatternImage} alt="dot.png" className="position-absolute picture__dot-img picture__dot-img--right" />
		</section>
	);
};

export default Picture;
