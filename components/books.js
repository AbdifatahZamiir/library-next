import { FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Books({ bookdata }) {
	return (
		<div className="popular_courses ">
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
					{bookdata.map((post) => {
						const {
							id,
							bookImg,
							avatar,
							authorName,
							title,
							purchase,
							like,
						} = post;
						return (
							<div
								className="col-lg-4 col-md-6 col-sm-12 single_course"
								key={id}
							>
								<div className="	course_head">
									<img
										className="img-fluid"
										style={{
											width: `100%`,
											height: `25rem`,
										}}
										src={bookImg}
										alt="course2"
									/>
								</div>
								<div className="course_content">
									<span className="tag mb-4 d-inline-block">
										<Link
											href="/books/[id]"
											as={`/books/${id}`}
										>
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
										<Link
											href="/books/[id]"
											as={`/books/${id}`}
										>
											<a>{title}</a>
										</Link>
									</h4>

									<div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
										<div className="authr_meta">
											<img src={avatar} alt="" />
											<span className="d-inline-block ml-2">
												{authorName}
											</span>
										</div>
										<div className="mt-lg-0 mt-3">
											<span className="meta_info mr-4">
												<a href="#">
													{" "}
													<i className="ti-user mr-2">
														<FaUser />
													</i>
													{purchase}
												</a>
											</span>
											<span className="meta_info">
												<a href="#">
													{" "}
													<i className="ti-heart mr-2">
														<FaHeart />
													</i>
													{like}{" "}
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
