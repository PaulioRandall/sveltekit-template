<script>
	import TutorialVideo from '../../organs/tutorial/TutorialVideo.svelte'

	const title = 'Tutorial'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="page-heading">{title}</h1>

<p class="text-normal">
	I used the following tutorial as a guide in building this template. Worth a
	watch if you're unfamiliar with Sveltekit.
</p>

<TutorialVideo youtubeId="uC6y59y4V4w" />
