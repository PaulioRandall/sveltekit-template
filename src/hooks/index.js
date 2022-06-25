// Information source: https://kit.svelte.dev/docs/hooks
// All functions specified in this file are server side only.

// handle allows you to do middleware stuff. It's the first checkpoint in the
// lifecycle of a request.
//
// Unfortunatly, Polka and Express 'engine' middlewares cannot be used here as
// SvelteKit aims to be fully decoupled from them and any deployment
// enviornment. If you want to apply 'engine' specific middlewares then you'll
// have to do it within a SvelteKit adapter. Adapters are usually created as
// separate projects and imported but there is nothing stopping you creating
// a project specific adapter in some repository folder.
// For more see https://kit.svelte.dev/docs/adapters
//
// If you dont specify your own handle function a default one that simple
// performs `return resolve(event)` is created for you.
//
// # Lifecycle
//
// hooks.handle() -> hooks.getSession() -> routes/__layout.svelte -> routes/[path-to-requested-page]
// --------------
//
// # Arguments
//
// ```
// event: {
//   request: https://developer.mozilla.org/en-US/docs/Web/API/Request
//   url: https://developer.mozilla.org/en-US/docs/Web/API/URL
//   params: { <string>: <string> }
//   locals: { <string>: <any> }
// }
// ```
//
// `params` refers to path parameters specified via file or folder names with
// the format `[param-name]`, e.g. `/users/[user-id].svelte`.
//
// The `event.locals` is specifically for us to store server side session data.
// This data won't be available within components but we can expose it to
// clients via the getSession function which is called at the start of the call
// to the resolve function.
//
// ```
// resolve: (event) => {
//   return Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
// }
// ```
//
// The resolve function is the SvelteKit handler, i.e. it performs the Svelte
// page routing and rendering etc. Make sure you call it after you've done your
// pre-request middleware stuff and before you do your post-request middleware
// stuff. And make sure to return the response object it returns!
//
// # Returns
//
// Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
//
// A JavaScript Response or promise for one. Usually the one produced by
// resolve(event) is returned but you can create your own.
//
export async function handle({ event, resolve }) {
	console.log(event.url.pathname, '- handle({ event, resolve })')

	event.locals.dessert = 'Cheesecake'
	event.locals.secret = 'Maple syrup'

	return resolve(event)
}

// getSession returns session data that is available client side within
// Svelte components.
//
// getSession returns session data that is available client side within
// Svelte components. Because this information will be exposed to the client we
// want to be careful about adding sensitive data. That means never blindly
// returning `event.locals`. Instead, create a new object and add just what is
// needed.
//
// Session parameters returned here are available from both the load function
// of any Svelte component via its module script an the '$app/stores' import,
// for example:
//
// ```
// <script context='module'>
//  export async function load({ ..., session, ... }) {
//    const data = session.myData
//  }
// </script>
//
// <script>
//   import { ..., session, ... } from '$app/stores';
//   const data = session.myData
// </script>
// ```
//
// If you dont specify your own getSession function a default one that simple
// performs `return {}` is created for you.
//
// # Lifecycles
//
// hooks.handle() -> hooks.getSession() -> routes/__layout.svelte -> ...components...
//                   ------------------
// hooks.handleError() -> hooks.getSession() -> src/routes/__error.svelte
//                        ------------------
//
// # Arguments
//
// ```
// event: {
//   request: https://developer.mozilla.org/en-US/docs/Web/API/Request
//   url: https://developer.mozilla.org/en-US/docs/Web/API/URL
//   params: { <string>: <string> }
//   locals: { <string>: <any> }
// }
// ```
//
// `params` refers to path parameters specified via file or folder names with
// the format `[param-name]`, e.g. `/users/[user-id].svelte`.
//
// The `event.locals` is specifically for us to store server side session data.
// This data won't be available within components but we can return the values
// we need in this getSession function so they are accessible in our
// components.
//
// # Returns
//
// {
//   <key>: <any>
// }
//
// An object containing any session data.
//
export function getSession(event) {
	console.log(event.url.pathname, '- getSession(event)')

	return {
		dessert: event.locals.dessert,
	}
}

// handleError allows you to specify what happens when an exception is caught,
// including those thrown by Svelte components.
//
// If you dont specify your own handleError function then one will be created
// for you that logs the error.
//
// # Lifecycle
//
// handleError() -> getSession() -> src/routes/__error.svelte
// -------------
//
// # Arguments
//
// error: <whatever was thrown>
//
// ```
// event: {
//   request: https://developer.mozilla.org/en-US/docs/Web/API/Request
//   url: https://developer.mozilla.org/en-US/docs/Web/API/URL
//   params: { <string>: <string> }
//   locals: { <string>: <any> }
// }
// ```
//
// `params` refers to path parameters specified via file or folder names with
// the format `[param-name]`, e.g. `/users/[user-id].svelte`.
//
// The `event.locals` is specifically for us to store server side session data.
// This data won't be available within components but we can expose it via the
// getSession function which is called after this handleError function.
//
// # Returns
//
// Nothing!
//
export async function handleError({ error, event }) {
	console.log(event.url.pathname, '- handleError({ error, event })')
	log(event, error)
}

// externalFetch allows you to intercept server side fetch requests such as
// those performed in Sveltekit component load functions. You can then modify
// the request as you please.
//
// If you specify this function you must call make the request and return the
// resultant fetch promise.
//
// # Arguments
//
// Request: https://developer.mozilla.org/en-US/docs/Web/API/Request
//
// # Returns
//
// A fetch promise.
//
export async function externalFetch(request) {
	console.log(event.url.pathname, '- externalFetch(request)')

	const newRequest = new Request(request, {
		headers: {
			...request.headers,
			'X-Clacks-Overhead': 'GNU Terry Pratchet',
		},
	})

	return fetch(newRequest)
}
