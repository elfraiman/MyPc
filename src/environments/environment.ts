// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDA1m4ghbigWb9KFJ6hys6Eo4AUQjIWQEM',
    authDomain: 'mypc-19263.firebaseapp.com',
    databaseURL: 'https://mypc-19263.firebaseio.com',
    projectId: 'mypc-19263',
    storageBucket: 'mypc-19263.appspot.com',
    messagingSenderId: '968483788081'
  },

  paypal: {
    env: 'sandbox',
    client: {
    sandbox: 'AQOZ213gUYduelmVBe4GDB5erobOgVNH14BhuJyG2iCXAocC2V85SFzPy0u3w84TU-N9hTCc29gZJ25z', // Enter your sandbox client ID here
    secret: 'EEbldX_2Zy4GWbn2LYf7BBevI166TU8STYMM8_G8hkS-CkRM68UqVC2OXL_fON_kOGxROpm3phz9GOwd'
  }
  }
};




/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

