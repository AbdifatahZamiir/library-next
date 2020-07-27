export default function Registration() {
	return (
		<div className="section_gap registration_area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="row clock_sec clockdiv" id="clockdiv">
							<div className="col-lg-12">
								<h1 className="mb-3">Register Now</h1>
								<p>
									There is a moment in the life of any
									aspiring astronomer that it is time to buy
									that first telescope. It’s exciting to think
									about setting up your own viewing station.
								</p>
							</div>
							<div className="col clockinner1 clockinner">
								<h1 className="days">150</h1>
								<span className="smalltext">Days</span>
							</div>
							<div className="col clockinner clockinner1">
								<h1 className="hours">23</h1>
								<span className="smalltext">Hours</span>
							</div>
							<div className="col clockinner clockinner1">
								<h1 className="minutes">47</h1>
								<span className="smalltext">Mins</span>
							</div>
							<div className="col clockinner clockinner1">
								<h1 className="seconds">59</h1>
								<span className="smalltext">Secs</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 offset-lg-1">
						<div className="register_form">
							<h3>Courses for Free</h3>
							<p>It is high time for learning</p>
							<form
								className="form_area"
								id="myForm"
								action="mail.html"
								method="post"
							>
								<div className="row">
									<div className="col-lg-12 form_group">
										<input
											name="name"
											placeholder="Your Name"
											required=""
											type="text"
										/>
										<input
											name="name"
											placeholder="Your Phone Number"
											required=""
											type="tel"
										/>
										<input
											name="email"
											placeholder="Your Email Address"
											pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
											required=""
											type="email"
										/>
									</div>
									<div className="col-lg-12 text-center">
										<button className="primary-btn">
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
