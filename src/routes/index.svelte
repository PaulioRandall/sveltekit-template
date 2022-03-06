<script>
	import Body from '/src/shared/svelte/page/Body.svelte'
	import Hyperlink from '/src/shared/svelte/Hyperlink.svelte'

	const title = 'A Sveltekit Template'

	const sveltekit = { href: 'https://kit.svelte.dev/', text: 'Sveltekit' }
	const tailwind = { href: 'https://tailwindcss.com/', text: 'Tailwind' }
	const prettier = { href: 'https://prettier.io/', text: 'Prettier' }
	const tutorialPage = { href: '/tutorial', text: 'tutorial page' }
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Body>
	<h1 class="base-page-heading">{title}</h1>

	<p class="base-text-normal">
		A <Hyperlink to="{sveltekit}" /> template with <Hyperlink to="{tailwind}" />
		and
		<Hyperlink to="{prettier}" /> setup. Also includes an easy to edit header and
		footer for decoration when rapid prototyping.
	</p>

	<p class="base-text-normal">
		Take a look at the <Hyperlink to="{tutorialPage}" />.
	</p>
</Body>

<style>
	@import '/src/shared/css/base.css';
</style>
