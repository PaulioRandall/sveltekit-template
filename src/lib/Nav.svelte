<script>
	export let draft = false

	export let href
	export let onClick = () => true

	export let dotAbove = false
	export let dotBelow = false

	const side = !dotAbove && !dotBelow
</script>

<div class="nav">
	<a
		class:draft="{draft}"
		href="{href}"
		sveltekit:noscroll
		sveltekit:prefetch
		class="link"
		class:dotAbove="{dotAbove}"
		class:dotBelow="{dotBelow}"
		class:side="{side}"
		on:click="{onClick}">
		<slot />
	</a>
</div>

<style>
	.nav a.draft {
		color: var(--color-rebel);
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;
		user-select: none;
	}

	.link {
		position: relative;
		min-width: 3rem;
		padding: 0.5rem;

		color: var(--color-interactive);
		cursor: pointer;
		text-align: center;

		transition: padding 0.3s ease-out, color 1s;
	}

	.link::before,
	.link::after {
		position: absolute;
		content: '•';

		opacity: 0;

		top: 50%;
		transform: translateY(-50%);
	}

	.side:hover::before,
	.side:hover::after,
	.dotAbove:hover::before,
	.dotBelow:hover::after {
		opacity: 1;
		transition: opacity 0.4s ease-out;
	}

	.side:hover {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}

	.side:hover::before {
		left: 0;
	}

	.side:hover::after {
		right: 0;
	}

	@media only screen and (max-width: 599px) {
		.link:hover::before,
		.link:hover::after {
			opacity: 1;
		}

		.dotAbove:hover,
		.dotBelow:hover {
			padding-left: 1.6rem;
			padding-right: 1.6rem;
		}

		.dotAbove::before,
		.dotBelow::after {
			top: 50%;
			transform: translateY(-50%);
		}

		.dotAbove:hover::before,
		.dotBelow:hover::after {
			left: 0;
		}

		.dotAbove:hover::after,
		.dotBelow:hover::before {
			right: 0;
		}
	}

	@media only screen and (min-width: 600px) {
		.dotAbove::before,
		.dotBelow::after {
			left: 50%;
			transform: translateX(-50%);
		}

		.dotAbove:hover {
			padding-top: 1.6rem;
		}

		.dotAbove:hover::before {
			top: 0;
		}

		.dotBelow:hover {
			padding-bottom: 1.6rem;
		}

		.dotBelow:hover::after {
			bottom: 0;
		}
	}
</style>
