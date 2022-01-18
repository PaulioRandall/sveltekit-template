export const isObject = (v) => !!v && v.constructor === Object
export const isNotObject = (v) => !v || v.constructor !== Object

export const isArray = (v) => !!v && v.constructor === Array
export const isNotArray = (v) => !v || v.constructor !== Array

export default {
	isObject,
	isArray,
	isNotObject,
	isNotArray,
}
