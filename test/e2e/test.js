var config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['youtubeSearch'],
  'Local Host Title': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      // checks for correct title
      .assert.title('React Youtube Search')
      .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
      // checks for correct components being loaded
      .assert.visible('.search-bar')
      .assert.visible('.video-detail')
      .assert.visible('.details')
      .assert.visible('.video-list')
      // checks to see if 'hello' video is pre loaded
      .assert.containsText('.details', 'Hello')
      .click('.embed-responsive-item')
      .pause(2000)
      // puts in new search for 'soccer'
      .clearValue('.search-bar-text')
      .setValue('.search-bar-text', 'soccer')
      .pause(3000)
      // checks to see if new videos on side have changed to soccer videos
      .assert.containsText('.media-heading', 'Soccer')
      .saveScreenshot(config.imgpath(browser) + 'soccer.png')
      .click('.video-list')
      .pause(1000)
      .click('.embed-responsive-item')
      .pause(2000)
      // checks to see if new soccer video is clicked, and if the video info has changed
      .assert.containsText('.details', 'Soccer')
      .end();
      
  }
  
  
};
