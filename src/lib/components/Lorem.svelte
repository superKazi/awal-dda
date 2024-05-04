<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { mainImgStore } from '$lib/stores';
	import woman from '$lib/images/woman.jpeg';

	let loremRef;
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: loremRef,
				start: 'top center',
				end: 'bottom bottm',
				onToggle: (self) => {
					if (self.isActive) {
						$mainImgStore = {
							src: woman,
							alt: 'A woman in a field of grass with trees and a shoddy wooden fence behind her. She is mid twirl, looking away from the viewer, her long hair flowing with her movement.'
						};
					}
				}
			});
		});

		return () => ctx.revert();
	});
</script>

<div role="presentation" bind:this={loremRef} />

<style>
	div {
		block-size: 150vh;
	}
</style>
