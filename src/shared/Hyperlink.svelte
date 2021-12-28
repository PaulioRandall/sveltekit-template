<script>
	export let data = {
		href: '/you-forgot-to-define-the-hyperlink-details',
		text: 'YOU FORGOT TO DEFINE THE HYPERLINK DETAILS!',
		asTab: false,
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
