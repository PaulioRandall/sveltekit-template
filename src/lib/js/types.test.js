import { not } from './types.js'

describe('not', () => {
	test('true === false', () => {
		expect(not(true)).toEqual(false)
	})

	test('false === true', () => {
		expect(not(false)).toEqual(true)
	})
})
