<script>
	import Background from '$lib/components/Background.svelte';
	import PoemIntro from '$lib/components/PoemIntro.svelte';
	import Header from '$lib/components/Header.svelte';
	import Lorem from '$lib/components/Lorem.svelte';
	import './global.css';
</script>

<svelte:head>
	<title>Awal DDA</title>
</svelte:head>

<main>
	<Background />
	<PoemIntro />
	<Header />
	<Lorem />
</main>

<style>
	main {
		background: #1f1f1f;
	}
</style>
