<script lang="ts">
	import type { PageData } from './$types';

	export let post: PageData['posts'][0];
</script>

<div class="card">
	<img
		alt="post.frontMatter.cover_image"
		src={post.frontMatter.cover_image}
		width="329"
		height="219"
	/>
	<div class="post-date">{post.frontMatter.date}</div>
	<h3 class="post-date">{post.frontMatter.title}</h3>
	<p>
		{post.frontMatter.excerpt}
	</p>

	<a href={'./' + post.slug} class="btn">Read more about the post</a>
</div>
