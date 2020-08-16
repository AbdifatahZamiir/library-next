import Layout from "../components/layout";
import Banner from "../components/banner_area";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export default function About({ postData }) {
		const {	id,	aboutImage,	title} = postData;
	return (
		<Layout white="white-header">
			<Banner title="About" home="Home " path="about" />
			<section className="about_area section_gap">
				<div className="container">
						
						
						
								<div className="row h_blog_item" key={aboutImage}>
						<div className="col-lg-6">
							<div className="h_blog_img">
								<img
									className="img-fluid"
									src={aboutImage}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="h_blog_text">
								<div className="h_blog_text_inner left right">
									<h4>{title}</h4>
									<div dangerouslySetInnerHTML={{
											__html: postData.contentHtml,
										}}>

									</div>
									<p>
										Subdue whales void god which living
										don't midst lesser yieldi over lights
										whose. Cattle greater brought sixth fly
										den dry good tree isn't seed stars were
										the boring.
									</p>
									<a className="primary-btn" href="#">
										Learn More{" "}
										<i className="ti-arrow-right ml-1"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					

					
				</div>
			</section>
			<section className="feature_area section_gap_top title-bg mb-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="main_title">
								<h2 className="mb-3 text-white">
									Awesome Feature
								</h2>
								<p>
									Replenish man have thing gathering lights
									yielding shall you
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single_feature">
								<div className="icon">
									<span className="flaticon-student">
										{" "}
										<img
											className="icons"
											src="/images/icons/bookshelf.svg"
											alt="bookshelf"
										/>
									</span>
								</div>
								<div className="desc">
									<h4 className="mt-3 mb-2">
										Scholarship Facility
									</h4>
									<p>
										One make creepeth, man bearing theira
										firmament won't great heaven
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single_feature">
								<div className="icon">
									<span className="flaticon-book">
										{" "}
										<img
											className="icons"
											src="/images/icons/reading-book.svg"
											alt="reading books"
										/>
									</span>
								</div>
								<div className="desc">
									<h4 className="mt-3 mb-2">
										Sell Online Course
									</h4>
									<p>
										One make creepeth, man bearing theira
										firmament won't great heaven
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single_feature">
								<div className="icon">
									<span className="flaticon-earth">
										{" "}
										<img
											className="icons"
											src="/images/icons/library.svg"
											alt="library"
										/>
									</span>
								</div>
								<div className="desc">
									<h4 className="mt-3 mb-2">
										Global Certification
									</h4>
									<p>
										One make creepeth, man bearing theira
										firmament won't great heaven
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}


export async function getStaticProps() {
	const myDirectory = path.join(process.cwd(), `contents/about`);
	const id = "aboutPage";
	const fullPath = path.join(myDirectory, `${id}.md`);
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