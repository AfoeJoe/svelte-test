import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
export const load = () => {
	const files = fs.readdirSync(path.join(`./src/lib/posts`));

	const posts = files.map((file) => {
		const slug = file.replace('.md', '');

		const markDownMeta = fs.readFileSync(path.join('./src/lib/posts', file), 'utf-8');

		const { data: frontMatter } = matter(markDownMeta);

		return { slug, frontMatter };
	});

	return {
		posts
	};
};

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
