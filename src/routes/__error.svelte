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
	<h1 class="default-page-heading">Error: {status}</h1>
	<p class="default-text">{error.message}</p>
</GenericPage>
