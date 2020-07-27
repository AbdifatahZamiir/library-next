import Link from "next/link";

export default function WhiteHeader() {
	return (
		<header className="header_area white-header">
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						<a className="navbar-brand" href="index.html">
							<img
								className="logo-2"
								src="/images/logo2.png"
								alt=""
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="icon-bar"></span>{" "}
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div
							className="collapse navbar-collapse offset"
							id="navbarSupportedContent"
						>
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item">
									<Link href="/">
										<a className="nav-link">Home</a>
									</Link>
								</li>
								<li className="nav-item active">
									<a
										className="nav-link"
										href="about-us.html"
									>
										About
									</a>
								</li>
								<li className="nav-item submenu dropdown">
									<Link href="#">
										<a
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Pages
										</a>
									</Link>
									<ul className="dropdown-menu">
										<li className="nav-item">
											<a
												className="nav-link"
												href="courses.html"
											>
												Courses
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="course-details.html"
											>
												Course Details
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="elements.html"
											>
												Elements
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item submenu dropdown">
									<Link href="/about">
										<a
											href="#"
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Blog
										</a>
									</Link>

									<ul className="dropdown-menu">
										<li className="nav-item">
											<Link href="/blog">
												<a
													className="nav-link"
													href="blog"
												>
													Blog
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/blog-detail">
												<a className="nav-link">
													Blog Details
												</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<Link href="/contact">
										<a className="nav-link">Contact</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
