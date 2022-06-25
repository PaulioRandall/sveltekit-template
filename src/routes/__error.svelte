<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status },
		}
	}
</script>

<script>
	import GenericPage from '/src/pages/GenericPage.svelte'

	export let status
	export let error
</script>

<GenericPage slim title="{status}">
	<div class="error-page">
		<p class="generic-text">{error.message}</p>
	</div>
</GenericPage>

<style>
	@import './__styles.css';

	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
