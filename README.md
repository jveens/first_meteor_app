# first_meteor_app
---

| Command | Description | 
| ------- | ----------- | 
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
