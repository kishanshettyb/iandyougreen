import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
	const [scrolltopdata, setscrolltopdata] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY < 50) {
				setscrolltopdata("trans");
			} else {
				setscrolltopdata("fixed-bg shadow-sm");
			}
		});
	}, []);
	return (
		<Navbar expand="lg" className={`navbar-bg fixed-top   ${scrolltopdata}`}>
			<Container>
				<Navbar.Brand href="#">
					<StaticImage src="../images/I And You Green.png" className="logo" alt="I And You Green" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<Link className="nav-link active" to="#section1" data-to-scrollspy-id="section1">
							Home
						</Link>
						<Link className="nav-link" to="#section2" data-to-scrollspy-id="section2">
							About
						</Link>
						<Link className="nav-link" to="#section3" data-to-scrollspy-id="section3">
							Projects
						</Link>
						<Link className="nav-link" to="#section4" data-to-scrollspy-id="section4">
							Contact Us
						</Link>
					</Nav>
					<Form className="d-flex">
						<Button variant="primary rounded-pill px-4">Donate</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
