<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status },
		}
	}
</script>

<script>
	export let status
	export let error
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1 class="base-page-heading">Error: {status}</h1>
<p class="base-page-normal">{error.message}</p>

<style>
	@import '/src/shared/css/base.css';
</style>
