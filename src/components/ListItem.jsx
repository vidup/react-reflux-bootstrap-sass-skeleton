var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return (
      <li>
        <h2>{this.props.name}</h2>
      </li>
    );
  }
});

module.exports = ListItem;
