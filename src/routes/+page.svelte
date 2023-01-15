<script lang="ts">
	import type { PageServerData } from './$types';
	import Post from './Post.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>svelte static rendered | posts blog</title>
	<meta
		name="description"
		content={data.posts.reduce((acc, cur) => acc + ' | ' + cur.frontMatter.title, '')}
	/>
</svelte:head>

<div class="posts">
	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>
