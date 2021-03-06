import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import SubscribeForm from "./subscribeForm";
export default function Footer() {
	return (
		<footer className="footer-area section_gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-6 single-footer-widget">
						<h5 className="text-white">About eLIBRARY</h5>
						<p>
							Subdue whales void god which living don't midst
							lesser yielding over lights whose...
						</p>
					</div>
					<div className="col-lg-2 col-md-8 single-footer-widget"></div>
					<div className="col-lg-2 col-md-4 single-footer-widget">
						<h5 className="text-white">Main Links</h5>
						<ul>
							<li>
								<Link href="/about">
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href="/blogs">
									<a>Blogs</a>
								</Link>{" "}
							</li>
							<li>
								<Link href="/books">
									<a>Books</a>
								</Link>{" "}
							</li>
							<li>
								<Link href="/contact">
									<a>Contact Us</a>
								</Link>{" "}
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-6 single-footer-widget"></div>
					<div className="col-lg-4 col-md-6 single-footer-widget">
						<h5 className="text-white">Newsletter</h5>
						<p>You can trust us. we only send promo offers,</p>
						<div className="form-wrap" id="mc_embed_signup">
							<SubscribeForm />
						</div>
					</div>
				</div>
				<div className="row footer-bottom d-flex justify-content-between">
					<p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
						Copyright &copy;
						<span>{new Date().getFullYear()}</span> All rights
						reserved | This template is made with{" "}
						<i className="ti-heart" aria-hidden="true"></i> by{" "}
						<a href="https://colorlib.com" target="_blank">
							eLIBRARY
						</a>
					</p>
					<div className="col-lg-4 col-sm-12 footer-social">
						<a href="#">
							<i className="ti-facebook">
								<FaFacebook />
							</i>
						</a>
						<a href="#">
							<i className="ti-twitter">
								<FaTwitter />
							</i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
