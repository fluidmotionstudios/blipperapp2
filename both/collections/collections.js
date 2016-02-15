Avatars = new Mongo.Collection("avatars");

Avatars.attachSchema(new SimpleSchema({
	createdBy: {
		type: String,
		autoValue: function(){
			if (this.isInsert){
				console.log("id inserted : " + this.userId);
				return this.userId;
			}else {
				console.log("no userId inserted");
			}
		}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	},
	avatar: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'cloudinary'
			}
		}
	}
}));

Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){return Meteor.userId()}
	},
	name: {
		type: String,
		autoValue: function(){return Meteor.user().profile.name}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	}
}));

Posts.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});

Avatars.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	remove: function(userId, doc) {
		return true;
	}
});