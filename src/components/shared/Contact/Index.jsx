export default function Contact() {
	return (
		<>
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

				<div className="container shadow-lg p-4 rounded-3 blueSky ">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="row g-4 align-items-center">
								<div className="col-lg-5">
									<h2 className="fw-bold">Get in touch</h2>
									<p className="mb-4 text-white-50">
										Have questions? Send us a message and we'll get back to you.
									</p>
									<ul className="list-unstyled text-white-75">
										<li className="mb-2">
											<strong>Address:</strong> Jl. Raya Lenteng Agung No.20-21,
											RT.4/RW.1, Srengseng Sawah, Kec. Jagakarsa, Jakarta
											Selatan
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
													alert("Thank you — pesan Anda telah dikirim (demo).");
												}}>
												<div className="row g-3">
													<div className="col-md-6">
														<label htmlFor="name" className="form-label small">
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
														<label htmlFor="email" className="form-label small">
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
		</>
	);
}
