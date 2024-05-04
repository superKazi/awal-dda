<script>
	import { blur } from 'svelte/transition';
	import BackgroundImage from './BackgroundImage.svelte';
	import { mainImgStore, secondaryImgStore } from '$lib/stores';
</script>

<div class="background-container">
	<div class="main-img-container">
		{#key $mainImgStore}
			<div transition:blur class="mount-transition-container">
				<BackgroundImage image={$mainImgStore} />
			</div>
		{/key}
	</div>
</div>

<style>
	.background-container {
		position: fixed;
		z-index: 0;
		top: 0;
		left: 0;

		inline-size: 100%;
		block-size: 100vh;

		contain: strict;
	}
	.main-img-container {
		inline-size: 100%;
		block-size: 100%;
	}
	.mount-transition-container {
		inline-size: 100%;
		block-size: 100%;
	}
</style>
