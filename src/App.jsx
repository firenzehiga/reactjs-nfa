import "@/App.css";
import team1 from "@/assets/team/300_25.jpg";
import team2 from "@/assets/team/300_23.jpg";
import team3 from "@/assets/team/300_20.jpg";
import { atomic, products } from "@/utils/image.js";
function App() {
	return (
		<>
			{/* Header Section */}
			<header className="sticky-top bg-white shadow-sm">
				<div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
					<div className="col-md-3 mb-2 mb-md-0">
						<a
							href="#home"
							className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
							<i
								className="fa-solid fa-2xl fa-book"
								style={{ color: "#74C0FC" }}></i>
							<span className="ms-2 fs-4 fw-semibold">bookstore</span>
						</a>
					</div>
					<ul className="nav col-12 col-md-auto mb-2 fw-semibold  justify-content-center mb-md-0">
						<li>
							<a href="#home" className="nav-link px-2">
								Home
							</a>
						</li>
						<li>
							<a href="#books" className="nav-link px-2">
								Book
							</a>
						</li>
						<li>
							<a href="#team" className="nav-link px-2">
								Team
							</a>
						</li>
						<li>
							<a href="#footer" className="nav-link px-2">
								Contact
							</a>
						</li>
					</ul>
					<div className="col-md-3 text-end">
						<button
							type="button"
							onClick={() => alert("Login clicked")}
							className="btn btn-outline-primary me-2">
							Login
						</button>
						<button
							type="button"
							onClick={() => alert("Register   clicked")}
							className="btn btn-primary">
							Register
						</button>
					</div>
				</div>
			</header>

			<div className="container">
				{/* Hero Section */}
				<section id="home" className="container py-5">
					<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
						<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
							<h1 className="display-4 fw-bold lh-1 text-body-emphasis">
								Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa
							</h1>
							<p className="lead">
								Cara mudah dan terbukti untuk membangun kebiasaan baik dan
								menghentikan kebiasaan buruk
							</p>
							<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
								<button
									type="button"
									onClick={() => alert("Buy clicked")}
									className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
									Buy Now
								</button>
								<button
									type="button"
									onClick={() => alert("Detail clicked")}
									className="btn btn-outline-secondary btn-lg px-4">
									Detail
								</button>
							</div>
							<a href="#quotes" className="btn btn-success btn-sm px-4">
								Need Motivation?
							</a>
						</div>
						<div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
							<img
								src={atomic}
								alt="Gambar"
								className="img-fluid w-100 rounded-3"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</section>

				{/* Product List */}
				<section id="books" className="container">
					<div className="row py-lg-5">
						<div className="col-lg-6 col-md-8 mx-auto">
							<div className="col text-center">
								<h2 className="fw-bold">Best Seller</h2>
								<p className="lead text-body-secondary">
									Our most popular books based on sales. Its easy to Find your
									next great read!
								</p>
								<p>
									<a href="#books" className="btn btn-primary my-2 m-2">
										Views
									</a>
									<a href="#book-list" className="btn btn-secondary my-2">
										Other Books
									</a>
								</p>
							</div>
						</div>
					</div>
					<div id="book-list" className="container ">
						<div className="container">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
								{products.map((p) => (
									<div className="col" key={p.id}>
										<div className="card shadow-sm">
											<img
												src={p.img}
												alt={p.title}
												className="card-img-top img-fluid books"
											/>
											<div className="card-body">
												<p className="card-text text-body-secondary">
													{p.description}
												</p>
												<div className="d-flex justify-content-between align-items-center">
													<div className="btn-group">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															View
														</button>
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															Preview
														</button>
													</div>
													<small className="text-body-secondary">
														{p.date}
													</small>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				{/* Carousel Section */}
				<section id="quotes" className="container py-5 ">
					<div className="row py-lg-5">
						<div className="col-lg-6 col-md-8 mx-auto">
							<div className="col text-center">
								<h2 className="fw-bold">Pieces of Quotes</h2>
								<p className="lead text-body-secondary">
									Something short and leading about the collection below—its
									contents, the creator, etc. Make it short and sweet, but not
									too short so folks don’t simply skip over it entirely.
								</p>
							</div>
						</div>
					</div>
					<div
						id="myCarousel"
						className="carousel slide mb-6"
						data-bs-ride="carousel">
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"></button>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="1"
								aria-label="Slide 2"></button>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="2"
								aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://picsum.photos/1024/480/?image=68"
									className="d-block w-100"
									alt="..."
								/>
								<div className="container">
									<div className="carousel-caption text-start">
										<h1>New Journey Starts Here.</h1>
										<p className="fs-6">
											Every great adventure begins with a single step.
										</p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://picsum.photos/1024/480/?image=38"
									className="d-block w-100"
									alt="..."
								/>
								<div className="container">
									<div className="carousel-caption">
										<h1>Dream High.</h1>
										<p className="fs-6 text-body-secondary">
											Don’t be afraid to dream as high as the sky—your steps
											will follow.
										</p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://picsum.photos/1024/480/?image=18"
									className="d-block w-100"
									alt="..."
								/>
								<div className="container">
									<div className="carousel-caption text-end">
										<h1>Fresh Hope.</h1>
										<p className="fs-6">
											Green fields always bring new energy to move forward.
										</p>
									</div>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#myCarousel"
							data-bs-slide="prev">
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#myCarousel"
							data-bs-slide="next">
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</section>

				{/* Team Section */}
				<section id="team" className="container py-5">
					<div className="col-lg-6 col-md-8 mx-auto mb-4">
						<div className="col text-center">
							<h2 className="fw-bold">Our Team</h2>
							<p className="lead text-body-secondary">
								The talented people behind NF Academy Bookstore
							</p>
						</div>
					</div>

					<div className="row featurette align-items-center">
						<div className="col-md-7">
							<h2 className="featurette-heading fw-normal lh-1">
								Dexter Morgan
								<span className="text-body-secondary"> | Product Manager</span>
							</h2>
							<p className="lead">
								{" "}
								Dexter is a product manager with a passion for creating
								user-friendly and engaging products.
							</p>
						</div>

						<div className="col-md-5 d-flex justify-content-center">
							<img
								src={team1}
								className="rounded-circle img-fluid"
								alt="Team member"
								style={{
									width: "300px",
									height: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>

					<hr className="featurette-divider" />

					<div className="row featurette">
						<div className="col-md-7 order-md-2">
							<h2 className="featurette-heading fw-normal lh-1">
								James Doakes
								<span className="text-body-secondary"> | Developer</span>
							</h2>
							<p className="lead">
								James is a skilled developer with a passion for creating
								innovative solutions. With over 10 years of experience in the
								tech industry, he leads our development team with expertise and
								dedication.
							</p>
						</div>
						<div className="col-md-5 order-md-1 d-flex justify-content-center">
							<img
								src={team2}
								className="rounded-circle img-fluid"
								alt="Team member"
								style={{
									width: "300px",
									height: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>

					<hr className="featurette-divider" />

					<div className="row featurette">
						<div className="col-md-7">
							<h2 className="featurette-heading fw-normal lh-1">
								Maria LaGuerta
								<span className="text-body-secondary"> | Marketing</span>
							</h2>
							<p className="lead">
								Maria is a marketing specialist with a knack for crafting
								compelling campaigns that resonate with our audience.
							</p>
						</div>
						<div className="col-md-5 d-flex justify-content-center">
							<img
								src={team3}
								className="rounded-circle img-fluid"
								alt="Team member"
								style={{
									width: "300px",
									height: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="container">
					<div className="row py-lg-5">
						<div className="col-lg-6 col-md-8 mx-auto">
							<div className="col text-center">
								<h2 className="fw-bold">Contact Us</h2>
								<p className="lead text-body-secondary">
									We'd love to hear from you! Whether you have questions,
									feedback, or just want to say hello, feel free to reach out.{" "}
								</p>
							</div>
						</div>
					</div>

					<div
						className="container shadow-lg p-4 rounded-3"
						style={{
							background:
								"linear-gradient(135deg, #0d6efd 0%, #5bc0de 50%, #8be9ff 100%)",
							color: "#fff",
						}}>
						<div className="row justify-content-center">
							<div className="col-lg-10">
								<div className="row g-4 align-items-center">
									<div className="col-lg-5">
										<h2 className="fw-bold">Get in touch</h2>
										<p className="mb-4 text-white-50">
											Have questions? Send us a message and we'll get back to
											you.
										</p>
										<ul className="list-unstyled text-white-75">
											<li className="mb-2">
												<strong>Address:</strong> Jl. Raya Lenteng Agung
												No.20-21, RT.4/RW.1, Srengseng Sawah, Kec. Jagakarsa,
												Jakarta Selatan
											</li>
											<li className="mb-2">
												<strong>Email:</strong> support@nf-academy.id
											</li>
											<li className="mb-2">
												<strong>Phone:</strong> +62 21 1234 5678
											</li>
										</ul>
									</div>

									<div className="col-lg-7">
										<div className="card shadow-sm border-0">
											<div className="card-body p-4 p-md-5">
												<h5 className="card-title mb-3">Send us a message</h5>
												{/* onSubmit prevents full page reload; replace alert with real handler */}
												<form
													onSubmit={(e) => {
														e.preventDefault();
														alert(
															"Thank you — pesan Anda telah dikirim (demo)."
														);
													}}>
													<div className="row g-3">
														<div className="col-md-6">
															<label
																htmlFor="name"
																className="form-label small">
																Name
															</label>
															<input
																type="text"
																className="form-control form-control-sm"
																id="name"
																placeholder="Your name"
																required
															/>
														</div>
														<div className="col-md-6">
															<label
																htmlFor="email"
																className="form-label small">
																Email
															</label>
															<input
																type="email"
																className="form-control form-control-sm"
																id="email"
																placeholder="you@example.com"
																required
															/>
														</div>
														<div className="col-12">
															<label
																htmlFor="message"
																className="form-label small">
																Message
															</label>
															<textarea
																className="form-control"
																id="message"
																rows="6"
																placeholder="Write your message..."
																required></textarea>
														</div>
														<div className="col-12 text-end">
															<button
																type="submit"
																className="btn btn-primary btn-sm">
																Send Message
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Footer Section */}
				<section id="footer" className="container">
					<footer className="py-3 my-4">
						<ul className="nav justify-content-center border-bottom pb-3 mb-3">
							<li className="nav-item">
								<a href="#home" className="nav-link px-2 text-body-secondary">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a href="#books" className="nav-link px-2 text-body-secondary">
									Book
								</a>
							</li>
							<li className="nav-item">
								<a href="#team" className="nav-link px-2 text-body-secondary">
									Team
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#contact"
									className="nav-link px-2 text-body-secondary">
									Contact
								</a>
							</li>
						</ul>
						<p className="text-center text-body-secondary">
							&copy; 2025 NF Academy
						</p>
					</footer>
				</section>
			</div>
		</>
	);
}

export default App;
