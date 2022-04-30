export const not = (v) => !v
export const missing = (v) => !v

export const isObject = (v) => !!v && v.constructor === Object
export const isNotObject = (v) => !v || v.constructor !== Object

export const isArray = (v) => !!v && v.constructor === Array
export const isNotArray = (v) => !v || v.constructor !== Array

export default {
	not,
	missing,
	isObject,
	isArray,
	isNotObject,
	isNotArray,
}
