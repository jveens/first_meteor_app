# first_meteor_app
---

| Command | Description | 
| ------- | ----------- | 
| meteor create appname | Creates Meteor scaffold | 
| meteor run | Starts Meteor server | 
| meteor mongo | Runs Mongo console | 

### Loops

	{{ #each }}
		// Loop goes here
	{{ /each }}


### Collections
A way to connect to the DB (MongoDB). 

	In JS file:
		CollectionName.find(); will find all collections of the name. 

	In Mongo Console: 
		db.collection_name.insert(object)