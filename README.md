# first_meteor_app
## More info at http://docs.meteor.com/#/basic/
---

| Command | Description | 
| ------- | ----------- | 
| meteor help | lists all commands |
| meteor create app_name | Creates Meteor scaffold | 
| meteor run | Starts Meteor server | 
| meteor mongo | Runs Mongo console | 

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

'body' refers to html not in templates. For a specific template use:

	Template.template_name.events({ });

### Sessions
Save data to a session so the user can interact with the application and have it not be public to other users. 

Create a session variable:
	
	Session.set('variableName', event.target.value);

Get a session variable: 

	Session.get('variableName');

### Meteor Packages
