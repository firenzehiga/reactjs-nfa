import { Outlet } from "react-router";
import Header from "@/shared/Header/Index";
import Footer from "@/shared/Footer/Index";

export default function MainLayout() {
	return (
		<>
			<Header />
			<div className="container">
				<Outlet />
				<Footer />
			</div>
		</>
	);
}
