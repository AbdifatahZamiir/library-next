import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Popular from "../components/popular";
import Registration from "../components/registration";
import Team from "../components/team";

export default function Home() {
	return (
		<Layout>
			<Slider />
			<Popular />
			<Registration />
			<Team />
		</Layout>
	);
}
