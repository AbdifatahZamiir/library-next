import Link from "next/link";

export default function WhiteHeader() {
	return (
		<header className="header_area white-header ">
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
									<Link href="/" activeClassName="active">
										<a className="nav-link">Home</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										href="/about"
										activeClassName="active"
									>
										<a className="nav-link">About</a>
									</Link>
								</li>
								<li className="nav-item submenu dropdown">
									<Link
										href="/books"
										activeClassName="active"
									>
										<a
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Books
										</a>
									</Link>
								</li>
								<li className="nav-item submenu dropdown">
									<Link href="/blog" activeClassName="active">
										<a
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Blog
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										href="/contact"
										activeClassName="active"
									>
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
