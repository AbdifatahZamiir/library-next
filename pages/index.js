import Head from "next/head";
import Layout from "../components/layout";
import Awesome from "../components/awesome";
import Slider from "../components/slider";
import Popular from "../components/popular";
import Registration from "../components/registration";
import Team from "../components/team";
import Events from "../components/events";
import Books from "../components/books";

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Slider />
			<Awesome />
			<Books posts={allPostsData} />
			<Registration />
			<Team />
			<Events />
			<Popular />
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = await getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
