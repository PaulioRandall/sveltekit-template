const base = 'http://localhost:4000'
const URL = (path) => `${base}${path}`

const testForStatus = (path, status) => {
	return cy
		.request({
			url: `${base}${path}`,
			failOnStatusCode: false,
		})
		.then((res) => {
			expect(res.status).equal(status)
		})
}

const routes = [
	{ path: '/', status: 200 },
	{ path: '/copyright', status: 200 },
	{ path: '/tutorial', status: 200 },
	{ path: '/error', status: 404 },
]

describe('All paths return correct status', () => {
	for (const r of routes) {
		it(r.path, () => testForStatus(r.path, r.status))
	}
})
