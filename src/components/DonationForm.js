import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const DonationForm = () => {
	const [validated, setValidated] = useState(false);
	const [active, setActive] = useState(null);
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	const prices = [
		{
			id: 1,
			price: "₹5,000"
		},
		{
			id: 2,
			price: "₹10,000"
		},
		{
			id: 3,
			price: "₹15,000"
		},
		{
			id: 4,
			price: "₹20,000"
		},
		{
			id: 5,
			price: "₹25,000"
		}
	];
	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col} md="4" controlId="validationCustom01">
					<FloatingLabel controlId="floatingInput" label="Full Name*" className="mb-3">
						<Form.Control required type="text" placeholder="Full name" />
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} md="4" controlId="validationCustom02">
					<FloatingLabel controlId="floatingInput" label="Email*" className="mb-3">
						<Form.Control required type="email" placeholder="Email" />
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} md="4" controlId="validationCustom02">
					<FloatingLabel controlId="floatingInput" label="Phone*" className="mb-3">
						<Form.Control required type="text" placeholder="Phone" />
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row>
				<div className="d-flex justify-content-start flex-wrap gap-3 mb-4">
					{prices.map(function (items) {
						return (
							<div key={items.id}>
								<button onClick={() => setActive(items.id)} className={`price ${active === items.id && "active"}`}>
									{items.price}
								</button>
							</div>
						);
					})}
					<div>
						<Form.Group as={Col} md="4" controlId="validationCustom02" className="custom-price-input">
							<Form.Control type="text" placeholder="Custom" />
						</Form.Group>
					</div>
				</div>
			</Row>
			<Form.Group className="mb-3">
				<Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
			</Form.Group>
			<Button className="btn btn-primary px-5 rounded-pill btn-lg" type="submit">
				Donate Now
			</Button>
		</Form>
	);
};

export default DonationForm;
