import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
function Contents() {
	return (
		<section>
			<Container>
				<Row className="d-flex align-items-center">
					<Col md={12} xl={6} className="text-center">
						<StaticImage src="../images/banner/tiles.svg" className="img-fluid mb-5 mb-lg-0 " alt="" />
					</Col>
					<Col md={12} xl={6} className="text-start">
						<div className="me-0 me-lg-5">
							<p>
								The seeds of this project were sown by <b>Sri Prasad</b>, founder of “<b>I and You Being together foundation</b>”.
							</p>
							<p>
								<b>“Neem Tree Revolution”</b> <b>‘nimbati swasthyam dadati’</b>(giver of good health) Through this project we are sowing Neem Saplings to plant and instill a sense
								of environmental awareness amongst youth. By this project we consider it as a form of green activism through Saplings planting and Mini Forest formation to create a
								disease-free society.
							</p>
							<p>
								We have planted <b>250000+</b> plus saplings in Bangalore-Mysore-Belgaum in Karnataka, Hyderabad-Andhra Pradesh, Chennai-Madurai-Salem in Tamil nadu, Meerut-Uttar
								Pradesh London-UK, Berlin-Germany, Zanzibar-East Africa and Muscat. 6 Mini forests across Bangalore and still on
							</p>
							<p>
								The seeds for the project were sown by <b>Sri Prasad</b>, founder of <b>“I and You Being together foundation”</b>, I and you green includes three separate projects
								they are namely:
							</p>
							<ul className="regular-ul">
								<li>
									1. <b>I AND YOU GREEN</b> - Neem Saplings plantation
								</li>
								<li>
									2. <b>MINI FOREST FORMATIONS</b> - Bees & Birds attracting plants plantation
								</li>
								<li>
									3. <b>SRI KRISHI</b> - Promotion and creating awareness about organic farming{" "}
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contents;
