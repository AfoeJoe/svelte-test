<script lang="ts">
	import { marked } from 'marked';

	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const {
		content,
		frontMatter: { title, date, cover_image }
	} = data;
</script>

<h1>Thiis is a {data.frontMatter.title}</h1>

<slot.fragment>
	<a class="btn btn-back" href="/">Go back</a>

	<div class="card card-page">
		<h1 class="post-title">{title}</h1>
		<div class="post-date">Posted on {date}</div>
		<img src={cover_image} alt="" />
		<div class="post-body">
			<div>{@html marked(content)}</div>
		</div>
	</div>
</slot.fragment>
