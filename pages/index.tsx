import Date from '../components/date';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Link from 'next/link';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<div className="flex flex-col">
			{allPostsData.map((post) => (
				<>
					<div className="mb-4">
						<div>
							<Link href={`/posts/${post.slug}`}>
								<a className="text-2xl font-bold">{post.title}</a>
							</Link>
							<p className="text-lg">{post.excerpt}</p>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-col">
								<Date dateString={post.date} />
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
