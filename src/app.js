var jquery = require('jquery')
  , SerialPortModule = require("serialport")
  , SerialPort = SerialPortModule.SerialPort;

window.$ = jquery;
window.jQuery = jquery;

define([

],
function(

) {

	Backbone.View.prototype.views = [];

	Backbone.View.prototype.close = function(){

		_.each(this.views, function(v) {
			 v.close();
		});

		if (this.onClose) {
			this.onClose();
		}

		this.undelegateEvents();
		this.$el.removeData().unbind();
		this.unbind();
		this.stopListening();
		this.remove();
		Backbone.View.prototype.remove.call(this);
	}

	Backbone.View.prototype.loadView = function(view, view_id)
	{
		if (typeof this.views[view_id] !== 'undefined') {
			 this.views[view_id].close();
		}
		this.views[view_id] = view;
		return this.views[view_id];
	}

	var app = {};
	app.commandHistory = [];
	app.programLength = 0;

  app.channel = _.extend({}, Backbone.Events);


  app.channel.on('flash.prepare', function() {
    SerialPortModule.list(function(err, result) {
      if (err) {
        throw err;
      }
      var detected = null;
      // find Synthetos board
      for (var i=0; i<result.length; i++) {
        if (result[i].manufacturer == "Synthetos" && !detected)
          detected = result[i];
      }
      if (!detected) {
        console.error('no ports detected8')
        return;
      }

      // if found, try to open the port to set it in boot mode

      app.serialport = new SerialPort(detected.comName, {
        baudrate: 1200
      });

      app.serialPortControl.on('open', function () {
        //app.serialPortControl.on('data', _onControlData);
        console.info('score!')
        debugger
      });

      console.info(detected);
    })
    alert('here')
  })

  return app;
});
