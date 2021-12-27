<script context="module">
	export function load({ page, error, status }) {
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

<h1 class="page-heading">Error: {status}</h1>
<p class="page-normal">{error.message}</p>
