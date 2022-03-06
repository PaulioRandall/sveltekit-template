<script>
	export let youtubeId

	if (!youtubeId) {
		throw new Error('You forgot to provide a Youtube video ID!')
	}
</script>

<div class="video">
	<iframe
		class="iframe"
		preload="metadata"
		src="https://www.youtube-nocookie.com/embed/{youtubeId}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen></iframe>
</div>

<style>
	.video {
		width: 100%;
		aspect-ratio: 16/9;
	}

	.iframe {
		width: 100%;
		height: 100%;
	}
</style>
