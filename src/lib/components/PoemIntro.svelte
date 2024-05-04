<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let container;
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.config({
				limitCallbacks: true,
				ignoreMobileResize: true
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: () => `bottom bottom-=${window.innerHeight / 2}px`,
					scrub: 2
				}
			});

			tl.to('span:first-of-type', { opacity: 0 }).to(
				'span:last-of-type',
				{ opacity: 0, yPercent: -250 },
				'<66%'
			);
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
		position: relative;
		z-index: 1;
		inline-size: 100vw;
		block-size: 300vh;
	}
	p {
		display: flex;
		flex-direction: column;

		position: sticky;
		top: 50%;
		transform: translateY(-50%);

		inline-size: fit-content;
		margin-inline: auto;

		font-size: var(--step-2);
		line-height: 1.2;
		color: #fff;
	}
	@media (min-width: 60rem) {
		div {
			inline-size: 50vw;
		}
	}
</style>
