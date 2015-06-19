import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller) {
    controller.set("test2", "test2 string");
  }
});
