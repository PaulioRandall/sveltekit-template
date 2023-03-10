<script>
	export let xs = false
	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false
	export let xxl = false
	export let xxxl = false
</script>

<div
	class="page-space"
	class:xs="{xs}"
	class:sm="{sm}"
	class:md="{md}"
	class:lg="{lg}"
	class:xl="{xl}"
	class:xxl="{xxl}"
	class:xxxl="{xxxl}">
</div>

<style>
	.page-space {
		margin-bottom: var(--page-space-lg);
	}

	.xs {
		margin-bottom: var(--page-space-xs);
	}

	.sm {
		margin-bottom: var(--page-space-sm);
	}

	.md {
		margin-bottom: var(--page-space-md);
	}

	.lg {
		margin-bottom: var(--page-space-lg);
	}

	.xl {
		margin-bottom: var(--page-space-xl);
	}

	.xxl {
		margin-bottom: var(--page-space-xxl);
	}

	.xxxl {
		margin-bottom: var(--page-space-xxxl);
	}
</style>
