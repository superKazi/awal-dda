<script>
	import PoemIntro from '$lib/components/PoemIntro.svelte';
	import Header from '$lib/components/Header.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import bouquet from '$lib/images/bouquet.jpeg';
	import flowers from '$lib/images/flowers.jpeg';
	import window from '$lib/images/window.jpeg';
	import woman from '$lib/images/woman.jpeg';
	import './global.css';

	const images = {
		bouquet,
		flowers,
		window,
		woman
	};
</script>

<svelte:head>
	<title>Awal DDA</title>
</svelte:head>

<main style="background-image: url({images.bouquet});">
	<div>
		<PoemIntro />
		<Header />
		<Spacer />
	</div>
</main>

<style>
	main {
		inline-size: 100vw;
		block-size: 100vh;
		overflow-y: scroll;
		background-size: cover;
	}
</style>
