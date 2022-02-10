import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

// get files names in the _posts directory
export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

// gives the data of the post
export function getPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	// frontmatter and content
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string;
	};

	const items: Items = {};

	// ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(fields: string[] = []) {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
