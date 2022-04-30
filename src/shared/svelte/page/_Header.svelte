<script>
	import NavLink from './_NavLink.svelte'
	import Breadcrumbs from './_Breadcrumbs.svelte'
	import { page } from '$app/stores'

	const downTriangle = '&#9660;'
</script>

<div class="header">
	<Breadcrumbs />

	<span class="jump-to-footer">
		<NavLink scroll="footer">
			{@html downTriangle}
		</NavLink>
	</span>
</div>

<style>
	.header {
		display: grid;
		grid-template-columns: 1fr;

		width: 100%;
		background-color: var(--dark-gray);
	}

	.jump-to-footer {
		margin: auto auto;
	}

	@media only screen and (min-width: 600px) {
		.header {
			grid-template-columns: 1fr auto;
		}

		.jump-to-footer {
			align-self: end;
		}
	}
</style>
