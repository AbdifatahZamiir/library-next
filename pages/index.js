import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Popular from "../components/popular";
import Registration from "../components/registration";
import Team from "../components/team";
import Events from "../components/events";

export default function Home() {
	return (
		<Layout>
			<Slider />
			<Registration />
			<Team />
			<Events />
			<Popular />
		</Layout>
	);
}
