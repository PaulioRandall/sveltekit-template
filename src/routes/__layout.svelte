<script>
	import '../tailwind.css'
	import Header from './_Header.svelte'
	import Footer from './_Footer.svelte'

	let buildDate = import.meta.env.VITE_BUILD_DATE
	if (!buildDate) {
		buildDate = 'undefined'
	}
</script>

<svelte:head>
	<meta name="build-date" content="{buildDate}" />
</svelte:head>

<div class="flex flex-col min-h-screen items-center">
	<Header />

	<main class="container flex-grow my-4 px-2 max-w-3xl">
		<slot />
	</main>

	<Footer />
</div>
