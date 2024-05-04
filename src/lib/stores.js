import { writable } from 'svelte/store';
import bouquet from '$lib/images/bouquet.jpeg';
import flowers from '$lib/images/flowers.jpeg';

const mainImgStore = writable({
	src: bouquet,
	alt: 'The top of a bouquet of flowers obfuscated by striking lighting with gold, red and violet hues.'
});

const secondaryImgStore = writable({
	src: flowers,
	alt: 'A garden in peak bloom seen from above featuring various plants and flowers of reddish and pinkish shades.'
});

export { mainImgStore, secondaryImgStore };
