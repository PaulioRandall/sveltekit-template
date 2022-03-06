<script>
	// A bit excessive but needed a reason to add a js import
	import { isNotObject } from '/src/shared/js/types.js'

	export let to /*{
		href: undefined,
		text: undefined,
		asTab: false,
	}*/

	const missing = (v) => !v

	if (missing(to) || isNotObject(to)) {
		throw new Error('Missing or invalid data for hyperlink.')
	}

	if (missing(to.href)) {
		throw new Error('Missing href for hyperlink.')
	}

	if (missing(to.text)) {
		to.text = to.href
	}
</script>

{#if to.asTab}
	<a href="{to.href}" class="link" target="_blank" rel="noopener noreferrer">
		{to.text}
	</a>
{:else}
	<a href="{to.href}" class="link">
		{to.text}
	</a>
{/if}

<style>
	.link {
		color: #0000ff;
	}
	.link:active {
		color: #ff0000;
	}
	.link:visited {
		color: #800080;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
