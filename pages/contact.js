import Layout from "../components/layout";
import Banner from "../components/banner_area";
import Map from "../components/map";
import ContactForm from "../components/contactForm";
import { useFormik } from "formik";

export default function Contact() {
	return (
		<Layout white="white-header">
			<Banner title="Contact" home="Home " path="contact" />
			<section className="contact_area section_gap">
				<div className="container">
					<div className="row mb-5">
						<Map />
					</div>
					<div className="row">
						<div className="col-lg-3">
							<div className="contact_info">
								<div className="info_item">
									<i className="ti-home"></i>
									<h6>California, United States</h6>
									<p>Santa monica bullevard</p>
								</div>
								<div className="info_item">
									<i className="ti-headphone"></i>
									<h6>
										<a href="#">00 (440) 9865 562</a>
									</h6>
									<p>Mon to Fri 9am to 6 pm</p>
								</div>
								<div className="info_item">
									<i className="ti-email"></i>
									<h6>
										<a href="#">support@colorlib.com</a>
									</h6>
									<p>Send us your query anytime!</p>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
