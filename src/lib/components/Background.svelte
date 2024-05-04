<script>
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import _throttle from 'lodash.throttle';
	import { mainImgStore, secondaryImgStore } from '$lib/stores';
	import BackgroundImage from './BackgroundImage.svelte';

	let desktopViewport = false;

	onMount(() => {
		const desktopMatchMedia = window.matchMedia('(min-width: 64rem)');
		desktopViewport = desktopMatchMedia.matches;

		desktopMatchMedia.addEventListener('change', matchMediaCb);

		return () => desktopMatchMedia.removeEventListener('change', matchMediaCb);
	});

	function matchMediaCb(e) {
		desktopViewport = e.matches;
	}
</script>

<div class="background-container">
	<div class="main-img-container">
		{#key $mainImgStore}
			<div transition:blur class="mount-transition-container">
				<BackgroundImage image={$mainImgStore} />
			</div>
		{/key}
	</div>
	{#if desktopViewport}
		<div class="secondary-img-container">
			{#key $secondaryImgStore}
				<div transition:blur class="mount-transition-container">
					<BackgroundImage image={$secondaryImgStore} />
				</div>
			{/key}
		</div>
	{/if}
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
		position: absolute;
		left: 0;
		top: 0;
		inline-size: 100%;
		block-size: 100%;
	}
	.mount-transition-container {
		inline-size: 100%;
		block-size: 100%;
	}
	@media (min-width: 64rem) {
		.main-img-container {
			inline-size: 50%;
		}
		.secondary-img-container {
			position: absolute;
			left: 50%;
			top: 0;
			inline-size: 50%;
			block-size: 100%;
		}
	}
</style>
