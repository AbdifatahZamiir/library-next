import Link from "next/link";
export default function Slider() {
	return (
		<section className="home_banner_area">
			<div className="test_banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="banner_content text-center">
								<p className="text-uppercase">
									Find your books one place
								</p>
								<h2 className="text-uppercase mt-4 mb-5">
									Take your skill to the next level
								</h2>
								<div>
									<Link href="/about">
										<a
											style={{ textDecoration: `none` }}
											className="primary-btn2 mb-3 mb-sm-0"
										>
											about library
										</a>
									</Link>
									<Link href="/books">
										<a
											style={{ textDecoration: `none` }}
											className="primary-btn ml-sm-3 ml-0"
										>
											see books
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
