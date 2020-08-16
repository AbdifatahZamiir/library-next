import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export default function Blogs({ blogdata }) {
	return (
		<div className="popular_courses ">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-5">
						<div className="main_title">
							<h2 className="mb-3">Our Popular Courses</h2>
							<p>
								Replenish man have thing gathering lights
								yielding shall you
							</p>
						</div>
					</div>
				</div>
			</div>

			<Carousel>
				<Carousel.Item>
					<div className="row">
						{blogdata.map(
							({ title, blogImg, description, category }) => (
								<Carousel.Item>
									<div className="col-lg-4 col-md-6 col-sm-12 single_course">
										<div className="course_head">
											<img
												className="img-fluid"
												src={blogImg}
												alt="course2"
											/>
										</div>
										<div className="course_content">
											<span className="tag mb-4 d-inline-block">
												{category}
											</span>
											<h4 className="mb-3">
												<a href="course-details.html">
													{title}
												</a>
											</h4>
											<p>{description}</p>
										</div>
									</div>
								</Carousel.Item>
							)
						)}
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
