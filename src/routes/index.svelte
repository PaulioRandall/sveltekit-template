<script>
	import MenuPage from '/src/pages/MenuPage.svelte'
	import A from '/src/shared/svelte/A.svelte'

	const menuItems = [
		{
			label: 'SvelteKit',
			summary: 'To the SvelteKit website',
			href: 'https://kit.svelte.dev/',
		},
		{
			label: 'Prettier',
			summary: 'To the Prettier website',
			href: 'https://prettier.io/',
		},
		{
			label: 'Tutorial',
			summary:
				'Take a look at the tutorial page for getting started with SvelteKit',
			href: '/tutorial',
		},
	]

	let menuType = 'list'
	let otherType = 'grid'

	const switchMenuType = () => {
		const other = () => (menuType === 'list' ? 'grid' : 'list')
		menuType = other()
		otherType = other()
	}
</script>

<MenuPage type="{menuType}" title="A Sveltekit Template" items="{menuItems}">
	<div slot="intro" class="intro">
		<p class="generic-text">
			A <A classes="underlined" href="https://kit.svelte.dev/">Sveltekit</A> template
			with <A classes="underlined" href="https://prettier.io/">Prettier</A> and <A
				classes="underlined"
				href="https://jestjs.io/">Jest</A>
			setup.
		</p>
		<div class="menu-type" on:click|preventDefault="{switchMenuType}">
			Switch to {otherType} View
		</div>
	</div>
</MenuPage>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.intro :global(.underlined) {
		text-decoration: underline;
	}

	.menu-type {
		margin: 2rem 0;
		text-align: center;
		font-size: var(--font-size-xl);
		text-transform: capitalize;
		cursor: pointer;
		color: var(--color-interactive);
	}
</style>
