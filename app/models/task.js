import DS from 'ember-data';

var Task = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Task.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "name1",
      description: "Description1",
      isCompleted: true
    },
    {
      id: 2,
      name: "name2",
      description: "Description2",
      isCompleted: false
    },
    {
      id: 3,
      name: "name3",
      description: "Description3",
      isCompleted: false
    }
  ]
});

export default Task;
