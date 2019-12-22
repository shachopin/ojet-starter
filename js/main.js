/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

 // The UserAgent is used to detect IE11. Only IE11 requires ES5.
(function () {
  
  function _ojIsIE11() {
    var nAgt = navigator.userAgent;
    return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
  };
  var _ojNeedsES5 = _ojIsIE11();

  requirejs.config(
    {
      baseUrl: 'js',

      // Path mappings for the logical module names
      paths:
// injector:mainReleasePaths

{
  "knockout":"https://20191221-ojet-staging.netlify.com/js/libs/knockout/knockout-3.5.0.debug",
  "jquery":"https://20191221-ojet-staging.netlify.com/js/libs/jquery/jquery-3.4.1",
  "jqueryui-amd":"https://20191221-ojet-staging.netlify.com/js/libs/jquery/jqueryui-amd-1.12.1",
  "promise":"https://20191221-ojet-staging.netlify.com/js/libs/es6-promise/es6-promise",
  "hammerjs":"https://20191221-ojet-staging.netlify.com/js/libs/hammer/hammer-2.0.8",
  "ojdnd":"https://20191221-ojet-staging.netlify.com/js/libs/dnd-polyfill/dnd-polyfill-1.0.1",
  "ojs":"https://20191221-ojet-staging.netlify.com/js/libs/oj/v8.0.0/debug" + (_ojNeedsES5 ? "_es5" : ""),
  "ojL10n":"https://20191221-ojet-staging.netlify.com/js/libs/oj/v8.0.0/ojL10n",
  "ojtranslations":"https://20191221-ojet-staging.netlify.com/js/libs/oj/v8.0.0/resources",
  "persist":"https://20191221-ojet-staging.netlify.com/js/libs/persist/debug",
  "text":"https://20191221-ojet-staging.netlify.com/js/libs/require/text",
  "signals":"https://20191221-ojet-staging.netlify.com/js/libs/js-signals/signals",
  "touchr":"https://20191221-ojet-staging.netlify.com/js/libs/touchr/touchr",
  "regenerator-runtime":"https://20191221-ojet-staging.netlify.com/js/libs/regenerator-runtime/runtime",
  "corejs":"https://20191221-ojet-staging.netlify.com/js/libs/corejs/shim",
  "customElements":"https://20191221-ojet-staging.netlify.com/js/libs/webcomponents/custom-elements.min",
  "proj4":"https://20191221-ojet-staging.netlify.com/js/libs/proj4js/dist/proj4-src",
  "css":"https://20191221-ojet-staging.netlify.com/js/libs/require-css/css",
  "css-builder":"https://20191221-ojet-staging.netlify.com/js/libs/require-css/css-builder",
  "normalize":"https://20191221-ojet-staging.netlify.com/js/libs/require-css/normalize"
}

// endinjector
    }
  );
}());

/**
 * A top-level require call executed by the Application.
 * Although 'knockout' would be loaded in any case (it is specified as a  dependency
 * by some modules), we are listing it explicitly to get the reference to the 'ko'
 * object in the callback
 */
require(['ojs/ojbootstrap', 'knockout', 'appController', 'ojs/ojlogger', 'ojs/ojrouter', 'ojs/ojknockout',
  'ojs/ojmodule', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar'],
  function (Bootstrap, ko, app, Logger, Router) { // this callback gets executed when all required modules are loaded
    Bootstrap.whenDocumentReady().then(
      function() {

        function init() {
            Router.sync().then(
              function () {
                app.loadModule();
                // Bind your ViewModel for the content of the whole page body.
                ko.applyBindings(app, document.getElementById('globalBody'));
              },
              function (error) {
                Logger.error('Error in root start: ' + error.message);
              }
            );
          }

          // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
          // event before executing any code that might interact with Cordova APIs or plugins.
          if (document.body.classList.contains('oj-hybrid')) {
            document.addEventListener("deviceready", init);
          } else {
            init();
          }
        });
  }
);
