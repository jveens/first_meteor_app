if (Meteor.isClient) {

	Template.resolution.helpers({
	  isOwner: function() {
	    // check whether the current user is the same user that owns the content
	    return this.owner === Meteor.userId();
	  }
	});

	Template.resolution.events({

	  'click .toggle-checked': function() {
	    // Resolutions.update(this._id, {$set: {
	    //   checked: !this.checked
	    // }});
	    Meteor.call('updateResolution', this._id, !this.checked)
	  },

	  'click .delete': function() {
	    // Resolutions.remove(this._id);
	    Meteor.call('deleteResolution', this._id)
	  },
	  'click .toggle-private': function() {
	    Meteor.call('setPrivate', this._id, !this.private)
	  },
	});

	Accounts.ui.config({
	  passwordSignupFields: "USERNAME_ONLY"
	});

}