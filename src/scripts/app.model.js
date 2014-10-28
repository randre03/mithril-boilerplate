/**
 * Created by randre03 on 10/27/14.
 */
m = require('mithril');

//this application only has one module: todo
var todo = {};

//for simplicity, we use this module to namespace the model classes

//the Todo class has two properties
todo.Todo = function(data) {
  this.description = m.prop(data.description);
  this.done = m.prop(false);
};

//the TodoList class is a list of Todo's
todo.TodoList = Array;