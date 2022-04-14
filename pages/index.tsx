import Date from '../components/date';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<div className="flex flex-col max-w-6xl mx-auto divide-y dark:divide-border divide-graylight">
			{allPostsData.map((post,idx) => (
				<div key={idx} className='m-2 h-36'>
					<Link href={`/posts/${post.slug}`}>
							<a>
									<div className="flex w-full flex-row justify-between">
										<div className='relative'>
											<div className='w-full mt-12'>
													<div className='text-3xl'>
															{post.title}
													</div>
													<div className="flex flex-col">
														<p><Date dateString={post.date} /></p>
													</div>
											</div>
										</div>
										<div className='mt-3'>
													<Image src={`/${post.coverImage}`} height={130} width={180} alt="coverImage"/>
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
	const allPostsData = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content','coverImage']);
	return {
		props: {
			allPostsData
		}
	};
}
