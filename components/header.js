import Link from "next/link";

export default function Header() {
	return (
		<header className="header_area">
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						<a className="navbar-brand logo_h" href="/">
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
								<li className="nav-item">
									<Link href="/">
										<a className="nav-link">Home</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										href="/about"
										
									>
										<a className="nav-link">About</a>
									</Link>
								</li>
								<li className="nav-item submenu dropdown">
									<Link
										href="/books"
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
									<Link href="/blog" >
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
										
									>
										<a className="nav-link">Contact</a>
									</Link>
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
