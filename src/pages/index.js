import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ScrollSpy from "react-ui-scrollspy";
import Quote from "../components/Quote";
import Contents from "../components/Contents";
import Award from "../components/Award";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
const index = () => {
	return (
		<div>
			<Header />
			<ScrollSpy>
				<Banner />
				<Quote />
				<Contents />
				<Award />
				<Contact />
				<Copyright />
			</ScrollSpy>
		</div>
	);
};

export default index;
