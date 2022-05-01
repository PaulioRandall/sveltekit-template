<script>
	import GenericPage from '/src/pages/GenericPage.svelte'
	import Hyperlink from '/src/shared/svelte/Hyperlink.svelte'

	const title = 'A Sveltekit Template'

	const sveltekit = { href: 'https://kit.svelte.dev/', text: 'Sveltekit' }
	const prettier = { href: 'https://prettier.io/', text: 'Prettier' }
	const tutorialPage = { href: '/tutorial', text: 'tutorial page' }
</script>

<GenericPage title="{title}">
	<p class="default-text">
		A <Hyperlink to="{sveltekit}" /> template with <Hyperlink to="{prettier}" />
		setup. Also includes an easy to edit header and footer for decoration when rapid
		prototyping.
	</p>

	<p class="default-text">
		Take a look at the <Hyperlink to="{tutorialPage}" />.
	</p>
</GenericPage>
