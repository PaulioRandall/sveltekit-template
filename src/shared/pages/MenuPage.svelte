<script>
	import GridMenuPage from './GridMenuPage.svelte'
	import ListMenuPage from './ListMenuPage.svelte'

	export let type = 'grid'

	// # Common interface for menu pages
	//
	// attrs:
	// - title
	// - items
	//
	// slots:
	// - intro
	// - outro

	export let title = ''
	export let items /* = [
		{
			label: "",
			summary: "",
			href: "",
			draft?: false,
		},
	] */
</script>

{#if type === 'list'}
	<ListMenuPage title="{title}" items="{items}">
		<slot name="intro" slot="intro" />
		<slot name="outro" slot="outro" />
	</ListMenuPage>
{:else}
	<GridMenuPage title="{title}" items="{items}">
		<slot name="intro" slot="intro" />
		<slot name="outro" slot="outro" />
	</GridMenuPage>
{/if}
