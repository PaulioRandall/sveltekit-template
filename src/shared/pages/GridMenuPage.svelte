<script>
	import { dev } from '$app/env'

	import GenericPage from './GenericPage.svelte'
	import GridMenu from '/src/shared/svelte/GridMenu.svelte'

	export let title = ''
	export let items /* = [
		{
			label: "",
			summary: "",
			href: "",
			draft?: false,
		},
	] */

	const filtered = items.filter((op) => dev || !op.draft)
</script>

<GenericPage title="{title}">
	{#if $$slots.intro}
		<section class="intro-section">
			<slot name="intro" />
		</section>
	{/if}

	<section class="menu-section">
		<GridMenu items="{filtered}" />
	</section>

	{#if $$slots.outro}
		<section class="outro-section">
			<slot name="outro" />
		</section>
	{/if}
</GenericPage>
