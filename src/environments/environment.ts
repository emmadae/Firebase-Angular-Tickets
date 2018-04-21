// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  // production: true,
  firebaseConfig : {
    apiKey: "AIzaSyABKjjh0U0xJhKpVxbrdN4PeH9v48vGow8",
    authDomain: "ticket-counter.firebaseapp.com",
    databaseURL: "https://ticket-counter.firebaseio.com",
    projectId: "ticket-counter",
    storageBucket: "",
    messagingSenderId: "858958839607"
  }
};
