Meteor.subscribe("posts");
Meteor.subscribe("avatars");

Template.registerHelper('getAvatar', function(userId){
	var imgUrl = Avatars.findOne({userId: this.userId }, {sort: {createdAt: -1}}).avatar;
	return imgUrl;
});

Template.registerHelper('timeAgo', function(datetime) {
	Session.get('time');
	return moment(datetime).fromNow();
});

setInterval(function(){
	Session.get("time", new Date())
}, 60000); //Every Minute

