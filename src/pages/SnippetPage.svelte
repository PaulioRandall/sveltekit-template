<script>
	import GenericPage from '/src/pages/GenericPage.svelte'
	import Snippet from '/src/shared/svelte/Snippet.svelte'

	export let title = ''
	export let entries /* = [
		{
			label: "",
			snippets: [
				{
					code: "",
					lang: <lang>
				}
			] 
		}
	] */
</script>

<GenericPage title="{title}">
	<section class="snippets-section">
		{#each entries as entry}
			<div class="snippet-container">
				<p class="label">
					{@html entry.label}
				</p>
				<div class="code">
					{#each entry.snippets as snippet, i}
						{#if i !== 0}
							<hr class="code-divider" />
						{/if}
						<Snippet lang="{snippet.lang}" code="{snippet.code}" />
					{/each}
				</div>
			</div>
		{/each}
	</section>
</GenericPage>

<style>
	.snippet-container {
		display: grid;
		margin-top: 3rem;
	}

	.label {
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.code {
		margin: 0 auto;
	}

	.code-divider {
		width: 100%;
		border-top: 0.1rem gray dashed;
		background-color: var(--color-rebel);
	}

	@media screen and (min-width: 600px) {
		.snippet-container {
			grid-template-columns: 1fr 2fr;
		}

		.label {
			margin: auto 1rem auto 0;
		}

		.code {
			margin: auto 0;
		}
	}
</style>
