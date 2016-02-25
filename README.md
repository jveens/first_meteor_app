# first_meteor_app
## More info at http://docs.meteor.com/#/basic/
---

| Command | Description | 
| ------- | ----------- | 
| meteor help | lists all commands |
| meteor create app_name | Creates Meteor scaffold | 
| meteor run | Starts Meteor server | 
| meteor mongo | Runs Mongo console | 
| meteor add package-name | Add Meteor package to app |
| meteor remove package-name | Remove package from app | 
| meteor deploy project-name.meteor.com | Deploy to Meteor server |

### Loops

	{{ #each }}
		// Loop goes here
	{{ /each }}

### Collections
A way to connect to the DB (MongoDB). 

In JS file:

		CollectionName.find(); // Will find all collections of the name. 

In Mongo Console: 

		db.collection_name.insert(object)

### Forms
To work with a form we want to grab the field values on submit: 
	
	Template.body.events({
		'submit' : functiion(e) {

			var fromForm = event.target.form_field.value;
			
			Collections.insert({
				value: fromForm
			});

			// Clear the form
			event.target.form_field.value = '';

			// return to prevent page from refreshing
			return false;
		}
	});

#### A note on Template Helpers

'body' refers to html not in templates. For a specific template use:

	Template.template_name.events({ });

### Sessions
Save data to a session so the user can interact with the application and have it not be public to other users. 

Create a session variable:
	
	Session.set('variableName', event.target.value);

Get a session variable: 

	Session.get('variableName');

### Meteor Packages - atmospherejs.com
Use packages to extend the functionality on your meteor site.

### User accounts
With packages :
* Accounts UI - https://atmospherejs.com/meteor/accounts-ui
* Accounts Password - https://atmospherejs.com/meteor/accounts-password
* Accounts Twitter - https://atmospherejs.com/meteor/accounts-twitter
* Accounts Facebook - https://atmospherejs.com/meteor/accounts-facebook

Add login button: 

	{{> loginButtons}}

Check if user is logged in: 

	{{ #if currentUser }} {{ /if }}

Accounts UI can be customized with config: 
	
	Accounts.ui.config({ // config_options here });


### Security considerations
Insecre is a package that makes things really quick to set-up, but can leave some vulnerabilities in our app. 

This package allows users to access functions that can update the DB (insert / remove data), so once we remove it our app won't work the way we want it to. To get around this, we can add methods to interact with the DB, and then call those methods. This prevents our users from being able to interact with our DB through the console. 

	meteor remove insecure

We can create custom methods with:

	Meteor.methods({
		funcionName: function(value) {
			// Code goes here
		}
	});

We can then call our methods: 

	Meteor.call({ 'functionName', value_to_pass });

### Removing Autopublish
By removing this package, we need to set up publish and subscribe, to ensure that users only get the data that they should have access to. 

	meteor remove autopublish

After removal the app will be broken (it can't find the data!), so we need to fix it with Meteor.publish and Meteor.subscribe.

	if (Meteor.isServer) {
	  Meteor.publish('collection', function() {
	    return Collection.find();
	  });
	}

	if (Meteor.isClient) {
	  Meteor.subscribe('resolutions');
 	}





	
