import { getAllPosts, getPostSlugs } from '../../lib/api';
import { getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Date from '../../components/date';
import Head from 'next/head';
import PostBody from '../../components/post-body';
import Image from 'next/image';

export default function Post({ post }: any) {
	return (
				<div>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div className="max-w-4xl mx-auto mt-10">
			<h1 className='text-5xl'>
			{post.title}
			
			</h1>
			<Date dateString={post.date} />

			<br />
			<br />
			<div className='w-100'>
			<Image src={`/${post.coverImage}`} height="60%" width="100%" layout="responsive" objectFit="contain" alt="coverImage"/>
			</div>
			</div>
			<PostBody content={post.content} />
		</div>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage'
	]);

	// use this to render html instead of md content
	// const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post
			}
		}
	};
}

export async function getStaticPaths() {
	const slugs = getPostSlugs();

	return {
		paths: slugs.map((post: any) => {
			return {
				params: {
					slug: post
				}
			};
		}),
		fallback: false
	};
}
