<script>
	export let href = undefined
	export let scroll = ''
	export let shrink = false

	const autoScrollToElem = () => {
		const elem = document.getElementById(scroll)
		elem.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
			inline: 'start',
		})
	}
</script>

<div class="footer-link" class:shrink>
	{#if scroll}
		<span
			class="anchor"
			tabindex="0"
			role="scrollbar"
			on:click="{autoScrollToElem}"><slot /></span>
	{:else}
		<a class="anchor" href="{href}"><slot /></a>
	{/if}
</div>

<style>
	@import '/src/shared/css/base.css';

	.footer-link {
		min-width: 8rem;
		min-height: 3rem;

		margin: 0.5rem;
		border-radius: 2rem;

		text-align: center;
		white-space: nowrap;
		color: white;
		cursor: pointer;
	}

	.footer-link:hover {
		box-shadow: inset white 0 0 6px 2px;
	}

	.anchor {
		color: white;
		line-height: 3rem;

		padding: 1rem 2rem;
		cursor: pointer;
	}

	.anchor:hover {
		/* Bold without affecting container size */
		text-shadow: white 0px 0px 2px;
	}

	.shrink {
		min-width: 0;
		margin: 0;
	}

	.shrink .anchor {
		padding: 1rem 1rem;
	}
</style>
