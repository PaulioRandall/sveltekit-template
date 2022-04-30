<script>
	import NavLink from './NavLink.svelte'
	import { page } from '$app/stores'

	const parentOf = (path) => {
		const i = path.lastIndexOf('/')
		return i == -1 ? '' : path.slice(0, i)
	}

	const newSegment = (path) => {
		return {
			text: path === '/' ? 'Home' : path.slice(1, path.length),
			path: path,
		}
	}

	const splitPathIntoSegments = (path) => {
		const segments = []

		while (path && path != '/') {
			segments.unshift(newSegment(path))
			path = parentOf(path)
		}

		segments.unshift(newSegment('/'))
		return segments
	}

	$: segments = splitPathIntoSegments($page.url.pathname)
</script>

<span class="breadcrumbs">
	{#each segments as segment, i}
		{#if i != 0}
			<span class="direction">&gt;</span>
		{/if}
		<NavLink shrink href="{segment.path}">
			{segment.text}
		</NavLink>
	{/each}
</span>

<style>
	.breadcrumbs {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;

		color: white;
		font-style: italic;
		user-select: none;
	}

	.direction {
		transition: 0.8s ease;
		transform: rotate(90deg);
		line-height: 0.2rem;
	}

	@media only screen and (min-width: 600px) {
		.breadcrumbs {
			justify-self: start;
			flex-direction: row;
			margin-left: 0.5rem;
		}

		.direction {
			transform: rotate(0deg);
		}
	}
</style>
