import adapter from '@sveltejs/adapter-auto'
import importAssets from 'svelte-preprocess-import-assets'
import path from 'path'

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
			$shared: path.resolve('./src/lib'),
		},
	},
	preprocess: [importAssets()],
}
