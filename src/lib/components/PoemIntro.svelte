<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// @ts-ignore
	let container;
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					// @ts-ignore
					trigger: container,
					pin: true,
					start: 'top top',
					end: () => `+=${window.innerHeight * 2.75}px`,
					scrub: 1,
					onScrubComplete: ({ progress }) => {
						if (progress === 1) {
							gsap.to('span:last-of-type', { opacity: 0, duration: 0.4, ease: 'linear' });
						}
					}
				}
			});

			tl.to('span:first-of-type', { opacity: 0 }).to('span:last-of-type', { opacity: 0.1 }, '<66%');
			// @ts-ignore
		}, container);

		return () => ctx.revert();
	});
</script>

<div bind:this={container}>
	<p class="chel-light">
		<span>
			The trembling air, time<br />
			sliding over our bodies like<br />
			water. All the emptiness<br />
			around us, as well as<br /></span
		>
		<span>everything that remains.</span>
	</p>
</div>

<style>
	div {
		inline-size: 100%;
		block-size: 100vh;

		display: grid;
		place-content: center;
	}

	p {
		inline-size: fit-content;
		margin-inline: auto;

		font-size: var(--step-2);
		line-height: 1.2;
		color: #fff;
	}
</style>
