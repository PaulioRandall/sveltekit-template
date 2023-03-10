<script>
	export let items /* = [
		{
			label: "",
			summary: "",
			href: "",
			draft?: false,
		},
	] */
</script>

<div class="grid-menu">
	{#each items as item}
		<div class="item" class:draft="{item.draft}">
			<a
				href="{item.href}"
				sveltekit:noscroll
				sveltekit:prefetch
				class="item-anchor">
				<div class="item-name">
					{@html item.label}
				</div>
				<div class="item-summary">
					{@html item.summary}
				</div>
			</a>
		</div>
	{/each}
</div>

<style>
	.grid-menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	.item {
		flex-grow: 1;
		display: flex;

		width: 240px;
		min-height: 100px;

		border-radius: 0.6rem;
		border: 2px solid var(--color-interactive);
		background-color: var(--color-base);
	}

	.item.draft {
		border: 2px solid var(--color-rebel);
	}

	.item:hover {
		text-shadow: 0 0 1px;
		box-shadow: 0 0 4px 2px var(--color-interactive);
		animation: periodic-wiggle 3s infinite;
	}

	.item.draft:hover {
		box-shadow: 0 0 4px 2px var(--color-rebel);
	}

	.item-anchor {
		width: 100%;
		padding: 1rem;

		text-align: center;
	}

	.item-name {
		font-weight: bold;
	}

	.draft .item-name {
		color: var(--color-rebel);
	}

	.item-summary {
		color: var(--color-text);
	}

	@keyframes periodic-wiggle {
		0% {
			transform: rotate(0);
		}
		84% {
			transform: rotate(0);
		}
		86% {
			transform: rotate(6deg);
		}
		88% {
			transform: rotate(0);
		}
		90% {
			transform: rotate(-6deg);
		}
		92% {
			transform: rotate(0);
		}
		94% {
			transform: rotate(6deg);
		}
		96% {
			transform: rotate(0);
		}
		98% {
			transform: rotate(-6deg);
		}
		100% {
			transform: rotate(0);
		}
	}
</style>
