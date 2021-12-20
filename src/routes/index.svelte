<script>
	import TabLink from '../elements/TabLink.svelte'

	const title = 'Welcome to this Sveltekit Template'

	const sveltekit = { href: 'https://kit.svelte.dev/', text: 'Sveltekit' }
	const tailwind = { href: 'https://tailwindcss.com/', text: 'Tailwind' }
	const prettier = { href: 'https://prettier.io/', text: 'Prettier' }
</script>

<head>
	<title>{title}</title>
</head>

<h1 class="page-heading">{title}</h1>

<p class="text-normal">
	A <TabLink data="{sveltekit}" /> template with <TabLink data="{tailwind}" /> and
	<TabLink data="{prettier}" /> setup. Also includes a simple header and footer for
	decoration when rapid prototyping.
</p>

<p class="text-normal">
	I used the following tutorial as a guide in building this template. Worth a
	watch if you're unfamiliar with Sveltekit.
</p>

<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/uC6y59y4V4w"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
