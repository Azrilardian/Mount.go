import React, { Component } from "react";
import Heading from "../heading/heading";
import Button from "../Button/button";
import Input from "./input-contact";
import styles from "../../style/css/contact.module.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputLabel: ["First Name", "Last Name", "Email", "Subject"],
		};
	}

	render() {
		return (
			<section className={`position-relative ${styles.contact}`}>
				<div className="container">
					<Heading backgroundText="CONTACT US" whiteText="CONTACT " greenText="US" questionMark="false" position="right"></Heading>
					<div className="row justify-content-center">
						<div className={`col-10 p-4 d-flex flex-column ${styles.form}`}>
							<h4 className={`mt-2 mx-0 ${styles.form__heading}`}>Contact form</h4>
							<div className={`row justify-content-between ${styles.form__main}`}>
								<div className={`col-lg-6 col-md-12 col-sm-12 col-12 ${styles.form__main__left}`}>
									{this.state.inputLabel
										.filter((label) => label !== "Message")
										.map((label, index) => (
											<Input height="45" key={index}>
												{label}
											</Input>
										))}
								</div>
								<div className={`col-lg-6 col-md-12 col-sm-12 col-12 ${styles.form__main__right}`}>
									<label htmlFor="textarea" className={styles.form__main__right__label}>
										Message
									</label>
									<textarea className={styles.form__main__right__textarea} name="textarea" id="textarea"></textarea>
									<Button color="green">Send Message</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
