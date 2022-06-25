<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { circIn, circOut } from 'svelte/easing'

	export let disable = false

	const not = (v) => !v
	const motionPref = () => window.matchMedia(`(prefers-reduced-motion: reduce)`)
	const userPrefersMotion = () =>
		motionPref() === true || motionPref().matches !== true

	onMount(() => {
		disable = disable || not(userPrefersMotion)
	})
</script>

{#if !disable}
	<div
		class="container"
		in:fade="{{ duration: 250, delay: 300, easing: circIn }}"
		out:fade="{{ duration: 250, easing: circOut }}">
		<slot />
	</div>
{:else}
	<slot />
{/if}

<style>
	.container {
		width: 100%;
	}
</style>
