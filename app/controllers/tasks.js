import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    onSubmitAction: function () {
      this.store.createRecord('task', {
        name: this.get("newItem.name"),
        description: this.get("newItem.description"),
        isCompleted: false
      });

      this.resetFormValues();
    }
  },

  newItem: {
    name: '',
    description: ''
  },

  resetFormValues: function () {
    this.set("newItem.name", "");
    this.set("newItem.description", "");
  }
});
