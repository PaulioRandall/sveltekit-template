<script>
	import Nav from '$shared/Nav.svelte'
</script>

<header id="header" class="header">
	<div class="nav-pane">
		<div class="nav">
			<Nav dotAbove href="/">Home</Nav>
			<Nav dotAbove href="/tutorial">Tutorial</Nav>
			<Nav dotAbove href="/error">Error</Nav>
		</div>
	</div>

	<div id="main-content"></div>
</header>

<style>
	.header {
		width: 100%;
		padding-top: 1rem;
	}

	.nav-pane {
		display: flex;
		justify-content: center;
	}

	.nav {
		display: flex;
		flex-direction: column;
		align-self: flex-start;

		justify-content: center;
		align-items: center;

		gap: 0.6rem;

		width: 50%;
		padding: 1rem 0;
	}

	@media only screen and (min-width: 600px) {
		.nav-pane {
			flex-wrap: wrap;
		}

		.nav {
			flex-wrap: wrap;
			flex-direction: row;
			align-items: center;

			width: 100%;

			margin-top: 0rem;
			gap: 1rem;

			height: 4rem;
		}
	}
</style>
