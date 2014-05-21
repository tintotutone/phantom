var page = require('webpage').create();
page.open('http://transfermarkt.de', function() {
  page.render('transfermarkt.png');
  phantom.exit();
});