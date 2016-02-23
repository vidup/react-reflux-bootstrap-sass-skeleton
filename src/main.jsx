// This is the main entry point for the application
// Here we'll call for other components

var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

ReactDOM.render(<List/>, document.getElementById('persons'));
