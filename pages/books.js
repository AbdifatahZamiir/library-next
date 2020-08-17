import { FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Banner from "../components/banner_area";
import Layout from "../components/layout";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export default function Books({ allPostsData }) {
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
						{allPostsData.map((post) => {
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
									<div className="course_head">
										<Link
											href="/books/[id]"
											as={`/books/${id}`}
										>
											<a>
												<img
													className="img-fluid"
													style={{
														width: `100%`,
														height: `25rem`,
													}}
													src={bookImg}
													alt="course2"
												/>
											</a>
										</Link>
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
														textDecoration: `none`,
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
												<a
													style={{
														textDecoration: "none",
													}}
												>
													{title}
												</a>
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
													<i className="ti-user mr-2">
														<FaUser />
													</i>
													{purchase}
												</span>
												<span className="meta_info">
													<i className="ti-heart mr-2">
														<FaHeart />
													</i>
													{like}
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
		</Layout>
	);
}

export async function getStaticProps() {
	const directory = path.join(process.cwd(), `contents/books`);
	const fileNames = fs.readdirSync(directory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(`contents/books`, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data,
		};
	});
	return {
		props: {
			allPostsData,
		},
	};
}
