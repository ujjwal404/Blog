import Date from '../components/date';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Link from 'next/link';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<div className="flex flex-col max-w-6xl mx-auto divide-y divide-border">
			{allPostsData.map((post,idx) => (
				<div key={idx} className='m-2 h-36 relative'>
					<Link href={`/posts/${post.slug}`}>
							<a>
									<div className="">
										<div className='absolute inset-y-10'>
											<div className='text-3xl'>
													{post.title}
											</div>
											<div className="flex flex-row">
												<div className="flex flex-col">
													<Date dateString={post.date} />
												</div>
											</div>
										</div>
									</div>
							</a>		
					</Link>
				</div>
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
