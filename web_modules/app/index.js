import React from 'react';
import Reflux from 'reflux';
import App from 'app/App.jsx';

const addItem = Reflux.createAction();
const itemStore = Reflux.createStore({
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

const app = React.createElement(App, {
  itemStore: itemStore,
  addItem: addItem,
});
React.render(app, document.getElementById('app'));
