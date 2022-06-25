<script>
	import GenericPage from '/src/pages/GenericPage.svelte'
	import TutorialVideo from './_TutorialVideo.svelte'

	const title = 'Tutorial'
</script>

<GenericPage title="{title}">
	<p class="generic-text">
		I used the following tutorial as a guide to building the initial version of
		this template. Worth a watch if you're unfamiliar with Sveltekit.
	</p>

	<TutorialVideo youtubeId="uC6y59y4V4w" />
</GenericPage>
