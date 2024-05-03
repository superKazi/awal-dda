<script>
	import PoemIntro from './PoemIntro.svelte';
	import Header from './Header.svelte';
	import bouquet from '$lib/images/bouquet.jpeg';
</script>

<div class="content-container">
	<div class="image-container">
		<img src={bouquet} alt="" />
	</div>
	<div class="text-container">
		<PoemIntro />
	</div>
	<div class="luminosity-container">
		<Header />
	</div>
</div>

<style>
	.content-container {
		position: relative;
		inline-size: 100vw;
	}
	.image-container {
		position: sticky;
		z-index: 0;
		top: 0;
		left: 0;
		inline-size: 100%;
		block-size: 100vh;
	}
	img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}
	.text-container,
	.luminosity-container {
		position: relative;
		z-index: 5;
	}
	.text-container {
		margin-block-start: -100vh;
	}
	.luminosity-container {
		mix-blend-mode: luminosity;
	}
</style>
