requirejs.config(
{
  deps: ["main"],

  paths: {
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
  },

  shim: {
    "backbone": {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
    },
    "underscore": {
        exports: "_"
    },
    "jquery": {
        exports: "$"
    },
    "bootstrap": {
        deps: ["jquery"],
        exports: 'bootstrap'
    },
    "main": ["backbone"],
  }

});
