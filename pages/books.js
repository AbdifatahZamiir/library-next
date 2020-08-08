import { FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Banner from "../components/banner_area";
import Layout from "../components/layout";

export default function Books() {
	return (
		<Layout white="white-header">
			<Banner title="Books" home="Home " path="books" />
			<div className="popular_courses mt-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="main_title">
								<h2 className="mb-3">High Rate Books</h2>
								<p>
									Replenish man have thing gathering lights
									yielding shall you
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-12 single_course">
							<div className="course_head">
								<img
									className="img-fluid"
									style={{ width: `100%`, height: `25rem` }}
									src="/images/cover1.jpg"
									alt="course2"
								/>
							</div>
							<div className="course_content">
								<span className="tag mb-4 d-inline-block">
									<Link href="/">
										<a
											style={{
												color: `#fff`,
											}}
										>
											Read More
										</a>
									</Link>
								</span>
								<h4 className="mb-3">
									<a href="course-details.html">
										Custom Product Read More
									</a>
								</h4>

								<div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
									<div className="authr_meta">
										<img
											src="/images/courses/author1.png"
											alt=""
										/>
										<span className="d-inline-block ml-2">
											Cameron
										</span>
									</div>
									<div className="mt-lg-0 mt-3">
										<span className="meta_info mr-4">
											<a href="#">
												{" "}
												<i className="ti-user mr-2">
													<FaUser />
												</i>
												25{" "}
											</a>
										</span>
										<span className="meta_info">
											<a href="#">
												{" "}
												<i className="ti-heart mr-2">
													<FaHeart />
												</i>
												35{" "}
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12 single_course">
							<div className="course_head">
								<img
									className="img-fluid"
									style={{ width: `100%`, height: `25rem` }}
									src="/images/cover2.jpg"
									alt="course2"
								/>
							</div>
							<div className="course_content">
								<span className="tag mb-4 d-inline-block">
									<Link href="/">
										<a
											style={{
												color: `#fff`,
											}}
										>
											Read More
										</a>
									</Link>
								</span>
								<h4 className="mb-3">
									<a href="course-details.html">
										Social Media Network
									</a>
								</h4>

								<div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
									<div className="authr_meta">
										<img
											src="/images/courses/author2.png"
											alt=""
										/>
										<span className="d-inline-block ml-2">
											Cameron
										</span>
									</div>
									<div className="mt-lg-0 mt-3">
										<span className="meta_info mr-4">
											<a href="#">
												{" "}
												<i className="ti-user mr-2">
													<FaUser />
												</i>
												25{" "}
											</a>
										</span>
										<span className="meta_info">
											<a href="#">
												{" "}
												<i className="ti-heart mr-2">
													<FaHeart />
												</i>
												35{" "}
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12 single_course">
							<div className="course_head">
								<img
									className="img-fluid"
									style={{ width: `100%`, height: `25rem` }}
									src="/images/cover3.png"
									alt="course3"
								/>
							</div>
							<div className="course_content">
								<span className="tag mb-4 d-inline-block">
									<Link href="/">
										<a
											style={{
												color: `#fff`,
											}}
										>
											Read More
										</a>
									</Link>
								</span>
								<h4 className="mb-3">
									<a href="course-details.html">
										Histories Demes{" "}
									</a>
								</h4>

								<div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
									<div className="authr_meta">
										<img
											src="/images/courses/author3.png"
											alt=""
										/>
										<span className="d-inline-block ml-2">
											Cameron
										</span>
									</div>
									<div className="mt-lg-0 mt-3">
										<span className="meta_info mr-4">
											<a href="#">
												{" "}
												<i className="ti-user mr-2">
													<FaUser />
												</i>
												25{" "}
											</a>
										</span>
										<span className="meta_info">
											<a href="#">
												{" "}
												<i className="ti-heart mr-2">
													<FaHeart />
												</i>
												35{" "}
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
