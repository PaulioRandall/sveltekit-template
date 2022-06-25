<script>
	import Nav from './Nav.svelte'

	export let to
	export let dotAbove = false
	export let dotBelow = false

	const autoScroll = (event) => {
		event.preventDefault()

		const elem = document.getElementById(to)
		elem.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
			inline: 'start',
		})
	}
</script>

<Nav
	href="#{to}"
	onClick="{autoScroll}"
	dotAbove="{dotAbove}"
	dotBelow="{dotBelow}">
	<slot />
</Nav>
