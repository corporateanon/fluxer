var React = require('react');
var Reflux = require('reflux');
var App = require('app/App.jsx');

var addItem = Reflux.createAction();
var itemStore = Reflux.createStore({
  init: function() {
    this.items = [];
    this.listenTo(addItem, this.add);
  },
  add: function(item) {
    console.log('item added:', item);
    this.items = this.items.concat([item]);
    this.trigger(this.items);
  }
});

addItem(1);
addItem(2);

var app = React.createElement(App, {
  itemStore: itemStore,
  addItem: addItem,
});
React.render(app, document.getElementById('app'));
