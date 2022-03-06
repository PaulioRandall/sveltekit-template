<script>
	let buildDate = import.meta.env.VITE_BUILD_DATE
	if (!buildDate) {
		buildDate = 'undefined'
	}
</script>

<svelte:head>
	<meta name="build-date" content="{buildDate}" />
</svelte:head>

<slot />

<style>
	@import '/src/tailwind.css';
</style>
