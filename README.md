# OSU UWRT - Simulator GUI
The development repository for the GUI for our simulator. Eventually this will let anyone on the team start up the simulator and take it through runs to figure out the weak points in our task code systems and so on. 

If you are looking for an end user-usable copy, development isn't yet far enough along for that. When it is, there will be a release on the GitHub page that provides a .deb file or similar.

## Development - Set Up
1. Install Node.js; any recent LTS version should do fine.
2. Clone the repository to anywhere on your computer
3. Install `yarn`; our build system uses it instead of npm. You can find instructions [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable).
4. Execute `yarn` in terminal. Ensure you are in this directory. This will install all the npm packages outlined in the `package.json` file.
5. This repository uses SCSS, a superset of CSS that supports things like nesting selectors, to do styling. It needs compiled to .css for the browser to actually read it; I recommend you use the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) extension to do this, and just start that up at the beginning of development.

From there you should be good to go!

## Development - Run
Run `yarn start` in terminal. This will start up the development version of the repostory. Note that you can use the Chrome web developer tools via the `Control-Shift-I` keyboard shortcut and that to get code changes to run you will have to run `yarn start` again (though it's possible to do hot reloading; pretty sure Scylla has it and it's probably a brief google away).

## Development - Build
Run `yarn dist` in terminal. This will make `AppImage` and `deb` files by the rules governed in `package.json`'s `build` field. The end `AppImage` and `deb` will show up in a newly created `dist` directory.
