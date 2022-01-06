<script>
	export let youtubeId

	if (!youtubeId) {
		throw new Error('You forgot to provide a Youtube video ID!')
	}
</script>

<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/{youtubeId}"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
