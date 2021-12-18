<script context="module">
	export function load({ page, error, status }) {
		return {
			props: {
				error,
				status,
			},
		}
	}
</script>

<script>
	export let status
	export let error
</script>

<head>
	<title>{status}</title>
</head>

<h1 class="page-heading">{status}</h1>
<p class="page-normal">{error.message}</p>
