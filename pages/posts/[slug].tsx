import { getAllPosts, getPostSlugs } from '../../lib/api';
import { getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Date from '../../components/date';
import Head from 'next/head';
import PostBody from '../../components/post-body';

export default function Post({ post }: any) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			{post.title}
			<br />
			<Date dateString={post.date} />
			<br />
			<PostBody content={post.content} />
		</>
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
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
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
