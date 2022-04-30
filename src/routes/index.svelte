<script>
	import Body from '/src/pages/body/Body.svelte'
	import Hyperlink from '/src/shared/svelte/Hyperlink.svelte'

	const title = 'A Sveltekit Template'

	const sveltekit = { href: 'https://kit.svelte.dev/', text: 'Sveltekit' }
	const prettier = { href: 'https://prettier.io/', text: 'Prettier' }
	const tutorialPage = { href: '/tutorial', text: 'tutorial page' }
</script>

<Body title="{title}">
	<h1 class="default-page-heading">{title}</h1>

	<p class="default-text">
		A <Hyperlink to="{sveltekit}" /> template with <Hyperlink to="{prettier}" />
		setup. Also includes an easy to edit header and footer for decoration when rapid
		prototyping.
	</p>

	<p class="default-text">
		Take a look at the <Hyperlink to="{tutorialPage}" />.
	</p>
</Body>
