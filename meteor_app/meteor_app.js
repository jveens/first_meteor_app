Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
  // anything that is in the body of our app, but not in a template, can use this helper
  Template.body.helpers({
    resolutions: function() {
      // Will find all Resolutions in Mongo (for a specific user)

      // If we have a hideFinished variable equal to true
      // get all the resolutions NOT equal to true
      if (Session.get('hideFinished')) {
        return Resolutions.find({checked: {$ne: true}});
      }
      // Otherwise get all the resolutions
      else {
        return Resolutions.find();
      }
    },
    // We eed to define our hideFinished template helper
    hideFinished: function() {
      // retrieve the session variable
      return Session.get('hideFinished');
    }
  });

  // Template.body becaue we are not in a specific template. 
  // Otherwise Template.template_name
  Template.body.events({
    'submit .new-resolution': function(event) {
      // target.title because that's the name of our field
      var titleForm = event.target.title.value;

      // this will save to our database, as well as update our view
      // Resolutions.insert({
      //   title : titleForm,
      //   createdAt: new Date()
      // });

      // Since we've removed Insecure, we have to call a function to do what the above block did
      // Call the method with Meteor.call(function, value to pass);
      Meteor.call('addResolution', titleForm);

      event.target.title.value = '';

      // if we don't return false, the page will refresh due to the submit event. 
      return false;
    },
    'change .hide-finished': function(e) {
      // here we need to set a sesstion variable
      Session.set('hideFinished', e.target.checked);
    }

  });

  Template.resolution.events({

    'click .toggle-checked': function() {
      Resolutions.update(this._id, {$set: {
        checked: !this.checked
      }});
    },

    'click .delete': function() {
      Resolutions.remove(this._id);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}// end of isClient


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


// We need the below code because we've removed Insecure
Meteor.methods({
  addResolution: function(title) {
    Resolutions.insert({
      title : title,
      createdAt: new Date()
    });
  }
});