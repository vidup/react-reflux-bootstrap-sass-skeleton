// Dependencies
var React = require('react');
var ListItem = require('./ListItem.jsx');

var fakeIndividuals = [
  {
    id : 1,
    name : "Victor Dupuy"
  },
  {
    id : 2,
    name : "Etienne Phelip"
  },
  {
    id : 3,
    name : "Cedric Urvoy"
  }
];

var List = React.createClass({
  render : function(){
    var listItems = fakeIndividuals.map( (item) => {
      return <ListItem key={item.id} name={item.name}/>
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
