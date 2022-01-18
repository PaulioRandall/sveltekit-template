# Sveltekit Template

A [Sveltekit](https://kit.svelte.dev/) project template with [Tailwind](https://tailwindcss.com/) and [Prettier](https://prettier.io/) setup.

## New project

1. Clone the repo and delete the lock file (if present):

```bash
git clone https://github.com/PaulioRandall/template-sveltekit.git
cd template-sveltekit
rm -f package-lock.json
```

2. Update project name in `package.json` with your project name.

3. Install [Node v14](https://nodejs.org/en/download/). Awaiting support from cloud providers to upgrade to Node v16.

4. Install, build, and run:

```bash
npm i
npm run build
npm run dev
```

5. Enjoy at [localhost:3000](http://localhost:3000)

## Stuck or curious

#### Format code?

```bash
npm run fmt
```

Modify `.prettierrc.json` to customise styling.

#### Permission denied?

```bash
sh: 1: ./scripts/build-env.sh: Permission denied
```

If you get a permissions error like the one above then you'll just need to give yourself permissions to execute the file:

```bash
chmod 744 ./scripts/build-env.sh
```

#### Environment variables?

All environment variables must be prefixed with `VITE_` or they won't be accessible by Sveltekit.

At the start of a build `./scripts/build-env.sh` is run that generates a `.env` file in the root of the project. This file is ignored by Git. Modify the script not the resultant file to add new variables.

To rebuild this file without rebuilding the project use:

```bash
npm run prebuild
```

#### Build warnings

Don't worry if you receive build warnings such as the one below. I get them too. As far as I've researched, they are safe to ignore: [stackoverflow](https://stackoverflow.com/questions/62810078/how-to-solve-npm-warn-optional-skipping-optional-dependency-fsevents1-2-13)

```bash
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: ...
```
