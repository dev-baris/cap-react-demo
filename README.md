# Capacitor React

The Capacitor React is used to develop new features and verify bug fixes in Capacitor and the [official plugins](https://github.com/ionic-team/capacitor-plugins). It is built with [Ionic React](https://ionicframework.com/react).

### Developing

```shell
ionic build --prod
npx cap sync
npx cap open ios
npx cap open android
```

### Icon and Splash generate

sudo npx capacitor-assets generate

https://github.com/ionic-team/capacitor-assets

## Setup

See [the docs](https://ionicframework.com/docs/react) to learn what you can do.

- `ionic build --prod` to build web assets
- `ionic serve` to run web version in your browser
- `ionic cap sync`
- `ionic cap run <platform>` (also w/ livereload: just add `-l --external` flags)

You can also opt-out of the Ionic CLI and use npm scripts and the Capacitor CLI directly:

- `npm run build --prod`
- `npm start`
- `npx cap sync`
- `npx cap run <platform>` (no automatic livereload)

### Others

```shell
sudo npm cache clean -f --unsafe-perm=true --allow-root

sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
sudo chown -R $USER:$GROUP ~/.ionic
```

## Plugins

| Package | Source | Version |
| --- | --- | --- |
| [`@capacitor/action-sheet`](https://capacitorjs.com/docs/apis/action-sheet) | [`./action-sheet`](./action-sheet) | [![npm badge](https://img.shields.io/npm/v/@capacitor/action-sheet?style=flat-square)](https://www.npmjs.com/package/@capacitor/action-sheet)
| [`@capacitor/app-launcher`](https://capacitorjs.com/docs/apis/app-launcher) | [`./app-launcher`](./app-launcher) | [![npm badge](https://img.shields.io/npm/v/@capacitor/app-launcher?style=flat-square)](https://www.npmjs.com/package/@capacitor/app-launcher)
| [`@capacitor/app`](https://capacitorjs.com/docs/apis/app) | [`./app`](./app) | [![npm badge](https://img.shields.io/npm/v/@capacitor/app?style=flat-square)](https://www.npmjs.com/package/@capacitor/app)
| [`@capacitor/browser`](https://capacitorjs.com/docs/apis/browser) | [`./browser`](./browser) | [![npm badge](https://img.shields.io/npm/v/@capacitor/browser?style=flat-square)](https://www.npmjs.com/package/@capacitor/browser)
| [`@capacitor/camera`](https://capacitorjs.com/docs/apis/camera) | [`./camera`](./camera) | [![npm badge](https://img.shields.io/npm/v/@capacitor/camera?style=flat-square)](https://www.npmjs.com/package/@capacitor/camera)
| [`@capacitor/clipboard`](https://capacitorjs.com/docs/apis/clipboard) | [`./clipboard`](./clipboard) | [![npm badge](https://img.shields.io/npm/v/@capacitor/clipboard?style=flat-square)](https://www.npmjs.com/package/@capacitor/clipboard)
| [`@capacitor/device`](https://capacitorjs.com/docs/apis/device) | [`./device`](./device) | [![npm badge](https://img.shields.io/npm/v/@capacitor/device?style=flat-square)](https://www.npmjs.com/package/@capacitor/device)
| [`@capacitor/dialog`](https://capacitorjs.com/docs/apis/dialog) | [`./dialog`](./dialog) | [![npm badge](https://img.shields.io/npm/v/@capacitor/dialog?style=flat-square)](https://www.npmjs.com/package/@capacitor/dialog)
| [`@capacitor/filesystem`](https://capacitorjs.com/docs/apis/filesystem) | [`./filesystem`](./filesystem) | [![npm badge](https://img.shields.io/npm/v/@capacitor/filesystem?style=flat-square)](https://www.npmjs.com/package/@capacitor/filesystem)
| [`@capacitor/geolocation`](https://capacitorjs.com/docs/apis/geolocation) | [`./geolocation`](./geolocation) | [![npm badge](https://img.shields.io/npm/v/@capacitor/geolocation?style=flat-square)](https://www.npmjs.com/package/@capacitor/geolocation)
| [`@capacitor/google-maps`](https://capacitorjs.com/docs/apis/google-maps) | [`./google-maps`](./google-maps) | [![npm badge](https://img.shields.io/npm/v/@capacitor/google-maps?style=flat-square)](https://www.npmjs.com/package/@capacitor/google-maps)
| [`@capacitor/haptics`](https://capacitorjs.com/docs/apis/haptics) | [`./haptics`](./haptics) | [![npm badge](https://img.shields.io/npm/v/@capacitor/haptics?style=flat-square)](https://www.npmjs.com/package/@capacitor/haptics)
| [`@capacitor/keyboard`](https://capacitorjs.com/docs/apis/keyboard) | [`./keyboard`](./keyboard) | [![npm badge](https://img.shields.io/npm/v/@capacitor/keyboard?style=flat-square)](https://www.npmjs.com/package/@capacitor/keyboard)
| [`@capacitor/local-notifications`](https://capacitorjs.com/docs/apis/local-notifications) | [`./local-notifications`](./local-notifications) | [![npm badge](https://img.shields.io/npm/v/@capacitor/local-notifications?style=flat-square)](https://www.npmjs.com/package/@capacitor/local-notifications)
| [`@capacitor/motion`](https://capacitorjs.com/docs/apis/motion) | [`./motion`](./motion) | [![npm badge](https://img.shields.io/npm/v/@capacitor/motion?style=flat-square)](https://www.npmjs.com/package/@capacitor/motion)
| [`@capacitor/network`](https://capacitorjs.com/docs/apis/network) | [`./network`](./network) | [![npm badge](https://img.shields.io/npm/v/@capacitor/network?style=flat-square)](https://www.npmjs.com/package/@capacitor/network)
| [`@capacitor/preferences`](https://capacitorjs.com/docs/apis/preferences) | [`./preferences`](./preferences) | [![npm badge](https://img.shields.io/npm/v/@capacitor/preferences?style=flat-square)](https://www.npmjs.com/package/@capacitor/preferences)
| [`@capacitor/push-notifications`](https://capacitorjs.com/docs/apis/push-notifications) | [`./push-notifications`](./push-notifications) | [![npm badge](https://img.shields.io/npm/v/@capacitor/push-notifications?style=flat-square)](https://www.npmjs.com/package/@capacitor/push-notifications)
| [`@capacitor/screen-reader`](https://capacitorjs.com/docs/apis/screen-reader) | [`./screen-reader`](./screen-reader) | [![npm badge](https://img.shields.io/npm/v/@capacitor/screen-reader?style=flat-square)](https://www.npmjs.com/package/@capacitor/screen-reader)
| [`@capacitor/share`](https://capacitorjs.com/docs/apis/share) | [`./share`](./share) | [![npm badge](https://img.shields.io/npm/v/@capacitor/share?style=flat-square)](https://www.npmjs.com/package/@capacitor/share)
| [`@capacitor/splash-screen`](https://capacitorjs.com/docs/apis/splash-screen) | [`./splash-screen`](./splash-screen) | [![npm badge](https://img.shields.io/npm/v/@capacitor/splash-screen?style=flat-square)](https://www.npmjs.com/package/@capacitor/splash-screen)
| [`@capacitor/status-bar`](https://capacitorjs.com/docs/apis/status-bar) | [`./status-bar`](./status-bar) | [![npm badge](https://img.shields.io/npm/v/@capacitor/status-bar?style=flat-square)](https://www.npmjs.com/package/@capacitor/status-bar)
| [`@capacitor/text-zoom`](https://capacitorjs.com/docs/apis/text-zoom) | [`./text-zoom`](./text-zoom) | [![npm badge](https://img.shields.io/npm/v/@capacitor/text-zoom?style=flat-square)](https://www.npmjs.com/package/@capacitor/text-zoom)
| [`@capacitor/toast`](https://capacitorjs.com/docs/apis/toast) | [`./toast`](./toast) | [![npm badge](https://img.shields.io/npm/v/@capacitor/toast?style=flat-square)](https://www.npmjs.com/package/@capacitor/toast)