<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<slot.fragment>
	<Header />

	<main class="container">
		<slot />
	</main>
</slot.fragment>
