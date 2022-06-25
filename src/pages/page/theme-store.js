import { writable } from 'svelte/store'

export const LIGHT = 'theme-light'
export const DARK = 'theme-dark'

export const theme = writable(null)

export const isLight = (t) => t === LIGHT
export const isDark = (t) => t === DARK
