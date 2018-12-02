'use strict';
var _TEST_URI;

module.exports = {
  'before': function(client) {
    console.log('Runs before test cases');
    _TEST_URI = client.launch_url;
  },

  'after': function(client) {
    console.log('Runs after all test cases');
    client.end();
  },

  'Open Google Page': function(client) {
    client
      .url(_TEST_URI)
      .waitForElementVisible('body', 50000)
      .pause(500)
      .setValue('input[name=q]', 'nightwatchjs')
      .click('#lga')
      .click('input[name=btnK]')
      .pause(5000)
  }
};