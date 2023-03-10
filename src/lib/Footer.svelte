<script>
	import ScrollNav from '/src/shared/svelte/ScrollNav.svelte'
	import Nav from '/src/shared/svelte/Nav.svelte'

	const triangle = '&#9650'
</script>

<footer id="footer" class="footer">
	<ScrollNav to="top">
		{@html triangle}
	</ScrollNav>

	<Nav href="/copyright">© Bloddy Stupid Johnson (2022)</Nav>
</footer>

<style>
	.footer {
		width: 100%;
		margin-bottom: 2rem;
	}
</style>
