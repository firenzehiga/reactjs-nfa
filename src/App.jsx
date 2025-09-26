import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/Pages/Index";
import Books from "@/Pages/Books/Index";
import Teams from "@/Pages/Teams/Index";
import Contacts from "@/Pages/Contacts/Index";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/Pages/Auth/Login/Index";
import Register from "@/Pages/Auth/Register/Index";
import MainLayout from "@/layouts/MainLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="/books" element={<Books />} />
						<Route path="/teams" element={<Teams />} />
						<Route path="/contacts" element={<Contacts />} />
					</Route>

					<Route element={<AuthLayout />}>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
