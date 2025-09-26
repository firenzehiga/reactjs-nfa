export default function Carousel() {
	return (
		<>
			<section id="quotes" className="container py-5 ">
				<div className="row py-lg-5">
					<div className="col-lg-6 col-md-8 mx-auto">
						<div className="col text-center">
							<h2 className="fw-bold">Pieces of Quotes</h2>
							<p className="lead text-body-secondary">
								Something short and leading about the collection below—its
								contents, the creator, etc. Make it short and sweet, but not too
								short so folks don’t simply skip over it entirely.
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
										Don’t be afraid to dream as high as the sky—your steps will
										follow.
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
		</>
	);
}
