import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Popular from "../components/popular";

export default function Home() {
	return (
		<Layout>
			<Slider />
			<Popular />
		</Layout>
	);
}
