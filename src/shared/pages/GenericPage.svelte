<script>
	import Page from './Page.svelte'
	import Fader from '/src/shared/svelte/Fader.svelte'

	const title = $$props.title ?? 'Sveltekit Template'
	const description =
		$$props.description ?? 'A Sveltekit project template with Prettier setup.'

	const hasTitle = !$$props.hideTitle && $$props.title
</script>

<svelte:head>
	<meta property="og:title" content="{title}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:image" content="/favicon.ico" />

	<meta name="description" content="{description}" />
</svelte:head>

<Page {...$$props}>
	<Fader>
		{#if hasTitle}
			<h1 id="page-title" class="page-heading">
				{@html $$props.title}
			</h1>
		{/if}
		<slot />
		<div class="spacer"></div>
	</Fader>
</Page>

<style>
	.page-heading {
		text-align: center;
		flex-grow: 1;

		margin: 2rem 0 3rem;

		font-weight: normal;
		font-style: italic;
		font-size: var(--font-size-2xl);
	}

	.spacer {
		margin-bottom: 3rem;
	}
</style>
