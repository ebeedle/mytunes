// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    SongQueueEntryView.prototype.render();
    this.collection.on('render', this.render())
    // this.render()
    // this.collection.on('add', this.render())
  },

  render: function() {
    return this.$el;
  }

});
