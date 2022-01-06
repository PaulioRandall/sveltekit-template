<script>
	import Hyperlink from '../shared/Hyperlink.svelte'

	const title = 'Welcome to this Sveltekit Template'

	const sveltekit = { href: 'https://kit.svelte.dev/', text: 'Sveltekit' }
	const tailwind = { href: 'https://tailwindcss.com/', text: 'Tailwind' }
	const prettier = { href: 'https://prettier.io/', text: 'Prettier' }
	const tutorial = { href: '/tutorial', text: 'tutorial page' }
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="core-page-heading">{title}</h1>

<p class="core-text-normal">
	A <Hyperlink data="{sveltekit}" /> template with <Hyperlink
		data="{tailwind}" /> and <Hyperlink data="{prettier}" /> setup. Also includes
	an easy to edit header and footer for decoration when rapid prototyping.
</p>

<p class="core-text-normal">
	Take a look at the <Hyperlink data="{tutorial}" />.
</p>

<style>
	@import '/src/shared/core.css';
</style>
