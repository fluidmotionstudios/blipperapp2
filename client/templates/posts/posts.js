Template.posts.rendered = function() {
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal();
};

Template.posts.helpers({
	posts: function(){
		return Posts.find({}, {sort:{createdAt: -1}});
	}
});

Template.posts.helpers({
	detailsDb: function () {
		var user = Meteor.users.findOne({
			username: Router.current().params.name
		})._id;
		return Avatars.findOne({createdBy: this.userId}, {sort:{createdAt: -1}});
	}
});