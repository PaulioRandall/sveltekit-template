<script>
	import PageSpace from '$shared/PageSpace.svelte'
	import PageHeading from '$shared/PageHeading.svelte'

	export let title = ''
	export let tabTitle = title

	if (title) {
		tabTitle = `${tabTitle} | Skeptical Goose`
	} else {
		tabTitle = 'Skeptical Goose'
	}
</script>

<svelte:head>
	<title>{tabTitle}</title>
</svelte:head>

<main class="main">
	{#if title}
		<PageSpace xs />
		<PageHeading>{title}</PageHeading>
		<PageSpace md />
	{/if}
	<slot />
</main>

<style>
	.main {
		flex-grow: 1;

		max-width: 100%;
		width: 100%;
	}
</style>
