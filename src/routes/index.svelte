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

<h1 class="page-heading">{title}</h1>

<p class="text-normal">
	A <Hyperlink data="{sveltekit}" /> template with <Hyperlink
		data="{tailwind}" /> and <Hyperlink data="{prettier}" /> setup. Also includes
	a simple header and footer for decoration when rapid prototyping.
</p>

<p class="text-normal">
	Take a look at the <Hyperlink data="{tutorial}" />.
</p>
