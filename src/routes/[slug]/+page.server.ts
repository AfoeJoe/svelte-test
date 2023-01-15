import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { slug } }) => {
	const markDownWithMeta = fs.readFileSync(path.join('./src/lib/posts', slug + '.md'), 'utf-8');
	const { data: frontMatter, content } = matter(markDownWithMeta);

	return {
		frontMatter,
		slug,
		content
	};
}) satisfies PageServerLoad;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
