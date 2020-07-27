import Head from "next/head";
import Layout from "../components/layout";
import Awesome from "../components/awesome";
import Slider from "../components/slider";
import Popular from "../components/popular";
import Registration from "../components/registration";
import Team from "../components/team";
import Events from "../components/events";
import Books from "../components/books";
export default function Home() {
	return (
		<Layout>
			<Slider />
			<Awesome />
			<Books />
			<Registration />
			<Team />
			<Events />
			<Popular />
		</Layout>
	);
}
