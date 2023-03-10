<script>
	import { dev } from '$app/environment'
	import { page } from '$app/stores'

	import Main from '$shared/Main.svelte'
	import Paragraph from '$shared/Paragraph.svelte'
</script>

<Main title="{$page.status}">
	<Paragraph>
		{$page.error.message}
	</Paragraph>
</Main>

<style>
	@import '$routes/styles.css';
</style>
