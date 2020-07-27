import Link from "next/link";
export default function Banner({ title, home, path }) {
	return (
		<section className="banner_area">
			<div className="banner_inner d-flex align-items-center">
				<div className="overlay"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="banner_content text-center">
								<h2>{title}</h2>
								<div className="page_link">
									<Link href="/">
										<a>{home}</a>
									</Link>
									<a>{path}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
