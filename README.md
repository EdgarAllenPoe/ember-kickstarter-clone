# ember-kickstarter-clone

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Firebase](http://yoember.com/#setup-a-server-on-firebase) This is an excellent tutorial by [Zoltan Debre](https://www.linkedin.com/in/zoltandebre) with a section on getting started with Firebase.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-kickstarter-clone`
* `npm install`
* `bower install`
* `ember install ember-cli-sass`
    - change name of file `app/sytles/app.css` to `app/sytles/app.scss`
* `ember install ember-cli-bootstrap-sassy`
    - add the following line to your app.scss file
        + `@import "bootstrap";`
* `ember install ember-cli-font-awesome-sass`
    - add the following line to your app.scss file
        + `@import "ember-cli-font-awesome-sass";`
* change name of `configure/environment(copy).js` to `configure/environment.js`
* follow instructions [here](http://yoember.com/#setup-a-server-on-firebase) to set up a server on firebase
* follow instructions [here](http://yoember.com/#deploy-your-app-using-firebase-hosting-service) to deploy this app to firebase
* if you want to render the modal popup only once per day per user, uncomment the lines in `app/component/modal-one-time.js`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
