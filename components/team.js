import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Team({ teamdata }) {
	return (
		<section className="trainer_area section_gap_top">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-5">
						<div className="main_title">
							<h2 className="mb-3">Our Expert Team</h2>
							<p>
								Replenish man have thing gathering lights
								yielding shall you
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center d-flex align-items-center">
					{teamdata.map((team) => {
						const { name, bookImg, description, status } = team;
						return (
							<div
								className="col-lg-3 col-md-6 col-sm-12 single-trainer"
								key={name}
							>
								<div className="thumb d-flex justify-content-sm-center">
									<img
										className="img-fluid"
										src={bookImg}
										alt="trainer1"
									/>
								</div>
								<div className="meta-text text-sm-center">
									<h4>{name}</h4>
									<p className="designation">{status}</p>
									<div className="mb-4">
										<p>{description}</p>
									</div>
									<div className="align-items-center justify-content-center d-flex">
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
										<a href="#">
											<i className="ti-linkedin">
												<FaInstagram />
											</i>
										</a>
										<a href="#">
											<i className="ti-pinterest">
												<FaLinkedin />
											</i>
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
