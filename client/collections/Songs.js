// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  
  parse: function(response) {
  	return response.results;
  },

  initialize: function() {
  	this.fetch({
  		data: {
  			limit:30
  		}
  	})
  },
  	
/*
  	for (var i = response.results.length - 1; i >= 0; i--) {
  		results.push(response.results[i]);
  	}
  	console.log(results)
  	return results;
 */
  });

