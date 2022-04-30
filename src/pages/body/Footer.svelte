<script>
	import NavLink from './NavLink.svelte'
	import Hyperlink from '/src/shared/svelte/Hyperlink.svelte'

	const upTriangle = '&#9650;'

	const bloodyStupidJohnson = {
		href: 'https://wiki.lspace.org/Bergholt_Stuttley_Johnson',
		text: '© 2022 Bloody Stupid Johnson',
	}
</script>

<footer id="footer" class="footer">
	<nav class="nav-links">
		<NavLink scroll="top">{@html upTriangle}</NavLink>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/tutorial">Tutorial</NavLink>
	</nav>
	<Hyperlink classes="white-link" to="{bloodyStupidJohnson}" />
</footer>

<style>
	.footer {
		width: 100%;
		background-color: var(--dark-gray);

		color: white;
		text-align: center;

		padding-bottom: 1rem;
	}

	.nav-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		margin: 0 2rem;
		padding: 0.5rem;
	}

	:global(a:link.white-link) {
		color: white;
	}
</style>
