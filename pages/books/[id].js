import Layout from "../../components/layout";
import Banner from "../../components/banner_area";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
export default function book({ postData }) {
	return (
		<Layout white="white-header">
			<Banner
				title="Book Details"
				home="Home"
				path="book / bookDetails"
			/>
			<section className="course_details_area section_gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 course_details_left">
							<div className="main_image">
								<img
									style={{ width: "80%", height: "450px" }}
									className="img-fluid"
									src={postData.bookImg}
									alt=""
								/>
							</div>
							<div className="content_wrapper">
								<h4 className="title">{postData.title}</h4>
								<div className="content">
									<div
										dangerouslySetInnerHTML={{
											__html: postData.contentHtml,
										}}
									/>
								</div>

								<h4 className="title">Book Contents</h4>
								<div className="content">
									<ul className="course_list">
										<li className="justify-content-between d-flex">
											<p>Introduction Lesson</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Basics of HTML</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Getting Know about HTML</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Tags and Attributes</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Basics of CSS</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Getting Familiar with CSS</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Introduction to Bootstrap</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Responsive Design</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
										<li className="justify-content-between d-flex">
											<p>Canvas in HTML 5</p>
											<a
												className="primary-btn text-uppercase"
												href="#"
											>
												View Details
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-6 right-contents">
							<ul>
								<li>
									<a
										className="justify-content-between d-flex"
										href="#"
									>
										<p>Author's Name</p>
										<span className="or">
											{postData.authorName}
										</span>
									</a>
								</li>
								<li>
									<a
										className="justify-content-between d-flex"
										href="#"
									>
										<p>Purchase Number</p>
										<span>{postData.purchase}</span>
									</a>
								</li>
								<li>
									<a
										className="justify-content-between d-flex"
										href="#"
									>
										<p>Likes</p>
										<span>{postData.like}</span>
									</a>
								</li>
							</ul>

							<div className="content">
								<div className="feedeback">
									<h6>Your Feedback</h6>
									<textarea
										name="feedback"
										className="form-control"
										cols="10"
										rows="10"
									></textarea>
									<div className="mt-10 text-right">
										<a
											href="#"
											className="primary-btn2 text-right rounded-0 text-white"
										>
											Submit
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export async function getStaticPaths() {
	const myDirectory = path.join(process.cwd(), `contents/books`);
	const filenames = fs.readdirSync(myDirectory);
	const paths = filenames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const myDirectory = path.join(process.cwd(), `contents/books`);
	const { id } = params;
	const fullPath = path.join(myDirectory, `${params.id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	const postData = { contentHtml, ...matterResult.data };

	return {
		props: {
			postData,
		},
	};
}
