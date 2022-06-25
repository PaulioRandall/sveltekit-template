import { defineConfig } from 'cypress'

export default defineConfig({
	video: false,
	screenshotOnRunFailure: false,
	failOnStatusCode: false,
	e2e: {
		baseUrl: 'http://localhost:4000',
		supportFile: false,
	},
})
