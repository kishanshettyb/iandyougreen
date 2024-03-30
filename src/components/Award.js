import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Award() {
	return (
		<>
			<section className="award">
				<Container>
					<h1 className="display-3 text-secondary fw-semibold font-lora text-center">Sri Krishi</h1>
					<p className="text-center fw-bold opacity-75 mb-5">Promotion and creating awareness about organic farming</p>
					<Row className="d-flex align-items-center ">
						<Col md={12} lg={6}>
							<StaticImage src="../images/banner/anna.jpeg" alt="" className="img-fluid rounded-image mb-5 mb-lg-0" />
						</Col>
						<Col md={12} lg={6}>
							<div className="ms-0 ms-lg-4">
								<h1 className="mb-5 display-6 text-center">
									<span className="fw-semibold">Inaugurated by PADMA BHUSHAN KISAN BABURAO</span> <span className="fw-bold text-secondary">“ANNA” HAZARE</span>
								</h1>
								<h2 className="disply-6 font-lora font-semibold mb-3 text-center">
									Awaken the Villages and Villager's development of villages is the light of progress and prosperity
								</h2>
								<h2 className="disply-6 font-lora  text-center">
									<i>- Anna Hazare</i>
								</h2>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col md={6}>
							<h3 className="text-center disply-2 fw-bold text-capitalize mb-4">Mini Forest Formations</h3>
							<ul className="regular-ul">
								<li>Collective marketing to the distant metro cities </li>
								<li>Brand can be created to channelize the produce in 54 retail malls and stores </li>
								<li>Storage, processing, and value addition units viz. jams, jellies, dried powders, essential oils etc. can be set-up </li>
								<li>Harnessing the medicinal properties of the crops for generating higher income </li>
								<li>Export activities may be carried out</li>
							</ul>

							<h5 className="fw-bold mt-5 mb-2">Criteria for maintenance:</h5>
							<ul className="regular-ul">
								<li>Selection of planting material should be good </li>
								<li>Protection and proper care must be taken of seedlings during younger age </li>
								<li>Proper practice is necessary for harvesting and storage of the produce </li>
								<li>Marketing and realizing profits must be prioritized</li>
							</ul>
						</Col>
						<Col md={6}>
							<h3 className="text-center disply-2 fw-bold text-capitalize mb-4">Neem Saplings Plantations</h3>
							<ul className="regular-ul">
								<li>To increase the farmer's income through multiple fruit crops</li>
								<li>Trees to conserve water and reduce soil erosion</li>
								<li>To Increase ground water level</li>
								<li>To restore, preserve and maintain the diverse flora and fauna which will lead to ecological stability - Help lower temperatures during concrete heat</li>
								<li>Reduce air and noise pollution</li>
								<li>Attract local birds and insects</li>
								<li>To Create carbon sinks</li>
							</ul>
							<p className="my-4">
								A multidisciplinary approach to support farmers finds financial stability through Agroforestry, an approach feasible for implementation and for environmental
								conservation, Fruits bearing forests includes Bee attracting and Birds attracting trees.
							</p>
						</Col>

						<Col md={12} className="mt-5">
							<p>
								<b>SRI KRISHI</b> refers to the divine aspect of agriculture, a gift to farmers welfare, their economic stability and empowerment through project <b>SRI KRISHI</b>
								an organic farming.
							</p>
							<p>
								Unfortunately, ecosystems in much of rural India today are highly degraded. This is an outcome of the rapid climate change and human activities leading to a state
								of massive ecological imbalance.
							</p>
							<p>
								This is one of the root causes of Rural Poverty <b>The Sri Krishi</b> in its approach to <b>agroforestry and Organic farming has its motive mainly concerning.</b>
							</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default Award;
