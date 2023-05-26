# Sveltekit Template

A [Sveltekit](https://kit.svelte.dev/) project template with [Prettier](https://prettier.io/), [Jest](https://jestjs.io/), and [Cypress](https://www.cypress.io/) setup and ready to go.

I've also added [svelte-preprocess-import-assets](https://www.npmjs.com/package/svelte-preprocess-import-assets). I found this helps allows me to keep data files and images that are specific to a page in the same folder as the `+page.svelte` that uses it rather than in `/static`.

## To start a new project

1. Clone the repo and delete the lock file:

```bash
git clone https://github.com/PaulioRandall/sveltekit-template.git
cd sveltekit-template
rm -f package-lock.json
```

2. Update project name in `package.json` with your project name.

3. Install [Node v18.16.0](https://nodejs.org/en/download/).

4. Install, build, and run:

```bash
npm i
npm run build
npm run dev
```

5. Enjoy at [localhost:3000](http://localhost:3000)

6. When you are ready to commit and push changes use the following to run a full format, build, code test, and service test:

```bash
npm run commit
```

You'll know if everything is good because you'll get a curated ASCII scene. This can be changed by modifying `./scripts/well-done.txt`:

```bash
                                       ...oo000o.
                                                 00oo.
  __________  _________  ______  _____________        oo.
  |        |  |       |  |    |  |           |  _____    o
  | You're |  | Ready |  | To |  | Integrate |  |__D|____][_
  |________|%%|_______|%%|____|%%|___________|%%|_~~~~++++~_}
   @~@~~@~@    @~~@~~@    @~~@    @~~@~~~@~~@    @~~@~~~@~~@ 
```

## Stuck or curious

#### Format code?

```bash
npm run fmt
```

Modify `.prettierrc.json` to customise styling.

#### Delete build directory?

```bash
npm run clean
```

#### Environment variables?

All environment variables must be prefixed with `VITE_` or they won't be accessible by Sveltekit through [Vite](https://vitejs.dev/).

At the start of a build `./scripts/build-env.sh` is run that generates a `.env` file in the root of the project. This file is ignored by Git. Add new variables by modifying the `build-env.sh` script. Changing `.env` will result in your changes being wiped on the next build.

To rebuild this file without rebuilding the project use the following:

```bash
npm run prebuild
```

If you don't need this just delete `./scripts/build-env.sh` and remove the calling command from the _scripts_ object in `package.json`.

#### Permission denied?

```bash
sh: 1: ./scripts/build-env.sh: Permission denied
```

If you get a permissions error like the one above then you'll just need to give yourself permissions to execute the file. Something like:

```bash
chmod 744 ./scripts/build-env.sh
```

If you're on Windows you'll have to figure that out your self. Sorry.

#### Production build warning

```bash
	Could not detect a supported production environment...
```

Don't worry if you get a build warning like the one above.

When the time comes to deploy to development and production environments you'll want to research [SvelteKit adapters](https://kit.svelte.dev/docs/adapters).

Since I use Vercel to host my personal website I use [@sveltejs/adapter-vercel](https://www.npmjs.com/package/@sveltejs/adapter-vercel). There are many others and you can write your own. I've written a custom Express adapter before and it's not too difficult; just a little tedious due to extra work needed to test it.
