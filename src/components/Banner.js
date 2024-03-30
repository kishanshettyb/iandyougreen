import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DonationForm from "./DonationForm";

const Banner = () => {
	return (
		<section className="banner">
			<div className="container">
				<StaticImage src="../images/banner/hero.svg" alt="hero" className="hero" />
				<div className="pt-5">
					<div className="row my-5 d-flex align-items-center">
						<div className="bg-white p-5 banner-donation-card">
							<div className="row d-flex align-items-center">
								<div className="col-md-12">
									<h2 className="text-center text-secondary font-lora">Donate to Save Nature's Green & Forests</h2>
									<p className="mb-5 text-center m-auto opacity-75">
										Support efforts to preserve our planet's greenery & protect vital forests. Your donation funds reforestation, habitat restoration, & sustainable practices. Make
										a difference today!
									</p>
									<DonationForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wave"></div>
		</section>
	);
};

export default Banner;
