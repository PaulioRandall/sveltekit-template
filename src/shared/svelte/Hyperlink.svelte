<script>
	// A bit excessive but needed a reason to add a js import
	import { missing, isNotObject } from '/src/shared/js/types.js'

	export let classes = ''
	export let tab = false
	export let to /* = {
		href: undefined,
		text: undefined,
	}*/

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

{#if tab}
	<a class={classes} href="{to.href}" target="_blank" rel="noopener noreferrer">
		{to.text}
	</a>
{:else}
	<a class={classes} href="{to.href}">
		{to.text}
	</a>
{/if}
