# Cinebee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Angular 12 has to be built with Node 16. The Firebase CLI needs Node 20. A newer default Node (for example 24) cannot build this app.

Log in once with the Google account that already owns this site. The Firebase project is the one saved in `.firebaserc`. Keep that account and the project id out of this file.

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"

nvm use 16.20.2
npx ng build --configuration production

nvm use 20
npx firebase-tools deploy --only hosting
```

`Unable to locate stylesheet` for the Bootstrap and Font Awesome CDN links during the build can be ignored.

To check the site locally before deploying:

```bash
nvm use 16.20.2
npx ng serve --host 127.0.0.1 --port 4201
```

Then open `http://127.0.0.1:4201/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
