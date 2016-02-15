AccountsTemplates.configureRoute('signIn', {
	template: 'signin',
	layoutTemplate: 'layout',
	redirect: '/posts'
});
AccountsTemplates.configureRoute('signUp', {
	template: 'signup',
	layoutTemplate: 'layout',
	redirect: '/profile'
});

// Configuration for User Account Forms

AccountsTemplates.configure({
	defaultLayout: 'layout',
	showForgotPasswordLink: true,
	texts: {
		title: {
			changePwd: "Change Your Password",
			enrollAccount: "Enroll Title",
			forgotPwd: "Forgot Your Password?",
			resetPwd: "Reset Your Password",
			signIn: "Sign In To Start Blippin",
			signUp: "Sign Up For Blipper",
			verifyEmail: "Verify Your Email Address"
		}
	}
});

AccountsTemplates.addField({
	_id: 'name',
	type: 'text',
	displayName: "Name",
	//func: function(value){return value !== ' ';},
	required: true,
	minLength: 6,
	errStr: 'Enter a blippin name yo!'
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
	_id: 'email',
	type: 'email',
	required: true,
	displayName: "email",
	re: /.+@(.+){2,}\.(.+){2,}/,
	errStr: 'Invalid email'
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
	_id: 'password',
	type: 'password',
	required: true,
	minLength: 6,
	errStr: 'Must be at least 6 characters'
});