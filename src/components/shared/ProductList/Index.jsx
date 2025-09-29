import { books } from "@/utils/book.js";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductList() {
	const [bookList, setBookList] = useState([...books]);
	const handleSubmit = () => {
		const seed = Date.now(); // seed gambar berbeda
		const now = new Date();
		const formattedDate = now.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
		const newBook = {
			id: bookList.length + 1,
			title: "Buku ke " + (bookList.length + 1),
			author: "NF Academy",
			year: formattedDate,
			description: "Buku baru yang menarik.",
			image: `https://picsum.photos/seed/${seed}/200/300`,
		};
		setBookList((prevList) => [...prevList, newBook]);
		toast.dismiss();
		toast.success("Berhasil menambahkan buku", {
			duration: 2000,
			style: {
				border: "1px solid #87CEEB",
				padding: "16px",
				color: "#0B6EA8",
			},
			iconTheme: {
				primary: "#87CEEB",
				secondary: "#E0F7FF",
			},
		});
	};
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
							{bookList.map((p) => (
								<div className="col" key={p.id}>
									<div className="card shadow-sm">
										<img
											src={p.image}
											alt={p.title}
											className="card-img-top img-fluid books"
										/>
										<div className="card-body">
											<h5 className="card-title fw-bold">{p.title}</h5>
											<p className="card-text text-body-secondary">
												{p.description}
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<small className="fw-bold">by {p.author}</small>
												<small className="text-body-secondary">{p.year}</small>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="col text-center mt-4">
							<p>
								<button onClick={handleSubmit} className="btn btn-primary my-2">
									Tambah Buku
								</button>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
