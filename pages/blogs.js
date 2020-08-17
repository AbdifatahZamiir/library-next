import styled from "styled-components";
import Banner from "../components/banner_area";
import Layout from "../components/layout";
import Link from "next/link";
import { getSortedBlogData } from "../lib/homedata";

export default function Blogs({ blogdata }) {
	return (
		<Layout white="white-header">
			<Banner title="Blogs" home="Home" path=" blogs" />
			<div className="popular_courses mt-5">
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
				<div className="container">
					<div className="row">
						{blogdata.map(
							({ title, blogImg, description, category, id }) => (
								<div className="col-lg-4 col-md-6 col-sm-12 single_course mb-4">
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
											<Link
												href="/blogDetails/[id]"
												as={`/blogDetails/${id}`}
											>
												<a>{title}</a>
											</Link>
										</h4>
										<p>{description}</p>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}
export async function getStaticProps() {
	const blogdata = await getSortedBlogData();

	return {
		props: {
			blogdata,
		},
	};
}
