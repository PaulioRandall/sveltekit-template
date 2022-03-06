<script>
	import Header from './_Header.svelte'
	import Footer from './_Footer.svelte'

	export let outer = '' // Classes
	export let inner = '' // Classes

	export let left = false
	export let right = false
	export let center = !left && !right

	export let slim = false
	export let wide = false
	export let vast = false
	export let fill = false
	export let mean = !slim && !wide && !vast && !fill

	export let nopad = false
	export let pad2 = false
	export let pad3 = false
	export let pad4 = false
	export let pad1 = !nopad && !pad2 && !pad3 && !pad4

	export let focus = false
</script>

<div class="page-layout">
	<Header />
	<div class="main-layout {outer}" class:left class:center class:right>
		<main
			class="main {inner}"
			class:slim
			class:mean
			class:wide
			class:vast
			class:fill
			class:pad1
			class:pad2
			class:pad3
			class:pad4
			class:focus>
			<slot />
		</main>
	</div>
	<Footer />
</div>

<style>
	.page-layout {
		display: flex;
		flex-direction: column;
		align-items: center;

		min-height: 100vh;

		overflow: hidden;
	}

	.main-layout {
		flex-grow: 1;

		display: flex;
		flex-direction: row;

		max-width: 100vw;
		width: 100%;
	}

	.main {
		max-width: 100%;
		width: 100%;
	}

	.pad1 {
		padding: 0.5rem;
	}

	.pad2 {
		padding: 1rem;
	}

	.pad3 {
		padding: 2rem;
	}

	.pad4 {
		padding: 4rem;
	}

	.focus {
		display: flex;
		justify-content: center;
		align-content: center;
	}

	@media screen and (min-width: 40rem) {
		.slim {
			max-width: 40rem;
		}

		.mean {
			max-width: 52rem;
		}

		.wide {
			max-width: 64rem;
		}

		.vast {
			max-width: 80rem;
		}

		.fill {
		}

		.left {
			justify-content: flex-start;
		}

		.center {
			justify-content: center;
		}

		.right {
			justify-content: flex-end;
		}

		.pad1 {
			padding: 1rem;
		}

		.pad2 {
			padding: 2rem;
		}

		.pad3 {
			padding: 4rem;
		}

		.pad4 {
			padding: 8rem;
		}
	}
</style>
