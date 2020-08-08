import { FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Banner from "../components/banner_area";
import Layout from "../components/layout";

import { getSortedPostsData } from '../lib/posts'

// import BookCom from "../components/books"


export default function Books({allPostsData}) {
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
				{allPostsData.map(({id, title, authorName, avator, bookImg, rate, purchase,}) =>(

                  					<div className="col-lg-4 col-md-6 col-sm-12 single_course" key={id}>
						<div className="course_head">
							<img
								className="img-fluid"
								style={{ width: `100%`, height: `25rem` }}
								src={bookImg}
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
									{title}
								</a>
							</h4>

							<div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
								<div className="authr_meta">
									<img
										src={avator}
										alt=""
									/>
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
											{purchase}{" "}
										</a>
									</span>
									<span className="meta_info">
										<a href="#">
											{" "}
											<i className="ti-heart mr-2">
												<FaHeart />
											</i>
											{rate}{" "}
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
					))}

					</div>
					</div>

			</div>
		</Layout>
	);
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}