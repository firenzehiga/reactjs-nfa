import { products } from "@/utils/image.js";
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
												<small className="text-body-secondary">{p.date}</small>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
