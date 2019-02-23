# Angular Chrome Extension Scaffold Project

This project is an Angular scaffold project for google chrome extensions, see [Github.](https://github.com/larscom/angular-chrome-extension)

## How to use/develop
- clone this repository
- run `npm install`
- run `npm run watch`
- goto: `chrome://extensions` in the browser and enable 'developer mode'
- press `Load unpacked` and target the folder `angular/dist`

The project is automatically being watched, any changes to the files will recompile the project.

**NOTE**: changes to the contentPage requires you to reload the extension in `chrome://extensions`


## Build/package for production

- run `npm run build:production`
- upload `extension-build.zip` to the chrome webstore.
- (optional) you can also manually zip your extension, the production build will output to folder `angular/dist`

This will run a production build and will automatically zip it as a extension package in the root folder `./` named: `extension-build.zip`

**NOTE**: Do not forget to update the version number inside `manifest.json`