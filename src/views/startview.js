define([
  'app',
  'text!templates/start.html'
],

function(
  app,
  Tpl
)
{
  var v = Backbone.View.extend(
  {
    initialize: function(o) {
      this.tpl = _.template(Tpl);
    },

    events: {
      'click button': 'onSelect'
    },

    onSelect: function(e) {
      app.machine = $('select.bot').val();
      if (!app.machine) {
        $('select.bot').removeClass('animated bounceIn');
        $('select.bot').addClass('animated shake');
        $('select.bot').one('webkitAnimationEnd', function(e) {
          $(this).removeClass('animated shake');
        })
        return;
      }
      app.selectedView = 'detect';
      app.channel.trigger('newpage');
    },

    render: function()
    {
      this.$el.html(this.tpl({app:app}));
      return this.$el;
    }
  });

  return v;
});
