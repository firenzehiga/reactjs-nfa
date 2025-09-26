import Carousel from "@/shared/Carousel/Index";
import Contact from "@/shared/Contact/Index";
import Hero from "@/shared/Hero/Index";
import ProductList from "@/shared/ProductList/Index";
import Team from "@/shared/Team/Index";

export default function Home() {
	return (
		<>
			<Hero />
			<ProductList />
			<Carousel />
			<Team />
			<Contact />
		</>
	);
}
