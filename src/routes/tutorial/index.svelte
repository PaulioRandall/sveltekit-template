<script>
	import Body from '/src/shared/svelte/page/Body.svelte'
	import TutorialVideo from './_TutorialVideo.svelte'

	const title = 'Tutorial'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Body>
	<h1 class="base-page-heading">{title}</h1>

	<p class="base-text-normal">
		I used the following tutorial as a guide in building this template. Worth a
		watch if you're unfamiliar with Sveltekit.
	</p>

	<TutorialVideo youtubeId="uC6y59y4V4w" />
</Body>

<style>
	@import '/src/shared/css/base.css';
</style>
