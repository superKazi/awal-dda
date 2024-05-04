<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { mainImgStore, secondaryImgStore } from '$lib/stores';
	import flowers from '$lib/images/flowers.jpeg';
	import bouquet from '$lib/images/bouquet.jpeg';
	import blueWindow from '$lib/images/window.jpeg';

	let headerRef;
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: headerRef,
				start: 'top bottom-=25%',
				end: 'bottom center',
				onEnter: () => {
					if (window.matchMedia('(min-width: 64rem)').matches) {
						$secondaryImgStore = {
							src: blueWindow,
							alt: 'A corner of an empty apartment with white walls, wooden floors, and dramatic blue lighting spilling in from a large window. A golden light is cast onto the window itself. The view through the window is the face of an apartment building.'
						};
					}
				},
				onLeaveBack: () => {
					if (window.matchMedia('(min-width: 64rem)').matches) {
						$secondaryImgStore = {
							src: flowers,
							alt: 'A garden in peak bloom seen from above featuring various plants and flowers of reddish and pinkish shades.'
						};
					}
				},
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
		mix-blend-mode: luminosity;
	}
	hgroup {
		inline-size: fit-content;
		margin-inline: auto;

		overflow: clip;
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
	@media (min-width: 64rem) {
		header {
			inline-size: 50vw;
		}
	}
</style>
