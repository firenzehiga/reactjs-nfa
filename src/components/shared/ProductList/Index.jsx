import {
	atomic,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
} from "@/utils/image.js";
export default function ProductList() {
	return (
		<>
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
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img1}
										alt=""
										className="card-img-top img-fluid books"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											National Book Award-finalist Ibi Zoboi makes her
											middle-grade debut with an unforgettable character:
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
												August 27, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img src={img2} alt="" className="card-img-top books" />{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Meet Bakary, a curious and adventurous African boy that
											loves animals! Bakary and his friends Zuri.
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
												November 2017
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img3}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Drawing on knowledge gained from her past career as a
											fundraising consultant to top colleges across the country.
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
												August 20, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img4}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Darius Kellner speaks better Klingon than Farsi, and he
											knows more about Hobbit social cues than Persian ones.
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
												August 28, 2018
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img5}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											In the history of New York City’s underworld, there have
											been a host of criminal figures whose exploits have gone
											on to inspire.
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
												August 27, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img6}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Freshly forty-five, Aja James knows that her life is good,
											complete with a loving, wealthy husband, well-adjusted
											children, and a beautiful home.
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
												August 27, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img7}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Rich with hard-won wisdom and humanity, set in locales
											from Miami and Port-au-Prince to a small unnamed country.
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
												August 27, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img8}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											Among its residents—wildly spanning decades, perspectives,
											and species—are David Sherman, a struggling musician.
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
												August 20, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<img
										src={img9}
										alt=""
										className="card-img-top books img-fluid"
									/>{" "}
									<div className="card-body">
										<p className="card-text text-body-secondary">
											As the book opens in 2001, it is the evening of
											sixteen-year-old Melody's coming of age ceremony.
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
												September 17, 2019
											</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
