import { useEffect } from 'react';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<div className="flex flex-col">
			{allPostsData.map((post) => (
				<>
					<div className="mb-4">
						<div className="mb-4">
							<h1 className="text-2xl font-bold">{post.title}</h1>
							<p className="text-lg">{post.excerpt}</p>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-col">
								<p className="text-sm">{post.date}</p>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Home;
export async function getStaticProps() {
	const allPostsData = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content']);
	return {
		props: {
			allPostsData
		}
	};
}
