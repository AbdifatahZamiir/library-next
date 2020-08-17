import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

import { getBlogIds, getBlogData, getSortedBlogData } from "../../lib/homedata";
import { FaSearch, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

import Layout from "../../components/layout";
import Slider from "../../components/slider";
import Banner from "../../components/banner_area";
import PopularBlog from "../../components/popularBlogs";

export default function BlogDetail({ postData, allpostdata }) {
	return (
		<Layout white="white-header">
			<Banner
				title="Blog Details"
				home="Home"
				path="blog / blogDetails"
			/>
			<section className="blog_area single-post-area section_gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
							<div className="single-post row">
								<div className="col-lg-12">
									<div className="feature-img">
										<img
											className="img-fluid"
											src={postData.blogImg}
											alt=""
										/>
									</div>
								</div>

								<div className="col-lg-9 col-md-9 blog_details">
									<h2>{postData.title} </h2>
									<div
										className="excert"
										dangerouslySetInnerHTML={{
											__html: postData.contentHtml,
										}}
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="blog_right_sidebar">
								<h3 className="widget_title text-white">
									Author Info
								</h3>
								<aside className="single_sidebar_widget author_widget mt-3 mb-3">
									<img
										className="author_img rounded-circle"
										src={postData.authorImg}
										alt={postData.author}
									/>
									<h4>{postData.author}</h4>
									<p>{postData.authorStatus}</p>
									<div className="social_icon">
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
											<i className="ti-github">
												<FaGithub />
											</i>
										</a>
									</div>
								</aside>
								<PopularBlog allpostdata={allpostdata} />

								<aside className="single-sidebar-widget newsletter_widget">
									<h4 className="widget_title text-white">
										Newsletter
									</h4>
									<p>
										Here, I focus on a range of items and
										features that we use in life without
										giving them a second thought.
									</p>
									<div className="form-group d-flex flex-row">
										<div className="input-group">
											<div className="input-group-prepend">
												<div className="input-group-text">
													<i
														className="ti-email"
														aria-hidden="true"
													></i>
												</div>
											</div>
											<input
												type="text"
												className="form-control"
												id="inlineFormInputGroup"
												placeholder="Enter email"
											/>
										</div>
										<a href="#" className="bbtns">
											Subcribe
										</a>
									</div>
									<p className="text-bottom">
										You can unsubscribe at any time
									</p>
									<div className="br"></div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await getBlogIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const myDirectory = path.join(process.cwd(), `contents/blogs`);
	const postData = await getBlogData(params.id);
	const allpostdata = await getSortedBlogData();

	return {
		props: {
			postData,
			allpostdata,
		},
	};
}
