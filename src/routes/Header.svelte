<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="container">
		<h2 aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Dev Blog</a>
		</h2>
	</div>
</header>
