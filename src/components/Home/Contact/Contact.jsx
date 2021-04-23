import React, { useEffect } from "react";
import Heading from "../../Utility/Heading/Heading";
import Button from "../../Utility/Button/Button";
import Input from "./Input-contact";
import onScreenEffect from "../../../js/onScreenEffect";
import "../../../style/css/contact.css";

const Contact = () => {
	useEffect(() => {
		onScreenEffect(".onscreen-element", "onscreen-effect");
	}, []);

	const inputLabel = ["First Name", "Last Name", "Email", "Subject"];

	return (
		<section className="position-relative onscreen-element contact">
			<div className="container">
				<Heading backgroundText="CONTACT US" whiteText="CONTACT " greenText="US" questionMark="false" position="right"></Heading>
				<div className="row justify-content-center px-3">
					<div className="col-lg-10 col-md-10 col-sm-10 col-12 p-4 d-flex flex-column onscreen-element form">
						<h4 className="mt-2 mx-0 form__heading">Contact form</h4>
						<div className="row justify-content-between form__main">
							<div className="col-lg-6 col-md-12 col-sm-12 col-12 form__main__left">
								{inputLabel
									.filter((label) => label !== "Message")
									.map((label, index) => (
										<Input height="43" key={index}>
											{label}
										</Input>
									))}
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-12 form__main__right">
								<label htmlFor="textarea" className="form__main__right__label">
									Message
								</label>
								<textarea className="form__main__right__textarea" name="textarea" id="textarea"></textarea>
								<Button color="green">Send Message</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
