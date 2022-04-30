<script>
	import Body from '/src/shared/svelte/page/Body.svelte'
	import TutorialVideo from './_TutorialVideo.svelte'

	const title = 'Tutorial'
</script>

<Body title="{title}">
	<h1 class="default-page-heading">{title}</h1>

	<p class="default-text">
		I used the following tutorial as a guide to building the initial version of
		this template. Worth a watch if you're unfamiliar with Sveltekit.
	</p>

	<TutorialVideo youtubeId="uC6y59y4V4w" />
</Body>
