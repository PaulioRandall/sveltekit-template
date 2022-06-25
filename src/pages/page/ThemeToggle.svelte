<script>
	import { onMount } from 'svelte'
	import { theme } from './theme-store.js'

	// TODO: Support for JS disabled?

	const LIGHT = 'theme-light'
	const DARK = 'theme-dark'

	const oppositeOf = (mode) => (mode === DARK ? LIGHT : DARK)

	onMount(async () => {
		if (!$theme) {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
			mediaQuery.matches ? setTheme(DARK) : setTheme(LIGHT)
		}
	})

	const switchTheme = () => setTheme(oppositeOf($theme))

	const setTheme = (newTheme) =>
		theme.update((current) => {
			document.body.classList.add(newTheme)
			document.body.classList.remove(current)
			return newTheme
		})
</script>

<div class="theme-toggle">
	<button class="btn" on:click|stopPropagation="{switchTheme}">
		{#if $theme === LIGHT}
			<img
				class="img"
				src="/images/theme-light.svg"
				alt="Toggle dark mode on" />
		{:else}
			<img
				class="img"
				src="/images/theme-dark.svg"
				alt="Toggle light mode on" />
		{/if}
	</button>
</div>

<style>
	.theme-toggle {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
	}

	.btn {
		all: unset;
		display: block;

		width: 50px;
		height: 50px;

		cursor: pointer;
		overflow: hidden;
		border-bottom-right-radius: 30%;
	}

	.img {
		display: block;
		object-fit: contain;

		width: 50px;
		aspect-ratio: 1/1;
	}
</style>
