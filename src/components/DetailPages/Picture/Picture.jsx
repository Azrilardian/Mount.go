import React from "react";
import HeadingDetail from "../../Utility/HeadingDetail/HeadingDetail";
import Button from "../../Utility/Button/Button";
import pictOne from "../../../assets/img/favourite-one.webp";
import thumbPictOne from "../../../assets/img/gallery-thumb/thumb-1.webp";
import pictTwo from "../../../assets/img/jumbotron-pict-2.webp";
import thumbPictTwo from "../../../assets/img/gallery-thumb/thumb-2.webp";
import pictThree from "../../../assets/img/picture-3.jpg";
import thumbPictThree from "../../../assets/img/gallery-thumb/thumb-3.webp";
import pictFour from "../../../assets/img/bg-contact.webp";
import thumbPictFour from "../../../assets/img/gallery-thumb/thumb-4.webp";
import pictFive from "../../../assets/img/jumbotron-pict-1.webp";
import thumbPictFive from "../../../assets/img/gallery-thumb/thumb-5.webp";
import pictSix from "../../../assets/img/favourite-two.webp";
import thumbPictSix from "../../../assets/img/gallery-thumb/thumb-6.webp";
import dotPatternImage from "../../../assets/img/dot.png";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../../../style/css/picture.css";

const Picture = () => {
	return (
		<section className="position-relative picture">
			<div className="container">
				<HeadingDetail>Picture</HeadingDetail>
				<Gallery>
					<div className="row px-3 picture__images">
						<Item original={pictOne} thumbnail={thumbPictOne} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image one">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictOne} alt="jumbotron-pict-1" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
						<Item original={pictTwo} thumbnail={thumbPictTwo} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image two">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictTwo} alt="jumbotron-pict-2" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
						<Item original={pictThree} thumbnail={thumbPictThree} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image three">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictThree} alt="jumbotron-pict-3" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
						<Item original={pictFour} thumbnail={thumbPictFour} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image four">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictFour} alt="jumbotron-pict-4" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
						<Item original={pictFive} thumbnail={thumbPictFive} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image five">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictFive} alt="jumbotron-pict-5" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
						<Item original={pictSix} thumbnail={thumbPictSix} width="1024" height="768">
							{({ ref, open }) => (
								<div className="picture__images__image six">
									<picture loading="lazy" dicoding="async">
										<img src={thumbPictSix} alt="jumbotron-pict-6" ref={ref} onClick={open} />
									</picture>
								</div>
							)}
						</Item>
					</div>
				</Gallery>
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
