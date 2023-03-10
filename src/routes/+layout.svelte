<script>
	import Header from '$shared/Header.svelte'
</script>

<div class="page">
	<Header />

	<slot>
		<div></div>
	</slot>
</div>

<style>
	@import '$routes/styles.css';

	.page {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		min-height: 100vh;
	}
</style>
