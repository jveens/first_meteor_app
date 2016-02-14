Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
  // anything that is in the body of our app, but not in a template, can use this helper
  Template.body.helpers({
    resolutions: function() {
      // Will find all Resolutions in Mongo
      return Resolutions.find();
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// { title: 'Hello Resolution #1' },
// { title: 'Hello Resolution #2' },
// { title: 'Hello Resolution #3' }