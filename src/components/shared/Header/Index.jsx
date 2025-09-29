import { Link, useLocation } from "react-router";

export default function Header() {
	const location = useLocation();
	const isActive = (path) => {
		return location.pathname === path;
	};
	return (
		<>
			<header className="sticky-top bg-white shadow-sm">
				<nav className="navbar navbar-expand-md blueSky" role="navigation">
					<div className="container">
						<Link
							to="/"
							className="navbar-brand d-flex align-items-center text-decoration-none">
							<i
								className="fa-solid fa-book fa-2x"
								style={{ color: "#FFF" }}></i>
							<span className="ms-2 fs-4 fw-bold text-white">bookstore</span>
						</Link>

						<button
							className="navbar-toggler border-0"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#mainNav"
							aria-controls="mainNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="mainNav">
							<ul className="navbar-nav mx-auto  mb-2 mb-md-0 fw-semibold">
								<li className="nav-item me-2 me-md-3">
									{" "}
									<Link
										to="/"
										className={`nav-link px-3 ${
											isActive("/")
												? "text-white bg-primary rounded"
												: "text-body"
										}`}>
										Home
									</Link>
								</li>
								<li className="nav-item me-2 me-md-3">
									<Link
										to="/books"
										className={`nav-link px-3 ${
											isActive("/books")
												? "text-white bg-primary rounded"
												: "text-body"
										}`}>
										Books
									</Link>
								</li>
								<li className="nav-item me-2 me-md-3">
									<Link
										to="/teams"
										className={`nav-link px-3 ${
											isActive("/teams")
												? "text-white bg-primary rounded"
												: "text-body"
										}`}>
										Teams
									</Link>
								</li>
								<li className="nav-item me-2 me-md-3">
									<Link
										to="/contacts"
										className={`nav-link px-3 ${
											isActive("/contacts")
												? "text-white bg-primary rounded"
												: "text-body"
										}`}>
										Contacts
									</Link>
								</li>
							</ul>

							<div className="d-flex align-items-center">
								<Link to="/login" className="me-2">
									<button
										type="button"
										className="btn btn-outline-primary btn-sm rounded-3">
										Login
									</button>
								</Link>
								<Link to="/register">
									<button
										type="button"
										className="btn btn-primary btn-sm rounded-3">
										Register
									</button>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
