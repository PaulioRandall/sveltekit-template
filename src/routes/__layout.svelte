<script>
	import '../tailwind.css'
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<div class="flex flex-col min-h-screen items-center">
	<Header />

	<main class="container flex-grow my-4 px-2 max-w-3xl">
		<slot />
	</main>

	<Footer />
</div>
