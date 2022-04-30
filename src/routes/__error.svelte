<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status },
		}
	}
</script>

<script>
	import Body from '/src/pages/body/Body.svelte'

	export let status
	export let error
</script>

<Body slim title="{status}">
	<h1 class="default-page-heading">Error: {status}</h1>
	<p class="default-text">{error.message}</p>
</Body>
