<script>
	export let data = {
		href: '/you-forgot-to-define-a-href-for-your-link',
		text: null,
	}

	if (!data.text) {
		data.text = data.href
	}
</script>

<a
	href="{data.href}"
	class="new-tab-link"
	target="_blank"
	rel="noopener noreferrer">
	{data.text}
</a>

<style>
	.new-tab-link {
		color: #0000ff;
	}
	.new-tab-link:active {
		color: #ff0000;
	}
	.new-tab-link:visited {
		color: #800080;
	}
	.new-tab-link:hover {
		text-decoration: underline;
	}
</style>
