import Link from "next/link";
export default function PopularBlogs({ allpostdata }) {
	return (
		<aside className="single_sidebar_widget popular_post_widget">
			<h3 className="widget_title text-white">Popular Posts</h3>
			{allpostdata.map((post) => {
				const { blogImg, title, category, id } = post;
				return (
					<div className="media post_item" key={id}>
						<img
							style={{ width: `7rem` }}
							src={blogImg}
							alt={title}
						/>
						<div className="media-body">
							<Link
								href="/blogDetails/[id]"
								as={`/blogDetails/${id}`}
							>
								<a>
									<h3>{title}</h3>
								</a>
							</Link>
							<p>{category}</p>
						</div>
					</div>
				);
			})}

			<div className="br"></div>
		</aside>
	);
}
