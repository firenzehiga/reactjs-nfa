import team1 from "@/assets/team/300_25.jpg";
import team2 from "@/assets/team/300_23.jpg";
import team3 from "@/assets/team/300_20.jpg";

export default function Team() {
	return (
		<>
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
							innovative solutions. With over 10 years of experience in the tech
							industry, he leads our development team with expertise and
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
		</>
	);
}
