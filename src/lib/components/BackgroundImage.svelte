<script>
	import { onMount } from 'svelte';

	export let image;

	let imgRef;

	onMount(() => {
		if (imgRef.complete) {
			animation(imgRef);
		}
	});

	function animation(image) {
		image.style.setProperty('opacity', '1');
	}
</script>

<img
	bind:this={imgRef}
	src={image.src}
	alt={image.alt}
	on:load={({ currentTarget }) => animation(currentTarget)}
/>

<style>
	img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;

		opacity: 0;
		transition: opacity 1000ms linear;
	}
</style>
