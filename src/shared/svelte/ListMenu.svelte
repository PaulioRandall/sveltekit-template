<script>
	import Nav from '/src/shared/svelte/Nav.svelte'

	export let items /* = [
		{
			label: "",
			summary: "",
			href: "",
			draft?: false,
		},
	] */
</script>

<div class="list-menu">
	{#each items as item}
		<div class="item">
			<Nav draft="{item.draft}" href="{item.href}">
				<span class="item-name">
					{@html item.label}
				</span>
			</Nav>
			<div class="item-summary">
				{@html item.summary}
			</div>
		</div>
	{/each}
</div>

<style>
	.list-menu {
		margin: 0 1rem;
	}

	.item {
		display: grid;
		grid-template-columns: 1fr;

		padding-bottom: 1rem;
		border-bottom: 1px dotted gray;

		padding-top: 1rem;
	}

	.list-menu :global(.item:last-child) {
		padding-bottom: 0;
		border-bottom: none;
	}

	.item-name {
		font-weight: bold;
	}

	.item-summary {
		text-align: center;
	}

	@media only screen and (min-width: 600px) {
		.item {
			grid-template-columns: 18rem 1fr;
			column-gap: 1rem;
			margin-bottom: 1rem;
		}

		.item-name {
			font-weight: normal;
		}

		.item-summary {
			text-align: justify;
		}
	}
</style>
