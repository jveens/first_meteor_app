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

Remove 




	
