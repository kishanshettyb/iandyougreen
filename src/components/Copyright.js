import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

const Copyright = () => {
	return (
		<div className="copyright">
			<Container>
				<Row>
					<Col xs={12} lg={6}>
						<p className="mb-0">&copy; All RIghts Reserved. I And You Being Together Foundation</p>
					</Col>
					<Col xs={4} lg={2}>
						<Link to="privacy">Privacy Policy</Link>
					</Col>
					<Col xs={4} lg={2}>
						<Link to="terms">Terms & Conditions</Link>
					</Col>
					<Col xs={4} lg={2}>
						<Link to="refund">Refund Policy</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Copyright;
