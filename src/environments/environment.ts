// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDTZvWl3HMFbPDOMPOCJOMomQiO_PV-4lg',
    authDomain: 'ng-portfolio-53c4a.firebaseapp.com',
    databaseURL: 'https://ng-portfolio-53c4a.firebaseio.com',
    projectId: 'ng-portfolio-53c4a',
    storageBucket: 'ng-portfolio-53c4a.appspot.com',
    messagingSenderId: '203382193182'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
