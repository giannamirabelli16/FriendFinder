var express = require('express');
var path = require('path');
var friend = require("../data/friends.js");

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friend);
	});

app.post('/api/new', function(req, res){
	var newClient = req.body;
	var myScore = newClient.scores;
	var total = 0;
	var bestMatch = 100;
	var index = -1;

	// looping through friends list
	for (var i = 0; i<friend.length; i++){
		total = 0;

		// calculate the total value for each friend
		for (var j=0; j<myScore.length; j++){
			var dif = Math.abs(myScore[j] - friend[i].scores[j]);
			total += dif;
		}
		if(total < bestMatch){
			bestMatch = total;
			index = i;
		}
	}
	console.log('Best Choice', friend[index]);
	friend.push(newClient);
	res.json(friend(index));
	});
};



