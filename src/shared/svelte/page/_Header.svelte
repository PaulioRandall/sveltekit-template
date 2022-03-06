<script>
	import NavLink from './_NavLink.svelte'
	import { page } from '$app/stores'

	const downTriangle = '&#9660;'

	const parentOf = (path) => {
		const i = path.lastIndexOf('/')
		if (i == -1) {
			return ''
		}

		return path.slice(0, i)
	}

	const newSegment = (path) => {
		let text = 'Sveltekit Template'
		if (path != '/') {
			text = path.slice(1, path.length)
		}

		return {
			text: text,
			path: path,
		}
	}

	const splitPathIntoSegments = (path) => {
		const segments = []

		for (; path && path != '/'; path = parentOf(path)) {
			segments.unshift(newSegment(path))
		}

		segments.unshift(newSegment('/'))
		return segments
	}

	$: segments = splitPathIntoSegments($page.url.pathname)
</script>

<div class="header">
	<span class="breadcrumbs">
		{#each segments as segment, i}
			{#if i != 0}
				<span class="direction">&gt;</span>
			{/if}
			<NavLink href="{segment.path}" shrink>
				{segment.text}
			</NavLink>
		{/each}
	</span>

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
		@apply bg-gray-900;
	}

	.breadcrumbs {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;

		color: white;
		font-style: italic;
		user-select: none;
	}

	.direction {
		transition: 0.8s ease;
		transform: rotate(90deg);
		line-height: 0.2rem;
	}

	.jump-to-footer {
		margin: auto auto;
	}

	@media only screen and (min-width: 600px) {
		.header {
			grid-template-columns: 1fr auto;
		}

		.breadcrumbs {
			justify-self: start;
			flex-direction: row;
		}

		.direction {
			transform: rotate(0deg);
		}

		.jump-to-footer {
			align-self: end;
		}
	}
</style>
