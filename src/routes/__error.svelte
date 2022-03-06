<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status },
		}
	}
</script>

<script>
	import Body from '../shared/svelte/page/Body.svelte'

	export let status
	export let error
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Body slim>
	<h1 class="base-page-heading">Error: {status}</h1>
	<p class="base-page-normal">{error.message}</p>
</Body>

<style>
	@import '/src/shared/css/base.css';
</style>
