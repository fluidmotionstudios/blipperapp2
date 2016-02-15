Meteor.publish("posts", function() {
	return Posts.find();
});

Meteor.publish("avatars", function() {
	return Avatars.find();
});