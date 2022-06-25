<script>
	export let classes = ''
	export let asNewTab = false
	export let href
</script>

{#if asNewTab}
	<a class="{classes}" href="{href}" target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
{:else}
	<a class="{classes}" href="{href}">
		<slot />
	</a>
{/if}
