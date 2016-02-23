var Reflux = require('reflux');
var SnpActions = require('./SnpActions.jsx');

var SnpStore = Reflux.createStore({
  listenables : [SnpActions],
  test : function(){
    console.log('Test action !');
  }
});

module.exports = SnpStore;
