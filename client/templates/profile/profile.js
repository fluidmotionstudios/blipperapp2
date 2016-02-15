Template.profile.helpers({
	email: function() {
		return Meteor.user().emails[0].address;
	}
});

Template.profile.helpers({
	profileName: function() {
		return Meteor.user().profile.name;
	}
});

//Display User Profile Picture
Template.profile.helpers({
	detailsDb: function () {
		var user = Meteor.users.findOne({
			username: Router.current().params.name
		})._id;
		return Avatars.findOne({createdBy: Meteor.userId()}, {sort:{createdAt: -1}});
	}
});
