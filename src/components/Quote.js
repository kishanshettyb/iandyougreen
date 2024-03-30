import React from "react";
import Container from "react-bootstrap/Container";

function Quote() {
	return (
		<section className="quote" id="about">
			<Container>
				<h1 className="display-1 fw-bold font-lora text-center text-secondary mb-4">Project - I and You Green</h1>
				<h2 className="display-6 font-lora  text-secondary text-center mb-3">
					"Planet green does not mean someone painted it, but it is the very life, green is life from god, and it’s our responsibility to restore and pass it on the next
					generation"
				</h2>
				<h2 className="display-6 font-lora fw-semibold text-center">
					<i>- Sri Prasad</i>
				</h2>
			</Container>
		</section>
	);
}

export default Quote;
