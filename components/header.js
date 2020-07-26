import Layout from "./layout";
export default function Header() {
	return (
		<Layout>
			<header className="header_area">
				<div className="main_menu">
					<div className="search_input" id="search_input_box">
						<div className="container">
							<form
								className="d-flex justify-content-between"
								method=""
								action=""
							>
								<input
									type="text"
									className="form-control"
									id="search_input"
									placeholder="Search Here"
								/>
								<button type="submit" className="btn"></button>
								<span
									className="ti-close"
									id="close_search"
									title="Close Search"
								></span>
							</form>
						</div>
					</div>

					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container">
							<a
								className="navbar-brand logo_h"
								href="index.html"
							></a>
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
									<li className="nav-item active">
										<a
											className="nav-link"
											href="index.html"
										>
											Home
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											href="about-us.html"
										>
											About
										</a>
									</li>
									<li className="nav-item submenu dropdown">
										<a
											href="#"
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Pages
										</a>
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
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a
													className="nav-link"
													href="blog.html"
												>
													Blog
												</a>
											</li>
											<li className="nav-item">
												<a
													className="nav-link"
													href="single-blog.html"
												>
													Blog Details
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											href="contact.html"
										>
											Contact
										</a>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link search"
											id="search"
										>
											<i className="ti-search"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</Layout>
	);
}
