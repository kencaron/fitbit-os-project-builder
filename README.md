# Probably don't bother until I can figure it out #
This seems to be a failed experiment at least for now. Initial tests against `memory.js` and `memory.native` have not shown significant improvements to my personal project. I will continue to research ways to improve performance and welcome any PRs.

# Fitbit OS Project Builder #

## Why? ##
Currently Fitbit Studio does not provide a local toolchain or a way to minify files. This allows us to free up some memory inside the `app` directory. If this helps you relieve some memory pressure then it is doing it's job.

## Install ##
- `npm i`
- `npm i -g gulp`
- `gulp`

## Usage ##
- Extract your project from [Studio](https://studio.fitbit.com/)
- Drop the contents of it into an empty `src`.The provided `src` was just taken from the "Minimal" Studio project template.
- Run `gulp`
- Drag the contents of `dist` into your project. I recommend you do this in a new empty project to keep your source files safe and readable.

## Roadmap ##
Please provide a PR if you are interested in helping me with any of these. Otherwise I may get to these when I feel like it

- Watchers
- Gulp task that reads zip files first, so we don't even need to extract manually
- Targeting `common` as well as `app`
- Other tasks that would be helpful, such as automatic conversion from `jpg` to `png` comes to mind

## FAQ ##

- Why not rollup, like what Studio uses?

> I'm honestly more familiar with gulp and I like how versatile it is. The theory is that shouldn't introduce issues with Studio's build system. I'd be very interested to see a Rollup or Webpack version targeted at Fitbit Studio projects.

- This has nothing to do with Fitbit OS, this is just a couple gulp tasks!

> You're not wrong, this was thrown together quickly and is a starting point.

- I used your project and it deleted my app!

> Use at your own risk. Please be careful to treat `dist` as a volatile directory.
