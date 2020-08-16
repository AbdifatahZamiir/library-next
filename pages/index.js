import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import Head from "next/head";
import Layout from "../components/layout";
import Awesome from "../components/awesome";
import Slider from "../components/slider";
import Blogs from "../components/blogs";
import Registration from "../components/registration";
import Team from "../components/team";
import Events from "../components/events";
import Books from "../components/books";

import {
	getSortedBooksData,
	getSortedTeamsData,
	getSortedBlogData,
} from "../lib/homedata";

export default function Home({ bookdata, teamdata, blogdata }) {
	return (
		<Layout>
			<Slider />
			<Awesome />
			<Books bookdata={bookdata} />
			<Registration />
			<Team teamdata={teamdata} />
			<Events />
			<Blogs blogdata={blogdata} />
		</Layout>
	);
}

export async function getStaticProps() {
	const bookdata = await getSortedBooksData();
	const teamdata = await getSortedTeamsData();
	const blogdata = await getSortedBlogData();

	return {
		props: {
			bookdata,
			teamdata,
			blogdata,
		},
	};
}
