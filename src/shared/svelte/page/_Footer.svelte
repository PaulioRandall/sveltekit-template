<script>
	import NavLink from './_NavLink.svelte'

	const upTriangle = '&#9650;'
</script>

<footer id="footer" class="footer">
	<nav class="nav-links">
		<NavLink scroll="top">{@html upTriangle}</NavLink>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/tutorial">Tutorial</NavLink>
	</nav>
	<div class="base-nav-link-text pb-2">© 2022 Bloody Stupid Johnson</div>
</footer>

<style>
	.footer {
		width: 100%;
		@apply bg-gray-900;

		color: white;
		text-align: center;
	}

	.nav-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		margin: 0 2rem;
		padding: 0.5rem;
	}
</style>
