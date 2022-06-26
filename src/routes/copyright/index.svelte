<script>
	import GenericPage from '/src/shared/pages/GenericPage.svelte'
	import A from '/src/shared/svelte/A.svelte'
</script>

<GenericPage title="Copyright">
	<div class="empty-page">
		<p class="generic-text">This is an empty page!</p>
	</div>
</GenericPage>

<style>
	.empty-page {
		display: flex;
		flex-direction: column;
		align-items: center;

		height: 100%;
		margin-top: 3rem;
	}
</style>
