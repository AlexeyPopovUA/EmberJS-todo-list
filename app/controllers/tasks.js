import Ember from 'ember';

export default Ember.Controller.extend({
  taskList: [
    {
      name: "name1",
      description: "Description1"
    },
    {
      name: "name2",
      description: "Description2"
    }
  ]
});
