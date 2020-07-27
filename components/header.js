export default function Header() {
	return (
		<header className="header_area">
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						<a className="navbar-brand logo_h" href="index">
							<img src="/images/logo.png" alt="logo" />
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
								<li className="nav-item active">
									<a className="nav-link" href="index.html">
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
												href="index"
											>
												Courses
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="index"
											>
												Course Details
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="index"
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
											<a className="nav-link" href="blog">
												Blog
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="blog-detail"
											>
												Blog Details
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact">
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
	);
}
