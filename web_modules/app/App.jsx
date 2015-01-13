var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      items: [],
    };
  },

  componentDidMount: function() {
    this.props.itemStore.listen(function(items) {
      this.setState({
        items: items,
      });
    }.bind(this));
  },

  onAddItemClick: function() {
    this.props.addItem(Math.floor(Math.random() * 100));
  },

  render: function() {
    return (
      <div onClick={this.onAddItemClick}>items = {this.state.items.join(', ')}</div>
    );
  }
});

module.exports = App;
