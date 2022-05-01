<script context="module">
	export const pageTitleID = 'page-title'
</script>

<script>
	import Body from './body/Body.svelte'

	const title = $$props.title
</script>

<Body {...$$props}>
	{#if title}
		<h1 id="{pageTitleID}" class="default-page-heading">
			{title}
		</h1>
	{/if}

	<slot />
</Body>
