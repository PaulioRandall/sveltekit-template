<script>
	export let data = {
		href: undefined,
		text: undefined,
		asTab: false,
	}

	if (!data.href) {
		throw new Error('You forgot to define the data for the hyperlink.')
	}

	if (!data.text) {
		data.text = data.href
	}
</script>

{#if data.asTab}
	<a href="{data.href}" class="link" target="_blank" rel="noopener noreferrer">
		{data.text}
	</a>
{:else}
	<a href="{data.href}" class="link">
		{data.text}
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
