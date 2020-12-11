# OSU UWRT - Simulator GUI
The development repository for the GUI for our simulator. Eventually this will let anyone on the team start up the simulator and take it through runs to figure out the weak points in our task code systems and so on. 

If you are looking for an end user-usable copy, development isn't yet far enough along for that. When it is, there will be a release on the GitHub page that provides a .deb file or similar.

## Development - Set Up
1. Clone the repository to anywhere on your computer
2. Install `yarn`; our build system uses it instead of npm. You can find instructions [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable).
3. Execute `yarn` in terminal. This will install everything outlined in the `package.json` file.

From there you should be good to go!

## Development - Run
Run `yarn start` in terminal. This will start up the development version of the repostory. 

Note that you can use the Chrome web developer tools via the `Control-Shift-I` keyboard shortcut.

## Development - Build
Run `yarn dist-linux` in terminal. This will make `AppImage` and `deb` files which will show up in a newly created `dist` directory.
