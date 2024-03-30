import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import JotformEmbed from "react-jotform-embed";
function Contact() {
	return (
		<section className="contact">
			<Container className="pb-5">
				<div className="contact-card">
					<Row>
						<Col md={12} xl={6}>
							<div className="contact-div mb-3">
								<h4 className="text-center mb-3">Our Location</h4>
								<div className="p-3">
									<h6 className="mb-1 fw-bold">Address:</h6>
									<p className="mb-0 opacity-90">
										<b>I and You Administration Office</b>
									</p>
									<a href="https://maps.app.goo.gl/9YL3d8wSQGBycaMK8" target="_blank" rel="noreffere" className="mb-2 d-block">
										Above Canara Bank.1, 1st Main 1st Cross, Atmananda Colony, Sultanpalya, Bengaluru, Karnataka 560032.
									</a>
									<h6 className="mb-1 fw-bold">Phone:</h6>
									<a href="tel:+91 9900022506" target="_blank" rel="noreffere" className="mb-2 d-block">
										+91 9900022506
									</a>
									<h6 className="mb-1 fw-bold">Email:</h6>
									<a href="mailto:info@iandyou.org" target="_blank" rel="noreffere" className="mb-2 d-block">
										info@iandyou.org
									</a>
								</div>
							</div>
							<StaticImage alt="I and you Green" src="../images/banner/contact.jpg" className="h-220 rounded-image mb-3" />
						</Col>
						<Col md={12} xl={6}>
							<div className="iframe">
								<h4 className="text-center mb-3">Contact Us</h4>
								<JotformEmbed src="https://form.jotformeu.com/240890881160054" className="rounded-image jot" />
								<div className="iframe-overlap">
									<div className="wave"></div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<Container className="my-5">
				<Row>
					<Col md={12}>
						<h1 className="display-1 fw-bold font-lora text-center text-secondary">I And You Green</h1>
						<h2 className="display-5 fw-bold font-lora text-center text-secondary">I Breath For You, You Breath For Me, I And You Being Together.</h2>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
