<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { mainImgStore } from '$lib/stores';
	import bouquet from '$lib/images/bouquet.jpeg';

	let headerRef;
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: headerRef,
				start: 'top top',
				end: 'bottom center',
				onEnterBack: () => {
					$mainImgStore = {
						src: bouquet,
						alt: 'The top of a bouquet of flowers obfuscated by striking lighting with gold, red and violet hues.'
					};
				}
			});
		});
		return () => ctx.revert();
	});
</script>

<header bind:this={headerRef}>
	<hgroup>
		<p class="chel-bold kicker">opinion</p>
		<h1 class="chel-dd">
			To<br />fall<br />in love<br />with<br />the<br />world
		</h1>
		<p class="chel-light dek">
			A late summer meditation<br />on time, loss, and solace in<br />the natural world, made from<br
			/>the work of the photographer<br />Mary Manning and the<br />poet Brian Turner.
		</p>
	</hgroup>
</header>

<style>
	header {
		position: relative;
		z-index: 1;
		mix-blend-mode: exclusion;
	}
	hgroup {
		inline-size: fit-content;
		margin-inline: auto;
	}
	.kicker,
	h1 {
		text-transform: uppercase;
		color: #ececec;
	}
	.kicker {
		font-size: var(--step-0);
		letter-spacing: 0.05em;
		line-height: 1;
	}
	h1 {
		margin-block-start: 1rem;

		font-size: var(--step-7);
		letter-spacing: 0.3em;
		line-height: 1.3;
	}
	.dek {
		font-size: var(--step-2);
		line-height: 1.2;
		color: #eaeaea;
	}
</style>
