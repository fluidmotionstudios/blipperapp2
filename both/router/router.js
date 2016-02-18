Router.configure({
	layoutTemplate: "layout"
});

//Router.configure({
	//layoutTemplate: "homeLayout"
//});

Router.route('/', function() {
	this.render('home');
	this.layout('homeLayout');
});

Router.route('/about');

Router.route('posts');

Router.route('/profile');

//Router.route('/signup');

//Router.route('/signin');

// SignIn and SignUp Routes
