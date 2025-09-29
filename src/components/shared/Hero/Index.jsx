import { atomic } from "@/utils/book.js";

export default function Hero(props) {
	return (
		<>
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
		</>
	);
}
